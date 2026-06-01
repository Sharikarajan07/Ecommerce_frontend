function Newsletter() {
  return (
    <section className="bg-black text-white py-24">

      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-5xl font-bold">
          Stay Updated
        </h2>

        <p className="mt-4 text-gray-400">
          Subscribe for exclusive offers and new arrivals.
        </p>

        <div className="flex mt-8 gap-4 justify-center">

          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-4 rounded-xl text-black w-[350px]"
          />

          <button className="bg-blue-600 px-8 rounded-xl">
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;