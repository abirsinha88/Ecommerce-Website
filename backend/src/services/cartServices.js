import { cartMethods } from "../database/cart.js"
const getCartProducts = async (cartId)=> {
    try {
        const allCartItems =  await cartMethods.getCartProducts(cartId)
        return allCartItems;
        
    } catch (error) {
        throw error;
    }
}
const getCartId = async (userId)=> {
    try {
        const cartId = await cartMethods.getCartId(userId);
        return cartId;
        
    } catch (error) {
        throw error;
    }
}
const addProduct = async (cartId,productId)=> {
    try {
        await cartMethods.addProduct(cartId,productId);
        
    } catch (error) {
        throw error;
    }
}
const updateQuantity = async (cartId,productId,action)=> {
    try {
       const updatedCart = await cartMethods.updateQuantity(cartId,productId,action);
       return updatedCart;
        
    } catch (error) {
        throw error;
    }
}

const removeProduct = async (cartId,productId)=> {
    try {
        const updatedCart = await cartMethods.deleteProduct(cartId,productId);
        return updatedCart;
    } catch (error) {
        throw error;
    }
}


export const cartServices = {getCartProducts,getCartId,addProduct,updateQuantity,removeProduct};