// Express app here
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

import router from "./routes/routes.js";

// call dotenv
dotenv.config({
  path: "./config.env",
});

const PORT = process.env.API_PORT || 3001;

// setup express app
const app = express();

app.use(morgan("dev"));
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

// static middleware
app.use(express.static("public"));
// call the routes
app.use("/", router);
