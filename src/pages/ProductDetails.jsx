import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import { FaChevronLeft, FaWineGlass, FaTshirt, FaCompass, FaHeart, FaRegHeart } from "react-icons/fa";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="max-w-4xl mx-auto py-20 text-center">
          <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-350">Product not found</h2>
          <Link to="/products" className="text-blue-600 dark:text-blue-400 hover:underline mt-4 inline-block">
            Back to Products
          </Link>
        </div>
      </>
    );
  }

  const isSaree = product.category === "Saree Boutique";

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      isSaree ? "bg-[#FAF8F5] dark:bg-slate-950" : "bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200"
    }`}>
      <Navbar />

      <div className="max-w-6xl mx-auto py-12 px-6 flex-grow w-full">
        {/* Back Link */}
        <Link 
          to="/products" 
          state={{ selectedCategory: product.category }}
          className={`inline-flex items-center gap-2 mb-8 text-sm font-semibold transition-colors ${
            isSaree 
              ? "text-[#5B0612] dark:text-amber-300 hover:text-amber-700 dark:hover:text-amber-400" 
              : "text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
          }`}
        >
          <FaChevronLeft size={12} />
          Back to {product.category}
        </Link>

        {isSaree ? (
          // Luxury Boutique Detail Layout
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl shadow-stone-300/60 dark:shadow-stone-950/40 border border-stone-200/50 dark:border-stone-800/50">
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover aspect-[4/5] object-center transform group-hover:scale-105 duration-700"
              />
              <span className="absolute top-6 left-6 bg-gradient-to-r from-rose-900 to-amber-800 text-amber-100 text-xs font-bold tracking-[0.2em] px-4 py-1.5 rounded-full uppercase shadow-md">
                Heirloom Weave
              </span>
            </div>

            <div className="space-y-8 font-serif">
              <div>
                <span className="text-amber-700 dark:text-amber-400 text-sm font-semibold tracking-widest uppercase block mb-2">
                  Heritage Craftsmanship
                </span>
                <h1 className="text-4xl lg:text-5xl font-serif text-[#5B0612] dark:text-amber-100 tracking-wide leading-tight">
                  {product.name}
                </h1>
                <p className="text-3xl font-serif text-amber-900 dark:text-amber-300 mt-4 font-semibold">
                  ₹{product.price}
                </p>
              </div>

              <div className="border-t border-stone-200 dark:border-stone-850 pt-6">
                <p className="text-stone-700 dark:text-stone-300 text-lg leading-relaxed font-sans font-light">
                  {product.description}
                </p>
              </div>

              {/* Saree Craft Specs Grid */}
              <div className="grid grid-cols-2 gap-6 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-stone-200/60 dark:border-slate-800/60 font-sans shadow-sm">
                <div>
                  <span className="text-xs text-stone-400 dark:text-stone-500 font-bold uppercase tracking-wider block mb-1">Fabric</span>
                  <span className="text-stone-800 dark:text-stone-200 font-medium text-sm">{product.details?.fabric}</span>
                </div>
                <div>
                  <span className="text-xs text-stone-400 dark:text-stone-500 font-bold uppercase tracking-wider block mb-1">Craft & Weave</span>
                  <span className="text-stone-800 dark:text-stone-200 font-medium text-sm">{product.details?.craft}</span>
                </div>
                <div>
                  <span className="text-xs text-stone-400 dark:text-stone-500 font-bold uppercase tracking-wider block mb-1">Dimensions</span>
                  <span className="text-stone-800 dark:text-stone-200 font-medium text-sm">{product.details?.length}</span>
                </div>
                <div>
                  <span className="text-xs text-stone-400 dark:text-stone-500 font-bold uppercase tracking-wider block mb-1">Blouse Piece</span>
                  <span className="text-stone-800 dark:text-stone-200 font-medium text-sm">{product.details?.blouse}</span>
                </div>
              </div>

              {/* Styling Tips Box */}
              {product.details?.styleNote && (
                <div className="bg-amber-50/50 dark:bg-amber-950/10 border border-amber-500/10 dark:border-amber-500/20 p-6 rounded-2xl font-serif">
                  <h4 className="text-amber-800 dark:text-amber-300 font-semibold tracking-wider uppercase text-xs mb-2 flex items-center gap-2">
                    <FaCompass /> Stylist's Note
                  </h4>
                  <p className="text-stone-600 dark:text-stone-400 text-sm italic leading-relaxed">
                    "{product.details.styleNote}"
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-4 pt-4 font-sans">
                <div className="flex gap-4">
                  <button 
                    onClick={() => addToCart(product)}
                    className="flex-grow bg-gradient-to-r from-rose-900 to-amber-800 hover:from-rose-800 hover:to-amber-700 text-amber-100 py-4 px-8 rounded-xl font-bold tracking-wide shadow-lg shadow-rose-950/20 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Add To Cart Boutique
                  </button>
                  <button 
                    onClick={() => toggleWishlist(product)}
                    className="p-4 border border-stone-300 dark:border-stone-700 rounded-xl text-stone-500 dark:text-stone-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50/30 dark:hover:bg-rose-950/20 transition-colors cursor-pointer"
                    aria-label="Add to Wishlist"
                  >
                    {isInWishlist(product.id) ? <FaHeart size={20} className="text-rose-600 dark:text-rose-400" /> : <FaRegHeart size={20} />}
                  </button>
                </div>
                <div className="text-center">
                  <span className="text-xs text-stone-400 dark:text-stone-500 font-medium">
                    Care instruction: {product.details?.care}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Standard Detail Layout
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-100 dark:border-slate-750 shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-2xl object-cover h-[500px]"
              />
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.2em] block mb-2">
                  {product.category}
                </span>
                <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
                  {product.name}
                </h1>
                <p className="text-3xl text-slate-900 dark:text-slate-200 font-bold mt-4">
                  ₹{product.price}
                </p>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800 pt-6">
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                  Premium {product.name} designed with standard craftsmanship, premium materials, and ultimate comfort. Ready to elevate your collection.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <button 
                  onClick={() => addToCart(product)}
                  className="flex-grow bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white py-4 px-8 rounded-xl font-bold shadow-lg shadow-blue-600/20 dark:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Add To Cart
                </button>
                <button 
                  onClick={() => toggleWishlist(product)}
                  className="p-4 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-400 dark:text-slate-500 hover:text-rose-500 dark:hover:text-rose-400 hover:bg-rose-50/50 dark:hover:bg-rose-950/20 transition-colors cursor-pointer"
                  aria-label="Add to Wishlist"
                >
                  {isInWishlist(product.id) ? <FaHeart size={20} className="text-rose-600 dark:text-rose-400" /> : <FaRegHeart size={20} />}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;