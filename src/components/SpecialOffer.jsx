function SpecialOffer() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-indigo-900 text-white py-32 px-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto space-y-8">
        <h2 className="text-5xl lg:text-7xl font-extrabold tracking-tight drop-shadow-sm">
          Summer Sale
        </h2>

        <p className="text-2xl lg:text-3xl text-blue-100 font-light tracking-wide">
          Up To <span className="font-bold text-white">50% OFF</span> on Premium Gear
        </p>

        <button className="bg-white text-blue-800 hover:bg-gray-50 px-10 py-4 rounded-full font-semibold shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl uppercase tracking-wider text-sm mt-4">
          Shop Sale
        </button>
      </div>
    </section>
  );
}

export default SpecialOffer;