import express from "express";
import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post("/create-product", createProduct);
productRouter.get("/products", getAllProducts);
productRouter.get("/product/:id", getProductById);
productRouter.put("/product/:id", updateProduct);
productRouter.delete("/product/:id", deleteProduct);

export default productRouter