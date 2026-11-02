import express from "express";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import swaggerUi from "swagger-ui-express";
import { parse } from "yaml";
import { healthRoutes } from "./modules/health/health.routes.js";

const OPENAPI_PATH = join(import.meta.dirname, "..", "openapi.yaml");
const openapiSpec = parse(readFileSync(OPENAPI_PATH, "utf8"));

export const app = express();

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapiSpec));
app.use("/health", healthRoutes);