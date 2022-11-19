import express from "express";
import {
  getBlogs,
  create_blog,
  create_blog_get,
} from "../controller/blogController.js";

const router = express.Router();

router.get("/", getBlogs);

router.get("/", create_blog_get);

router.post("/", create_blog);
export default router;
