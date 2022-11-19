// import modules
import blogSchema from "../modules/blogSchema.js";

// Get Blogs

export const getBlogs = async (req, res, next) => {
  try {
    const getBlogs = await blogSchema
      .find()
      .sort({ createdAt: -1 })
      .then((result) => {
        res.render("index", { blogs: result, title: "Blogs" });
      });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// create blogs

export const create_blog_get = (req, res, next) => {
  res.render("create", { title: "Create a new blog" });
};

export const create_blog = async (req, res, next) => {
  const { title, snippet, body } = req.body;
  try {
    const blog = await blogSchema
      .create({
        title,
        snippet,
        body,
      })
      .then((result) => {
        res.redirect("/blogs");
      });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
