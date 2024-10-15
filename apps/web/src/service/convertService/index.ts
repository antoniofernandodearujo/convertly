import dotenv from "dotenv";
dotenv.config();

import ConvertAPI from "convertapi-js";

const apiKey = process.env.NEXT_PUBLIC_CONVERT_API_KEY;

if (!apiKey) {
  throw new Error("Chave de API não encontrada.");
}

const convertapi = new ConvertAPI(apiKey); // Substitua pelo seu segredo de API

export const convertFile = async (
  file: File,
  selectedButtonId: number | null
) => {
  try {
    const params = convertapi.createParams();
    params.add("file", file); // Adiciona o arquivo selecionado

    let result;
    if (selectedButtonId === 1) {
      result = await convertapi.convert("pdf", "docx", params); // PDF para Word
    } else if (selectedButtonId === 2) {
      result = await convertapi.convert("docx", "pdf", params); // Word para PDF
    }

    if (result && result.files && result.files.length > 0) {
      return result.files[0].Url; // Retorna a URL do arquivo convertido
    } else {
      throw new Error("Conversão falhou, resultado indefinido.");
    }
  } catch (error) {
    console.error("Erro durante a conversão: ", error);
    throw new Error("Erro na conversão do arquivo.");
  }
};
