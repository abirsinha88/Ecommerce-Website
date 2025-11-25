export default function CartSummary({total}){
    return(
        <>
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
        </>
    )
}