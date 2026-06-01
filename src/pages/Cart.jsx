import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

function Cart() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 transition-colors duration-300 flex flex-col">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-8 py-16 flex-grow w-full">
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-10">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-200 mb-4">Your cart is empty</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8">Looks like you haven't added anything yet.</p>
            <Link to="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors inline-block">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-6 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-750 items-center">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-xl" />
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.name}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1">₹{item.price}</p>
                  </div>

                  <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-900 p-2 rounded-xl">
                    <button onClick={() => updateQuantity(item.id, -1)} className="p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <FaMinus size={12} />
                    </button>
                    <span className="font-bold w-6 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <FaPlus size={12} />
                    </button>
                  </div>

                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-3 text-red-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-xl transition-all ml-4"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-750 h-fit sticky top-32">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4 text-slate-600 dark:text-slate-400 font-medium">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{getCartTotal()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600 dark:text-green-400">Free</span>
                </div>
                
                <div className="border-t border-slate-100 dark:border-slate-700 pt-4 mt-4">
                  <div className="flex justify-between text-xl font-bold text-slate-900 dark:text-white">
                    <span>Total</span>
                    <span>₹{getCartTotal()}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl mt-8 font-bold shadow-lg shadow-blue-600/20 transition-all transform hover:-translate-y-0.5">
                Checkout Now
              </button>
            </div>

          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;