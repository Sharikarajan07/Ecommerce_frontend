import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

function Wishlist() {
  const { wishlistItems } = useCart();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-500 flex flex-col">
      <Navbar />

      <div className="max-w-7xl mx-auto py-12 px-6 flex-grow w-full">
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-5xl font-black tracking-tight text-slate-900 dark:text-white flex items-center justify-center md:justify-start gap-4">
            <FaHeart className="text-rose-600 dark:text-rose-500" size={36} />
            Liked Products
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">
            Your personal catalog of curated favorites and boutique weaves.
          </p>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-24 bg-white dark:bg-slate-900/60 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800/80 max-w-3xl mx-auto px-6">
            <div className="w-20 h-20 bg-rose-50 dark:bg-rose-950/20 text-rose-500 dark:text-rose-450 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaHeart size={36} className="animate-pulse" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Your wishlist is empty
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-8 text-sm">
              Tap the heart icon on any of our heritage sarees, gifts, or premium sneakers to save them here for later.
            </p>
            <Link
              to="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg shadow-blue-500/10 transition-all duration-300 transform active:scale-95 inline-block text-sm uppercase tracking-wider"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {wishlistItems.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Wishlist;
