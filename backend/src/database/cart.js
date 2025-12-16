import { db } from "./db.js"
const getCartProducts = async (cartId) =>{
    try {
        const [rows] = await db.execute('select * from cart_items where cart_id = ?',[cartId]);
        return rows;
        
    } catch (error) {
        throw{
      status: 500,
      message: error?.message || error
    };
    }
}
const getCartId = async (userId) => {
    try {
        const [rows] = await db.execute('select cart_id from cart where user_id = ?',[userId]);
        return rows[0].cart_id;
    } catch (error) {
         throw{
      status: 500,
      message: error?.message || error
    };
    }
}
const addProduct = async (cartId,productId) => {
    try {
        const [item] = await db.execute('select quantity from cart_items where cart_id = ? and product_id = ?',[cartId,productId]);
        // console.log(cartId.cart_id,productId);
        if(item.length === 0){
            await db.execute('insert into cart_items(cart_id,product_id,quantity) values(?,?,?)',[cartId,productId,1])
        }
        else{
            await db.execute('update cart_items set quantity = ? where cart_id = ? and product_id = ?',[(item[0].quantity+1),cartId,productId]);
        }
    } catch (error) {
         throw{
      status: 500,
      message: error?.message || error
    };
    }
}

const updateQuantity = async (cartId,productId,action) => {
    console.log(cartId,productId,action)
    try {
        const [item] = await db.execute('select quantity from cart_items where cart_id = ? and product_id = ?',[cartId,productId]);

        if(action == "increment"){
            await db.execute('update cart_items set quantity = ? where cart_id = ? and product_id = ?',[(item[0].quantity+1),cartId,productId]);
        }
        else if(action == "decrement"){
            await db.execute('update cart_items set quantity = ? where cart_id = ? and product_id = ?',[(item[0].quantity-1),cartId,productId]);
        }
    
        else{
            throw {messaage: "Wrong Action"}
        }
    } catch (error) {
         throw{
      status: 500,
      message: error?.message || error
    };
    }
}
const deleteProduct = async (cartId,productId) => {
    //console.log(cartId,productId)
    try {
        const [item] = await db.execute('delete from cart_items where cart_id = ? and product_id = ?',[cartId,productId]);
    } catch (error) {
         throw{
      status: 500,
      message: error?.message || error
    };
    }
}
export const cartMethods = {getCartProducts,getCartId,addProduct,updateQuantity,deleteProduct};