import { productMethods } from "../database/product.js";

const getAllProducts = async () => {
    const allProducts = await productMethods.getAllProducts();  
    return allProducts
}
const getOneProduct = async (productId) => {
    const product = await productMethods.getOneProduct(productId);
    return product;
}

export const productServices = {getAllProducts,getOneProduct};