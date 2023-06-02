const express = require("express");

const app = express();

const path = require("path");

// Entry point for the app
app.get("/", (req, res) => {
  // res.send("Please login");
  const filePath = path.join(__dirname, "index.html");
  res.sendFile(filePath);
});

// Route for the admin section
// app.use("/admin", require("./admin/src/index"));
app.get("/admin", (req, res) => {
  // res.send("Please login");
  const filePath = path.join(__dirname, "/admin/src/index.tsx");
  res.sendFile(filePath);
});

// Route for the user section
// app.use("/user", require("./student/src/index")); // enable when user section is ready

// Other routes here and middleware

// Start server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
