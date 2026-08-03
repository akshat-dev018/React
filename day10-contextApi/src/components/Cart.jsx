import React, { useContext } from "react";
import { MyShop } from "../Context/MyWebsite";

const Cart = () => {
  
  let {cartItems} = useContext(MyShop);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        🛒 My Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[60vh]">
          <h2 className="text-3xl font-semibold text-gray-600">
            Your Cart is Empty
          </h2>
          <p className="text-gray-500 mt-2" text-black>
            Add some products to continue shopping.
          </p>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Left Side - Products */}
          <div className="lg:col-span-2 space-y-5">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-4 flex items-center gap-5 hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 object-contain"
                />

                <div className="flex-1">
                  <h2 className="text-xl font-semibold">
                    {item.title}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Quantity: {item.quantity || 1}
                  </p>

                  <p className="text-green-600 font-bold text-lg mt-2">
                    ₹{item.price}
                  </p>
                </div>

                <div>
                  <p className="text-lg font-bold">
                    ₹{item.price * (item.quantity || 1)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Summary */}
          <div className="bg-white rounded-xl shadow-md p-6 h-fit sticky top-6 text-black">
            <h2 className="text-2xl font-bold mb-5">
              Order Summary
            </h2>

            <div className="flex justify-between mb-3 text-black">
              <span>Total Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="flex justify-between text-xl font-bold border-t pt-4 text-black">
              <span>Total</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>

            <button className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
