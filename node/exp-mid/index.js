const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

const logFilePath = path.join(__dirname, "log.json");

const loggerMiddleware = (req, res, next) => {
  const time = new Date().toLocaleString();

  const logData = {
    time,
    method: req.method,
    url: req.url,
    ip: req.ip,
  };

  console.log(`[${time}] ${req.method} ${req.url}`);

  fs.readFile(logFilePath, "utf-8", (err, data) => {
    let logs = [];

    if (!err && data) {
      try {
        logs = JSON.parse(data);
      } catch (e) {
        logs = [];
      }
    }

    logs.push(logData);

    fs.writeFile(logFilePath, JSON.stringify(logs, null, 2), (err) => {
      if (err) console.log("❌ Error writing log file:", err);
    });
  });

  next();
};

const authMiddleware = (req, res, next) => {
  const token = req.headers["x-auth-token"];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "❌ Access Denied! Please provide x-auth-token in header",
    });
  }

  next();
};

app.use(loggerMiddleware);

app.get("/", (req, res) => {
  res.send("Hello! This is a public route 😄");
});

app.get("/dashboard", authMiddleware, (req, res) => {
  res.send("✅ Welcome to Dashboard! You passed middleware 🎉");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
