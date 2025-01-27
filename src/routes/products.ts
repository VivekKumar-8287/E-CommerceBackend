import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import {
  getAdminProducts,
  getAllCategories,
  getLatestProducts,
  getSingleProduct,
  newProduct,
  updateProduct,
} from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";

const app = express.Router();

// Create New Product - /api/v1/product/new
app.post("/new", adminOnly, singleUpload, newProduct);

// to get latest 5 product - /api/v1/product/latest
app.get("/latest", getLatestProducts);

// to get all unique categories - /api/v1/product/categories
app.get("/categories", getAllCategories);

// To get all Products - /api/v1/product/admin-products
app.get("/admin-products", getAdminProducts);

app.route("/:id").get(getSingleProduct).put(singleUpload,updateProduct);

export default app;
