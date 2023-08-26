// Very simple production Vue.js server
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BASE_PATH = path.resolve(`${__dirname}/..`);

import express from "express";
import settings from "../data/settings.js";
const PORT = settings.port;

const app = express();

app.use(express.static(path.join(BASE_PATH, "dist")));

app.get("/", (req, res) => {
    res.sendFile(path.join(BASE_PATH, "dist", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
