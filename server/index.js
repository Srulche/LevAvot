// Import required modules
const express = require("express");
const cors = require("cors");
const { startServer } = require("./utils");

// Load environment variables from .env

// Create an Express application
const app = express();
const port = process.env.PORT || 3000; // Use PORT from .env or default to 3000

app.use(cors());
app.use(express.json());
// Define a route
app.get("/", (req, res) => {
  res.send("Hello, this is your Express server!");
});

// Start the server using a utility function
startServer(app, port);
