import express from "express";
import { validateLogin } from "../controllers/loginController.js";

const router = express.Router();
router.post("/",validateLogin);



export default router;