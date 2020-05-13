const express = require("express");
const logger = require("@port/logger");
const cors = require("cors");

const PORT = process.env.PORT || 8080;
const app = express();

const allowedOrigins = ["http://localhost:3000", "https://eggers.dev"];

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true);
      if (allowedOrigins.indexOf(origin) === -1) return "fuck you";
      return cb(null, true);
    },
    optionsSuccessStatus: 200,
  })
);

app.get("/start", (req, res) => {
  logger.info("/start was hit");
  return res.json({ title: "pop pop" });
});

app.listen(PORT, () => console.log("Spinning"));
