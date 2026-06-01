import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      sub: "NEW ARRIVALS",
      title: (
        <>
          Premium
          <br />
          Shopping
          <span className="text-blue-500">.</span>
        </>
      ),
      desc: "Discover curated products from the world's most trusted brands. Elevate your everyday style.",
      btnText: "Shop Collection",
      btnAction: () => navigate("/products"),
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      theme: "from-slate-950 to-slate-900",
      accent: "text-blue-500",
      btnColor: "bg-blue-600 hover:bg-blue-500 border-blue-500/30 shadow-blue-500/20",
      glowColor: "bg-blue-500/20"
    },
    {
      sub: "LATEST HERITAGE ARRIVALS",
      title: (
        <>
          The Saree
          <br />
          Boutique
          <span className="text-amber-500">.</span>
        </>
      ),
      desc: "Exquisite handwoven silks, tissue organzas, and traditional luxury weaves. Heirloom art you can drape.",
      btnText: "Explore Boutique",
      btnAction: () => navigate("/products", { state: { selectedCategory: "Saree Boutique" } }),
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Monica_Bedi_at_the_8th_Aap_Ki_Awaz_Media_Excellence_Awards.jpg/500px-Monica_Bedi_at_the_8th_Aap_Ki_Awaz_Media_Excellence_Awards.jpg",
      theme: "from-rose-950 via-stone-900 to-amber-950",
      accent: "text-amber-500 font-serif",
      btnColor: "bg-gradient-to-r from-amber-600 to-rose-900 hover:from-amber-500 hover:to-rose-800 border-amber-500/20 shadow-rose-950/40",
      glowColor: "bg-amber-600/20"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[activeSlide];

  return (
    <section className={`bg-gradient-to-br ${slide.theme} text-white overflow-hidden transition-all duration-1000 min-h-[600px] flex items-center relative`}>
      
      {/* Background Subtle Highlights */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full filter blur-[120px] animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">

        <div className="space-y-8 animate-fadeIn">
          <span className={`font-semibold tracking-[0.25em] text-xs uppercase block ${slide.accent}`}>
            {slide.sub}
          </span>

          <h1 className="text-6xl lg:text-7xl font-bold leading-[1.15] tracking-tight">
            {slide.title}
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed max-w-md">
            {slide.desc}
          </p>

          <div className="flex gap-4 items-center">
            <button 
              onClick={slide.btnAction}
              className={`text-white border px-10 py-4 rounded-full font-medium tracking-wide shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95 ${slide.btnColor}`}
            >
              {slide.btnText}
            </button>
          </div>
        </div>

        <div className="relative group flex justify-center">
          <div className={`absolute inset-0 ${slide.glowColor} blur-3xl rounded-full transform group-hover:scale-110 transition-transform duration-700`}></div>
          <img
            src={slide.img}
            alt={slide.sub}
            className="rounded-3xl shadow-2xl relative z-10 w-full max-w-lg object-cover aspect-[4/3] transform group-hover:scale-[1.02] transition-transform duration-700 border border-white/5"
          />
        </div>

      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSlide === idx ? "bg-white w-8" : "bg-white/40 hover:bg-white/60"
            }`}
          ></button>
        ))}
      </div>

    </section>
  );
}

export default Hero;