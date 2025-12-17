import { useCart,useCartDispatch } from "../contexts/CartContext";
import { useState,useEffect } from "react";
import { useProducts } from "../contexts/ProductContext";



export default function CartItem({product_id,quantity,name,price,image_url,setCartItems}){
    
//const dispatch = useCartDispatch(); 
//const {products} = useProducts();
const handleUpdate = async (productId,action) =>{
  const res = await fetch(`http://localhost:5000/api/cart/products/${productId}`, {credentials: "include", method : 'PATCH',headers: { "Content-Type": "application/json"},body:JSON.stringify({action})});
  const data = await res.json();
  setCartItems(data);              
}
const handleDelete = async (productId) =>{
  const res = await fetch(`http://localhost:5000/api/cart/products/${productId}`, {credentials: "include", method : 'DELETE',});
  const data = await res.json();
  setCartItems(data);              
}
   
    return(
        <>
                <img
                  src={`/${image_url}`}
                  alt={name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h2 className="font-semibold text-lg">{name}</h2>
                  <p className="text-gray-600">${price}</p>

                  <div className="flex items-center mt-2 gap-3">
                    <div className="text-sm">Qty:{quantity}</div>
                  </div>

                  <button
                    className="text-red-600 text-sm mt-3 hover:underline"
                    onClick={ () =>  {
                      handleUpdate(product_id,"decrement");
                    }}
                  >
                    -
                  </button>
                  <button
                    className="text-red-600 text-sm mt-3 hover:underline"
                    onClick={ () =>  {
                      handleUpdate(product_id,"increment");
                    }}
                  >
                    +
                  </button>
                  <button
                    className="text-red-600 text-sm mt-3 hover:underline"
                    onClick={() => {
                      handleDelete(product_id)
                    } }
                  >
                    Remove
                  </button>
                </div>
                </>
    )
}             