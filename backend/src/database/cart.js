import { db } from "./db.js"
const getCartProducts = async (cartId) =>{
    try {
        const [rows] = await db.execute('select product_id,quantity,name,price,description,image_url,catagory_id from cart_items join products on cart_items.product_id = products.id where cart_id = ?',[cartId])
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
    try {
        const [item] = await db.execute('select quantity from cart_items where cart_id = ? and product_id = ?',[cartId,productId]);

        if(action == "increment"){
            await db.execute('update cart_items set quantity = ? where cart_id = ? and product_id = ?',[(item[0].quantity+1),cartId,productId]);
            const [rows] = await db.execute('select product_id,quantity,name,price,description,image_url,catagory_id from cart_items join products on cart_items.product_id = products.id where cart_id = ?',[cartId])
            return rows;
        }
        else if(action == "decrement"){
            if(item[0].quantity == 1){
                await db.execute('delete from cart_items where cart_id = ? and product_id = ?',[cartId,productId]);
            }
            else{
                await db.execute('update cart_items set quantity = ? where cart_id = ? and product_id = ?',[(item[0].quantity-1),cartId,productId]);
            }
                
            const [rows] = await db.execute('select product_id,quantity,name,price,description,image_url,catagory_id from cart_items join products on cart_items.product_id = products.id where cart_id = ?',[cartId])
            return rows;
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
    try {
        const [item] = await db.execute('delete from cart_items where cart_id = ? and product_id = ?',[cartId,productId]);
        const [rows] = await db.execute('select product_id,quantity,name,price,description,image_url,catagory_id from cart_items join products on cart_items.product_id = products.id where cart_id = ?',[cartId])
            return rows;
    } catch (error) {
         throw{
      status: 500,
      message: error?.message || error
    };
    }
}
export const cartMethods = {getCartProducts,getCartId,addProduct,updateQuantity,deleteProduct};