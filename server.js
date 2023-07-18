const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Entry point for the app - Route to Home page
app.get("/", (req, res) => {
  // const filePath = path.join(__dirname, "index.html");
  const filePath = path.join(
    __dirname,
    "public",
    "views",
    "home",
    "index.html"
  );
  res.sendFile(filePath);
});

// Route to Auth page
app.get("/auth", (req, res) => {
  const filePath = path.join(
    __dirname,
    "public",
    "views",
    "auth",
    "index.html"
  );
  res.sendFile(filePath);
});

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
