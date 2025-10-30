
import { useCart,useCartDispatch } from "../contexts/CartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  
  const cart = useCart();
  const dispatch = useCartDispatch();
  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);


  const updateQty = (id, quantity) => {
    dispatch({ type: "UPDATE_QTY", id, quantity });
  };

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
              <div
                key={item.id}
                className="flex gap-4 border rounded-lg p-4 hover:shadow-md transition"
              >
                <img
                  src={`/${item.image}`}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-gray-600">${item.price}</p>

                  <div className="flex items-center mt-2 gap-3">
                    <label className="text-sm">Qty:</label>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity || 1}
                      onChange={(e) => updateQty(item.id, Number(e.target.value))}
                      className="w-16 border rounded px-2 py-1"
                    />
                  </div>

                  <button
                    className="text-red-600 text-sm mt-3 hover:underline"
                    onClick={() =>  dispatch({ type: "DECREASE", id:item.id })}
                  >
                    Decrease
                  </button>
                  <button
                    className="text-red-600 text-sm mt-3 hover:underline"
                    onClick={() =>  dispatch({ type: "REMOVE", id:item.id })}
                  >
                    Remove
                  </button>
                </div>
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
