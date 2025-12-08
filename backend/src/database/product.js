import { db } from "./db.js";
const getAllProducts = async () => {
  const [rows] = await db.execute("select * from products");
  return rows;
}

const getOneProduct = async (productId) => {
    console.log(productId);
    
  const [row] = await db.execute(`select * from products where id = ? `,[productId]);
  return row;
}

export const productMethods ={getAllProducts,getOneProduct}