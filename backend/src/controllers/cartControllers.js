import {cartServices} from "../services/cartServices.js"
export const getCartProducts = async (req,res) =>{
    try {
        const cartId = await cartServices.getCartId(req.user.id);
        const allCartItems = await cartServices.getCartProducts(cartId);
        res.json(allCartItems)
    }
        
     catch (error) {
        res
        .status(error?.status || 500)
        .send({status:"failed", data:{ error : error?. message || error}})
}
}
export const addProduct = async (req,res) =>{
    try {
        const productId = req.body.productId;
        const cartId = await cartServices.getCartId(req.user.id);
        await cartServices.addProduct(cartId,productId);
        res.json({status:"success"})
    }
        
     catch (error) {
        res
        .status(error?.status || 500)
        .send({status:"failed", data:{ error : error?. message || error}})
}
}

export const updateQuantity = async (req,res) => {
    try {
        const productId = req.params.productId;
        const action = req.body.action;
        const cartId = await cartServices.getCartId(req.user.id);
        await cartServices.updateQuantity(cartId,productId,action);
        res.json({status:"success"})
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({status:"failed", data:{ error : error?. message || error}})
    }
}
export const removeProduct = async (req,res) => {
    try {
        const productId = req.params.productId;
        const cartId = await cartServices.getCartId(req.user.id);
        await cartServices.removeProduct(cartId,productId);
        res.json({status:"success"})
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({status:"failed", data:{ error : error?. message || error}})
    }
}