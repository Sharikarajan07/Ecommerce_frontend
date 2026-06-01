import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-500 flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-6 bg-gradient-to-b from-blue-50/40 via-slate-50 to-transparent dark:from-slate-900 dark:via-slate-950 dark:to-transparent">
        {/* Soft decorative background glows */}
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-300/10 dark:bg-blue-900/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-rose-300/10 dark:bg-rose-900/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-5xl mx-auto text-center">
          <span className="text-blue-600 dark:text-blue-400 font-bold tracking-[0.25em] text-xs uppercase block mb-4 animate-fadeIn">
            About ShopEase
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8 leading-tight">
            Curating the <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">Extraordinary</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-350 max-w-3xl mx-auto leading-relaxed font-light">
            Welcome to ShopEase. We believe shopping shouldn't just be transactional. It should be a discovery of quality, a connection to timeless craft, and an elevation of the everyday.
          </p>
        </div>
      </section>

      {/* The Story Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group overflow-hidden rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8" 
              alt="ShopEase curated collection" 
              className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Elegant overlay card (glassmorphism style) */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-6 rounded-2xl border border-white/20 dark:border-slate-800/30">
              <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Authentic Curation</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Every item in our boutique is individually checked for craftsmanship and quality.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
              Bridging Heritage & Modernity
            </h2>
            <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              ShopEase was founded on a simple insight: the modern lifestyle demands a harmony between future-facing innovation and soul-stirring heritage. We don’t believe in massive, overwhelming catalogs. Instead, we select only the finest goods.
            </p>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              From high-performance athletic footwear and state-of-the-art tech gadgets to the exquisite luxury of our handloomed <strong className="text-slate-900 dark:text-white font-medium">Saree Boutique</strong>, and the slow, tactile delight of our handcrafted <strong className="text-slate-900 dark:text-white font-medium">Gifts & Stationery</strong>—we bring you items that carry a story, a signature of quality, and a purpose.
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We collaborate closely with traditional Indian master weavers, contemporary product designers, and ethical manufacturers. When you purchase from ShopEase, you support authentic creators and bring lasting value into your life.
            </p>
          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="bg-slate-100/50 dark:bg-slate-900/30 border-y border-slate-200/50 dark:border-slate-800/50 py-20 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Our Core Pillars
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              The values that guide every selection and interaction at ShopEase.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white dark:bg-slate-900/70 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-800/80 group">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                織
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Artisanal Heritage</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Preserving ancient handloom techniques. Sourcing genuine Banarasi, Kanjeevaram, and Tant sarees directly from certified weaver clusters.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white dark:bg-slate-900/70 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-800/80 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                ⚙️
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Modern Innovation</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Vetting the top-tier consumer electronics, premium watches, and smart gear that make modern living efficient and stylish.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white dark:bg-slate-900/70 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-800/80 group">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                ✍️
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Slower Living</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Inspiring moments of reflection through premium writing instruments, leather-bound journals, and sensory-rich home objects.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white dark:bg-slate-900/70 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-800/80 group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                ✨
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Premium Service</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Designing a seamless user experience, responsive customer support, and boutique packaging that makes every delivery feel like a gift.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 w-full text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="text-4xl md:text-5xl font-black text-blue-600 dark:text-blue-400">100%</p>
            <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mt-2">Authenticity</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black text-rose-500 dark:text-rose-450">25+</p>
            <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mt-2">Master Weavers</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black text-indigo-500 dark:text-indigo-400">10k+</p>
            <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mt-2">Happy Customers</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black text-teal-600 dark:text-teal-400">24/7</p>
            <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mt-2">Concierge Help</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto w-full px-6 pb-24 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-[2rem] p-12 shadow-xl shadow-blue-500/10 relative overflow-hidden">
          {/* Subtle geometric circles */}
          <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full border-4 border-white/10"></div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full border-4 border-white/10"></div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative z-10">
            Ready to explore our collection?
          </h2>
          <p className="text-blue-100 max-w-lg mx-auto mb-8 text-sm md:text-base relative z-10">
            Browse through our premium items, handloom sarees, and designer stationery items curated for you.
          </p>
          <div className="relative z-10 flex flex-wrap justify-center gap-4">
            <Link 
              to="/products" 
              className="bg-white text-blue-600 font-bold px-8 py-3 rounded-full hover:bg-slate-100 hover:shadow-lg transition-all duration-300 transform active:scale-95"
            >
              Shop All Products
            </Link>
            <Link 
              to="/" 
              className="bg-blue-700/40 text-white border border-white/20 font-bold px-8 py-3 rounded-full hover:bg-blue-700/60 hover:border-white/40 transition-all duration-300 transform active:scale-95"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
