import { useCart, useCartDispatch } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import { useProducts } from "../contexts/ProductContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  //const cart = useCart();
  //const {products} = useProducts();
  //let productsInCart = products.filter((product)=> {
    //  if( cart.length > 0 && cart.find((item)=>item.id == product.id) != undefined)
    //    return true;
  //})
  
  //const total = productsInCart.reduce((sum, item) => sum + item.price * cart.find(product => product.id == item.id).quantity, 0);
  
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  useEffect( () => {
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:5000/api/cart", {credentials: "include",});
      if(res.status == "401"){
        navigate("/login");
      }
      const data = await res.json();
      setCartItems(data);
    }
     fetchProducts();
  }, []);

  return (
    <div className="px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 mb-4">Your cart is empty.</p>
          <Link to="/" className="text-blue-600 underline">
            Continue Shopping →
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 border rounded-lg p-4 hover:shadow-md transition"
              >
                <CartItem {...item} setCartItems={setCartItems} />
              </div>
            ))}
          </div>
          {/* <CartSummary total={total} /> */}
        </div>
      )}
    </div>
  );
}
