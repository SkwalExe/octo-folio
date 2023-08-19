// Very simple production Vue.js server

require("dotenv").config();

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8008;

const app = express();

app.use(express.static(path.join(__dirname, "..", "dist")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
