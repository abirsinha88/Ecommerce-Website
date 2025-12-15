import { cartMethods } from "../database/cart.js"
const getAllCartItems = ()=> {
    try {
        const allCartItems = cartMethods.getAllCartItems()
        return allCartItems;
        
    } catch (error) {
        throw error;
    }
}
export const cartServices = {getAllCartItems};