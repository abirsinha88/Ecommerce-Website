import { userServices } from "../services/userServices.js"
import jwt from "jsonwebtoken"

const getAllUsers = async (req,res,next) => {
    try {
        const allUsers = await userServices.getAllUsers();
        res.status(201).json({status: "OK", data:allUsers});
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({status:"failed", data:{ error : error?. message || error}})
        
    }
}
const getOneUser = async (req,res) => {
    const user = await userServices.getOneUser(req.params.userId)
    res.status(201).json({status: "OK", data:user});
}
const createUser = async (req,res) => {
    //console.log("hello");
    try {
        await userServices.createUser(req.body);
         res.redirect("/login");
        
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({status:"failed", data:{ error : error?. message || error}})
    }
}
const updateUser = (req,res) => {
    res.send("update one users")
}
const deleteUser = (req,res) => {
    res.send("delete one users")
}
const jwtAuthMiddleware = (req, res, next) => {
    //console.log(req.cookies);
    
    const token = req.cookies.token;
    if(!token) return res.status(401).json({error : "Unauthorized"})
    try {
        
        const decoded = jwt.verify(token,process.env.SECRET)
      
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({error: "Unauthorized"})
        
    }
}

export {getAllUsers,getOneUser,createUser,updateUser,deleteUser,jwtAuthMiddleware};