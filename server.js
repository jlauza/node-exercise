const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Entry point for the app
app.get("/", (req, res) => {
  // res.send("Please login");
  const filePath = path.join(__dirname, "index.html");
  res.sendFile(filePath);
});

// Route for the admin section
// Serve static files
app.use(express.static(path.join(__dirname, "admin", "public")));

// Route handler for serving the React app
app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "admin", "public", "index.html"));
});

// Route for the user section
// app.use("/user", require("./student/src/index")); // enable when user section is ready

// Other routes here and middleware

// Start server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
