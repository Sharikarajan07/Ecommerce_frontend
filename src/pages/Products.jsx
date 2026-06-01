import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    if (location.state && location.state.selectedCategory) {
      setSelectedCategory(location.state.selectedCategory);
    }
  }, [location.state]);

  const categories = ["All", "Shoes", "Watches", "Electronics", "Saree Boutique", "Gifts & Stationery"];

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  const isBoutiqueActive = selectedCategory === "Saree Boutique";
  const isGiftsActive = selectedCategory === "Gifts & Stationery";

  return (
    <div className={`min-h-screen transition-colors duration-500 flex flex-col ${
      isBoutiqueActive 
        ? "bg-[#5B0612]/5 dark:bg-[#5B0612]/15 text-[#5B0612] dark:text-amber-100" 
        : isGiftsActive
        ? "bg-[#37474F]/5 dark:bg-[#37474F]/15 text-[#37474F] dark:text-stone-300"
        : "bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200"
    }`}>
      <Navbar />

      <div className="max-w-7xl mx-auto py-12 px-6 flex-grow w-full">
        {/* Boutique Header vs Gifts Header vs Standard Header */}
        {isBoutiqueActive ? (
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
            <span className="text-amber-600 font-medium tracking-[0.25em] text-xs uppercase block mb-3">
              EXQUISITE HERITAGE WEAVES
            </span>
            <h1 className="text-6xl font-serif text-[#5B0612] dark:text-amber-100 tracking-wide mb-6">
              The Saree Boutique
            </h1>
            <div className="w-24 h-[2px] bg-amber-500/55 mx-auto mb-6"></div>
            <p className="text-stone-600 dark:text-stone-300 text-lg font-serif italic leading-relaxed">
              "Handloomed perfection, timeless weaves, and pure silk elegance. Discover heirloom sarees crafted by master artisans across India's historical weaving corridors."
            </p>
          </div>
        ) : isGiftsActive ? (
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
            <span className="text-stone-500 dark:text-stone-400 font-medium tracking-[0.25em] text-xs uppercase block mb-3">
              FINE WRITING & LIFESTYLE ACCENTS
            </span>
            <h1 className="text-6xl font-sans font-extrabold text-[#37474F] dark:text-stone-100 tracking-tight mb-6">
              Gifts & Stationery
            </h1>
            <div className="w-24 h-[2px] bg-stone-400 dark:bg-stone-600 mx-auto mb-6"></div>
            <p className="text-stone-600 dark:text-stone-300 text-lg leading-relaxed italic">
              "Handcrafted journals, premium writing tools, and artistic lifestyle accents. Elevate your everyday workspace and find the perfect gift."
            </p>
          </div>
        ) : (
          <div className="mb-12">
            <h1 className="text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Explore Products
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2">
              Curated premium gear, apparel, and lifestyle accessories.
            </p>
          </div>
        )}

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-gray-200/60 dark:border-slate-800 pb-5">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            const isCatSaree = cat === "Saree Boutique";
            const isCatGifts = cat === "Gifts & Stationery";
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? isCatSaree
                      ? "bg-gradient-to-r from-rose-900 to-amber-800 text-amber-100 shadow-md shadow-rose-950/20 scale-105"
                      : isCatGifts
                      ? "bg-slate-700 dark:bg-slate-200 text-white dark:text-slate-900 shadow-md shadow-slate-700/10 scale-105"
                      : "bg-slate-900 dark:bg-slate-200 text-white dark:text-slate-900 shadow-md shadow-slate-900/10 scale-105"
                    : isCatSaree
                    ? "bg-rose-950/5 dark:bg-rose-950/20 text-rose-900 dark:text-rose-300 border border-rose-900/10 dark:border-rose-800/30 hover:bg-rose-950/10"
                    : isCatGifts
                    ? "bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300/40 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700/80"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-700 hover:bg-slate-100/50"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
            <p className="text-slate-400 dark:text-slate-500">No products found in this category.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
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

export default Products;