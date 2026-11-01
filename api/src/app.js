import express from "express";
import { pool } from "./db.js";

export const app = express();

app.use(express.json());

app.get("/health", async (req, res) => {
    try {
        await pool.query("SELECT 1");
        res.json({ status: "ok", database: "ok" });
    } catch {
        res.status(503).json({ status: "error", database: "unavailable" });
    }
});