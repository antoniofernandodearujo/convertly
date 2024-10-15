import { Router } from "express";
import fileConverter from "../controllers/convertController";
import multer from "multer";

const router = Router();
const upload = multer(); // Armazenamento em memória

router.post("/", upload.single("file"), (req, res, next) => {
  console.log("Arquivo após upload:", req.file);
  fileConverter.convertFile(req, res).catch(next);
});

export default router;
