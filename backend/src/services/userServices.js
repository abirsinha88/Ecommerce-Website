import { userMethods } from "../database/user.js"
const getAllUsers = async () => {
    try {
        const allUsers = await userMethods.getAllUsers();  
        return allUsers
        
    } catch (error) {
        throw error;
    }
}
const getOneUser = async (userId) => {
    try {
        const user = await userMethods.getOneUser(userId);
        return user;
        
    } catch (error) {
        throw error
    }
}
const createUser = async (user) => {
    const token = await userMethods.createUser(user);
    //return token;
}
const validateUser = async (user) => {
    const token = await userMethods.validateUser(user);
    return token;
} 
const updateUser = () => {
    return
}
const deleteUser = () => {
    return
}

export const userServices = {getAllUsers,getOneUser,createUser,updateUser,deleteUser,validateUser};
