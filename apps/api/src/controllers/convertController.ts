// src/controllers/convertController.ts
import { Request, Response } from "express";
import ConvertApi from "convertapi";
import multer from "multer";
import path from "path";
import fs from "fs";
import axios from "axios";
import { bucket } from "../firebase/firebaseConfig"; // Importando o bucket do Firebase

// Configuração do multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

class FileConverter {
  private convertApi: ConvertApi;

  constructor(apiSecret: string) {
    this.convertApi = new ConvertApi(apiSecret);
  }

  public async convertFile(req: Request, res: Response): Promise<Response> {
    console.log("Requisição recebida");

    const { conversionType } = req.body;
    const file = req.file;

    if (!file || !conversionType) {
      return res
        .status(400)
        .json({ error: "File and conversionType are required." });
    }

    const filePath = path.join(__dirname, file.originalname);
    await fs.promises.writeFile(filePath, file.buffer);

    try {
      const result = await this.performConversion(
        filePath,
        conversionType,
        file.originalname
      );

      if (result) {
        const convertedFileUrl = result.files[0].url;
        const uploadedUrl = await this.uploadToFirebase(
          convertedFileUrl,
          file.originalname
        );

        return res.json({ url: uploadedUrl.url });
      }

      return res
        .status(400)
        .json({ error: "Conversion failed, undefined result." });
    } catch (error) {
      console.error("Erro durante a conversão: ", error);
      return res
        .status(500)
        .json({
          error: "Error during file conversion.",
          details: (error as Error).message,
        });
    }
  }

  private async performConversion(
    filePath: string,
    conversionType: string,
    originalFileName: string
  ) {
    console.log("Iniciando conversão...");

    if (conversionType === "2" && path.extname(originalFileName) === ".docx") {
      return await this.convertApi.convert("pdf", { File: filePath }, "docx");
    } else if (
      conversionType === "1" &&
      path.extname(originalFileName) === ".pdf"
    ) {
      return await this.convertApi.convert("docx", { File: filePath }, "pdf");
    }

    throw new Error("Invalid file format for conversion.");
  }

  private async uploadToFirebase(
    convertedFileUrl: string,
    originalFileName: string
  ) {
    const response = await axios.get(convertedFileUrl, {
      responseType: "arraybuffer",
    });
    const newFileName = `converted_${path.basename(
      originalFileName,
      path.extname(originalFileName)
    )}${path.extname(convertedFileUrl)}`;

    const fileUpload = bucket.file(newFileName);
    await fileUpload.save(response.data, {
      metadata: { contentType: response.headers["content-type"] },
    });

    const [url] = await fileUpload.getSignedUrl({
      action: "read",
      expires: "03-09-2500",
    });

    return {
      fileName: newFileName,
      fileType: path.extname(convertedFileUrl),
      url,
    };
  }
}

const apiSecret = process.env.CONVERT_API_SECRET;
if (!apiSecret) {
  throw new Error("CONVERT_API_SECRET environment variable is not defined.");
}
const fileConverter = new FileConverter(apiSecret);
export default fileConverter;
