import express from "express";
import { getCartProducts,addProduct,updateQuantity,removeProduct } from "../controllers/cartControllers.js";

const router = express.Router();
router.get("/",getCartProducts);
router.post("/products",addProduct);
router.patch("/products/:productId",updateQuantity);
router.delete("/products/:productId",removeProduct);



export default router;