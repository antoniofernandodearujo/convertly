import cors from "cors";

export const corsMiddleware = cors({
  origin: "*", // Ajuste para o seu domínio se necessário
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
});
