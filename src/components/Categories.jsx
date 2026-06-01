import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();
  const categories = [
    "Shoes",
    "Watches",
    "Electronics",
    "Saree Boutique",
    "Gifts & Stationery"
  ];

  return (
    <section className="max-w-7xl mx-auto py-24 px-6">

      <h2 className="text-5xl font-bold text-center mb-12 text-slate-900 dark:text-white">
        Shop Categories
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">

        {categories.map((item) => {
          const isSaree = item === "Saree Boutique";
          const isGifts = item === "Gifts & Stationery";
          return (
            <div
              key={item}
              onClick={() => navigate("/products", { state: { selectedCategory: item } })}
              className={`rounded-3xl p-12 text-center hover:shadow-2xl duration-300 cursor-pointer border transform hover:-translate-y-2 flex flex-col justify-center items-center min-h-[160px] ${
                isSaree 
                  ? "bg-gradient-to-br from-rose-950 via-red-950 to-amber-950 text-amber-200 border-amber-500/30"
                  : isGifts
                  ? "bg-gradient-to-br from-[#ECEFF1] to-[#CFD8DC] dark:from-slate-800 dark:to-slate-900 text-[#37474F] dark:text-stone-300 border-[#B0BEC5] dark:border-slate-700 hover:from-[#CFD8DC] hover:to-[#B0BEC5] dark:hover:from-slate-750 dark:hover:to-slate-850"
                  : "bg-gray-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-transparent dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700"
              }`}
            >
              <h3 className={`text-2xl font-semibold leading-tight ${isSaree ? "font-serif" : ""}`}>
                {item}
              </h3>
              {isSaree && (
                <span className="text-xs text-amber-400/80 block mt-2 font-medium tracking-widest uppercase">
                  Heritage Weaves
                </span>
              )}
              {isGifts && (
                <span className="text-xs text-stone-500 dark:text-stone-400 block mt-2 font-medium tracking-widest uppercase">
                  Curated Writing & Decor
                </span>
              )}
            </div>
          );
        })}

      </div>
    </section>
  );
}

export default Categories;