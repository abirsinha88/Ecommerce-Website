import express from "express";
import { getOneProduct,getAllProducts } from "../controllers/productControllers.js"

const router = express.Router();
router.get("/",getAllProducts)
router.get("/:productId",getOneProduct);



export default router;