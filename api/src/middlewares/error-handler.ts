import type { ErrorRequestHandler } from "express";
import { AppError } from "../errors/app-error.js";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // Erro inesperado: registra o detalhe no log e responde algo genérico
  if (!(err instanceof AppError)) {
    console.error(err);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }

  // Erro com mensagens por campo: o front encaixa direto no estado errors
  if (err.errors) {
    return res.status(err.statusCode).json({ errors: err.errors });
  }

  // Erro geral, sem campo específico
  return res.status(err.statusCode).json({ message: err.message });
};
