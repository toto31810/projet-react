require("dotenv").config();

process.env.mode =
	process.env.mode === "development" ? "development" : "production";
process.env.port =
	process.env.port || 3000;

const path = require("node:path");

const express = require("express");
const app = express();

app.use(express.static(path.resolve("./public/static/")));

app.get("/", (req, res) => {
	res.sendFile(path.resolve("./public/index.html"));
});

app.use("/api", require("./routes/api.js"));

const http = require("http").createServer(app);
http.listen(process.env.port, () => console.log("server listening on port", process.env.port));
