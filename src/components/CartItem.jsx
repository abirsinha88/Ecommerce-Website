import { useCart,useCartDispatch } from "../contexts/CartContext";
import { useState,useEffect } from "react";
import { useProducts } from "../contexts/ProductContext";


export default function CartItem({id,quantity}){
    
const dispatch = useCartDispatch(); 
const {products} = useProducts();
let currItem = products.find(item => item.id == id)
   
    return(
        <>
                <img
                  src={`/${currItem.image}`}
                  alt={currItem.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h2 className="font-semibold text-lg">{currItem.name}</h2>
                  <p className="text-gray-600">${currItem.price}</p>

                  <div className="flex items-center mt-2 gap-3">
                    <div className="text-sm">Qty:{quantity}</div>
                  </div>

                  <button
                    className="text-red-600 text-sm mt-3 hover:underline"
                    onClick={() =>  dispatch({ type: "DECREASE", id:currItem.id })}
                  >
                    -
                  </button>
                  <button
                    className="text-red-600 text-sm mt-3 hover:underline"
                    onClick={() =>  dispatch({ type: "INCREASE", id:currItem.id })}
                  >
                    +
                  </button>
                  <button
                    className="text-red-600 text-sm mt-3 hover:underline"
                    onClick={() =>  dispatch({ type: "REMOVE", id:currItem.id })}
                  >
                    Remove
                  </button>
                </div>
                </>
    )
}             