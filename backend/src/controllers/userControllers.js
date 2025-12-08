import { userServices } from "../services/userServices.js"

const getAllUsers = async (req,res,next) => {
    const allUsers = await userServices.getAllUsers();
    res.send(allUsers);
}
const getOneUser = async (req,res) => {
    const user = await userServices.getOneUser(req.params.userId)
    res.send(user);
}
const createUser = async (req,res) => {
    console.log("hello");
    
    const createdUser = await userServices.createUser(req.body);
     res.send(createdUser);
}
const updateUser = (req,res) => {
    res.send("update one users")
}
const deleteUser = (req,res) => {
    res.send("delete one users")
}

export {getAllUsers,getOneUser,createUser,updateUser,deleteUser};