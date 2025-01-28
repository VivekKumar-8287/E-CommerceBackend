import { myCache } from "../app.js";
import { Product } from "./../models/product";
import { InvalidateCacheProps } from "./../types/types";
import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017", {
      dbName: "Ecommerce_Site",
    })
    .then((c) => console.log(`DB Connected to ${c.connection.host}`))
    .catch((e) => console.log(e));
};

export const invalidateCache = async ({
  product,
  order,
  admin,
}: InvalidateCacheProps) => {
  if (product) {
    const productKeys: string[] = [
      "latest-product",
      "categories",
      "all-products",
    ];

    const products = await Product.find({}).select("_id");

    products.forEach((i) => {
      productKeys.push(`product-${i._id}`);
    });
    myCache.del(productKeys);
  }
  if (order) {
  }
  if (admin) {
  }
};
