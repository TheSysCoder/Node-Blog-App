// Express app here
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/routes.js";

// call dotenv
dotenv.config({
  path: "./config.env",
});

const PORT = process.env.API_PORT || 3001;

// setup express app
const app = express();

// register view engine
app.set("view engine", "ejs");
// setup cors
app.use(
  cors({
    origin: "*",
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
  })
);

// listen for request
app.listen(PORT, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Express app is running . . .");
  }
});

// call the routes
app.use("/", router);
