import express from "express";
import { getAllCartItems } from "../controllers/cartControllers.js";

const router = express.Router();
router.get("/",getAllCartItems);
// router.post("/",addToCart);
// router.patch("/",updateCart);
// router.delete("/",removeFromCart);



export default router;