import { db } from "./db.js"
const getAllCartItems = async () =>{
    try {
        const [rows] = await db.execute('select * from cart_items');
        return rows;
        
    } catch (error) {
        throw{
      status: 500,
      message: error?.message || error
    };
    }
}
export const cartMethods = {getAllCartItems};