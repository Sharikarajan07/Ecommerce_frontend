import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const isSaree = product.category === "Saree Boutique";

  return (
    <div className={`relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 duration-300 transition-all border ${
      isSaree 
        ? "bg-white/90 dark:bg-slate-900/95 border-amber-500/20 dark:border-amber-500/30 shadow-amber-950/5" 
        : "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-750"
    }`}>
      {isSaree && (
        <span className="absolute top-4 left-4 z-10 bg-amber-500 text-slate-950 text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase shadow-sm">
          Boutique
        </span>
      )}

      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </Link>

      <div className="p-5 flex flex-col justify-between h-56">
        <div>
          <h3 className={`text-xl font-bold line-clamp-1 ${
            isSaree ? "font-serif text-slate-900 dark:text-amber-100" : "text-slate-800 dark:text-white"
          }`}>
            {product.name}
          </h3>

          <p className={`text-sm mt-2 ${
            isSaree ? "text-amber-700 dark:text-amber-400 font-medium font-serif" : "text-gray-500 dark:text-slate-400"
          }`}>
            {isSaree ? (product.details?.craft || "Heritage Handloom") : "Premium Collection"}
          </p>
        </div>

        <div>
          <p className={`text-2xl font-bold mt-2 ${
            isSaree ? "text-amber-900 dark:text-amber-300 font-serif" : "text-slate-800 dark:text-slate-200"
          }`}>
            ₹{product.price}
          </p>

          <button 
            onClick={() => addToCart(product)}
            className={`w-full py-3 rounded-xl mt-4 font-semibold transition-all duration-300 transform active:scale-95 ${
              isSaree
                ? "bg-gradient-to-r from-rose-900 to-amber-800 hover:from-rose-800 hover:to-amber-700 text-amber-100 shadow-md shadow-rose-950/20"
                : "bg-slate-900 dark:bg-slate-700 hover:bg-blue-600 dark:hover:bg-blue-600 text-white"
            }`}
          >
            Add To Cart
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;