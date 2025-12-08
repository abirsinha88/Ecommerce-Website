import { productServices } from "../services/productServices.js"

const getAllProducts = async (req,res) => {
    const allProducts = await productServices.getAllProducts();
    res.send(allProducts);
}
const getOneProduct = async (req,res) => {
    const product = await productServices.getOneProduct(req.params.productId)
    res.send(product);
}

export {getAllProducts,getOneProduct}