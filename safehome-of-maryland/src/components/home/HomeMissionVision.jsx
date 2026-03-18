const HomeMissionVision = () => {
  return (
    <section className="bg-white py-16">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Our Mission & Vision
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Mission */}
          <div className="bg-slate-100 p-8 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600">
              Our mission is to provide high-quality, person-centered care that
              enhances the physical, emotional, and social well-being of every
              individual. We are committed to promoting dignity, independence,
              and a better quality of life.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-slate-100 p-8 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600">
              Our vision is to create a future where every individual, regardless
              of their challenges, can live with dignity, purpose, and happiness.
              We strive to be a trusted leader in compassionate residential care.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default HomeMissionVision;