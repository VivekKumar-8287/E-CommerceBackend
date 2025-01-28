import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import {
  deleteProduct,
  getAdminProducts,
  getAllCategories,
  getLatestProducts,
  getSingleProduct,
  newProduct,
  searchProducts,
  updateProduct,
} from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";

const app = express.Router();

// Create New Product - /api/v1/product/new
app.post("/new", adminOnly, singleUpload, newProduct);

// to search product /api/v1/product/all
app.get("/all", searchProducts);

// to get latest 5 product - /api/v1/product/latest
app.get("/latest", getLatestProducts);

// to get all unique categories - /api/v1/product/categories
app.get("/categories", getAllCategories);

// To get all Products - /api/v1/product/admin-products
app.get("/admin-products", adminOnly, getAdminProducts);


// to get, update, delete Product
app
  .route("/:id")
  .get(getSingleProduct)
  .put(adminOnly, singleUpload, updateProduct)
  .delete(adminOnly, deleteProduct);

export default app;
