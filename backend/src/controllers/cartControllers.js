import {cartServices} from "../services/cartServices.js"
export const getAllCartItems = async (req,res) =>{
    try {
        const allCartItems = cartServices.getAllCartItems();
        res.json(allCartItems)
    }
        
     catch (error) {
        res
        .status(error?.status || 500)
        .send({status:"failed", data:{ error : error?. message || error}})
}
}
