import express from "express";
import path from "path";

const __dirname = path.resolve();
const router = express.Router();

// Get routes
router.get("/", (req, res, next) => {
  res.render("index", { title: "Home" });
});
router.get("/about", (req, res, next) => {
  res.render("about", { title: "About" });
});

router.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Blog" });
});

// 404 page not found
router.get("*", (req, res, next) => {
  res.status(404).render("404", { title: "Not Found" });
});

export default router;
