import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white">

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Safe, Compassionate Care for Every Individual
          </h1>

          <p className="text-gray-300 mb-6 text-lg">
            At SAFE HOME OF MARYLAND LLC, we provide high-quality residential care
            services that promote dignity, independence, and a better quality of life.
          </p>

          <div className="flex gap-4">
            <Link
              to="/contact"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-md font-semibold"
            >
              Contact Us
            </Link>

            <Link
              to="/services"
              className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="/images/hero.jpg"
            alt="care"
            className="rounded-lg shadow-lg"
          />
        </div>

      </div>

    </section>
  );
};

export default HomeHero;