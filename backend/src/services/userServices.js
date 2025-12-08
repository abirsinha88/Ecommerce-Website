import { userMethods } from "../database/user.js"
const getAllUsers = async () => {
    const allUsers = await userMethods.getAllUsers();  
    return allUsers
}
const getOneUser = async (userId) => {
    const user = await userMethods.getOneUser(userId);
    return user;
}
const createUser = async (user) => {
    const userAdded = await userMethods.createUser(user);
    return userAdded;
}
const updateUser = () => {
    return
}
const deleteUser = () => {
    return
}

export const userServices = {getAllUsers,getOneUser,createUser,updateUser,deleteUser};
