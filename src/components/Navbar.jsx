import { Link } from "react-router-dom";
import { FaShoppingBag, FaSun, FaMoon } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { getCartCount } = useCart();
  const { isDarkMode, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const cartCount = getCartCount();

  return (
    <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 sticky top-0 z-50 transition-all duration-300">

      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center text-slate-800 dark:text-slate-200">

        <h1 className="text-3xl font-black tracking-tighter text-slate-900 dark:text-white">
          <Link to="/">ShopEase</Link>
        </h1>

        <div className="hidden md:flex gap-12 text-sm font-medium tracking-wide">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
          <Link to="/products" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Products</Link>
          <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</Link>
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={toggleTheme} 
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none transform active:scale-95 duration-200"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <FaSun size={20} className="text-amber-400" /> : <FaMoon size={20} className="text-slate-600" />}
          </button>

          <Link to="/cart" className="relative hover:text-blue-600 dark:hover:text-blue-400 transition-colors mr-1">
            <FaShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {user ? (
            <div className="flex items-center gap-3.5 pl-2 border-l border-gray-200/80 dark:border-slate-800">
              <span className="font-semibold text-slate-700 dark:text-slate-300 text-sm hidden sm:inline">
                Hi, {user.name}
              </span>
              <button
                onClick={logout}
                className="hover:text-rose-500 dark:hover:text-rose-400 font-bold transition-colors cursor-pointer text-[10px] uppercase tracking-wider bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-200/60 dark:border-slate-700/60"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link 
              to="/login" 
              className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-600 dark:hover:bg-blue-500 font-bold text-[11px] uppercase tracking-wider px-4 py-2 rounded-xl transition-all duration-300 transform active:scale-95 shadow-md shadow-blue-500/10"
            >
              Sign In
            </Link>
          )}
        </div>

      </div>

    </nav>
  );
}

export default Navbar;