
import { useCart,useCartDispatch } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useState,useEffect } from "react";
import { useProducts } from "../contexts/ProductContext";


export default function CartPage() {
  const cart = useCart();
  const {products} = useProducts();
  let productsInCart = products.filter((product)=> {
    if( cart.length > 0 && cart.find((item)=>item.id == product.id) != undefined)
      return true;
  }) 

  const total = productsInCart.reduce((sum, item) => sum + item.price * cart.find(product => product.id == item.id).quantity, 0);

  return (
    <div className="px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 mb-4">Your cart is empty.</p>
          <Link to="/" className="text-blue-600 underline">
            Continue Shopping →
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {/* Items */}
          <div className="md:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id}  className="flex gap-4 border rounded-lg p-4 hover:shadow-md transition">
                <CartItem {...item}  />
              </div>
            ))}
          </div>

        
          <div className="border rounded-lg p-6 h-fit bg-gray-50">
            <h3 className="font-semibold text-xl mb-4">Order Summary</h3>

            <div className="flex justify-between text-gray-700 mb-3">
              <span>Total:</span>
              <span className="font-bold">${total.toFixed(2)}</span>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-lg hover:opacity-80 transition">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
