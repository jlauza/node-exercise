const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Entry point for the app
app.get("/", (req, res) => {
  // const filePath = path.join(__dirname, "index.html");
  const filePath = path.join(__dirname, "public", "home", "index.html");
  res.sendFile(filePath);
});

app.get("/auth", (req, res) => {
  const filePathHome = path.join(__dirname, "public", "auth", "index.html");
  res.sendFile(filePathHome);
});

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
