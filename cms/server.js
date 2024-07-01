// Get dependencies
const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Import routing files
const index = require("./server/routes/app");
const messageRoutes = require("./server/routes/messages");
const contactRoutes = require("./server/routes/contacts");
const documentRoutes = require("./server/routes/documents");

// Create an instance of express
const app = express();

// Set up middleware
const setupMiddleware = (app) => {
  // Use Helmet to secure Express apps by setting various HTTP headers
  app.use(helmet());

  // Use body-parser middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // Use cookie-parser middleware
  app.use(cookieParser());

  // Use Morgan logger
  app.use(logger("dev"));

  // Add support for CORS
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

  // Serve static files
  app.use(express.static(path.join(__dirname, "dist/cms/browser")));
};

// Set up routes
const setupRoutes = (app) => {
  // Map routes
  app.use("/", index);
  app.use("/messages", messageRoutes);
  app.use("/contacts", contactRoutes);
  app.use("/documents", documentRoutes);

  // Handle undefined routes
  app.use((req, res, next) => {
    res.render("index");
  });

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/cms/browser/index.html"));
  });
};

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Set up middleware and routes
setupMiddleware(app);
setupRoutes(app);

// Define the port address and tell express to use this port
const port = process.env.PORT || "3000";
app.set("port", 3000);

// Create HTTP server
const server = http.createServer(app);

// Tell the server to start listening on the provided port
server.listen(3000, () => {
  console.log(`API running on localhost: ${3000}`);
});
