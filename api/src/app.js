import express from "express";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import swaggerUi from "swagger-ui-express";
import { parse } from "yaml";
import { pool } from "./db.js";

const OPENAPI_PATH = join(import.meta.dirname, "..", "openapi.yaml");
const openapiSpec = parse(readFileSync(OPENAPI_PATH, "utf8"));

export const app = express();

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapiSpec));

app.get("/health", async (req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ status: "ok", database: "ok" });
  } catch {
    res.status(503).json({ status: "error", database: "unavailable" });
  }
});
