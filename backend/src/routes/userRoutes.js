import express from "express";
import { getAllUsers,getOneUser,updateUser,deleteUser,createUser } from "../controllers/userControllers.js";


const router = express.Router();
router.get("/",getAllUsers)
router.get("/:userId",getOneUser);
router.post("/",createUser);
router.patch("/",updateUser);
router.delete("/",deleteUser);



export default router;