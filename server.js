// Express app here
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import router from "./routes/routes.js";

// call dotenv
dotenv.config({
  path: "./config.env",
});

const PORT = process.env.API_PORT || 3001;

// setup express app
const app = express();

app.use(express.urlencoded({ extended: true }));
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

// mongo db connection
const dbURL =
  "mongodb://" +
  process.env.DB_URL +
  ":" +
  process.env.DB_PORT +
  "/" +
  process.env.DB_NAME;

mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
  })
  .then(() => {
    // listen for request
    app.listen(PORT, (err) => {
      if (err) {
        console.error(err.message);
        process.exit();
      } else {
        console.log("App is started successfully with DB . . .");
      }
    });
  })
  .catch((err) => {
    console.error(err.message);
    process.exit();
  });

// static middleware
app.use(express.static("public"));
// call the routes
app.use("/blogs", router);
