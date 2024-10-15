import express from "express";
import convertRoutes from "./routes/convertRoutes";
import { corsMiddleware } from "./middlewares/corsMiddlware";
import dotenv from 'dotenv';

// Carrega as variáveis do arquivo .env
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(corsMiddleware);
app.use(express.json());

app.use("/api/convert", convertRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
