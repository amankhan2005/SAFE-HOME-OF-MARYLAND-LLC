const AboutPage = () => {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-slate-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          About SAFE HOME OF MARYLAND
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Providing compassionate residential care services that promote dignity,
          independence, and a better quality of life.
        </p>
      </section>

      {/* ABOUT CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <div>
          <img
            src="/images/about.jpg"
            alt="about"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Who We Are
          </h2>

          <p className="text-gray-600 mb-4">
            SAFE HOME OF MARYLAND LLC is a trusted provider of residential care
            services dedicated to supporting individuals with diverse needs.
            Our goal is to create a safe, nurturing, and structured environment
            where individuals can thrive.
          </p>

          <p className="text-gray-600">
            We focus on personalized care plans that promote independence,
            dignity, and emotional well-being for every resident.
          </p>
        </div>

      </section>

      {/* MISSION & VISION */}
      <section className="bg-gray-50 py-16">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">

          {/* Mission */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-slate-900">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To deliver high-quality, person-centered care that enhances the
              physical, emotional, and social well-being of every individual.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-slate-900">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To create a future where every individual can live with dignity,
              independence, and purpose while being supported by a caring community.
            </p>
          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-slate-900 mb-10">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Compassionate Care</h4>
              <p className="text-sm text-gray-600">
                We treat every individual with respect and kindness.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Experienced Staff</h4>
              <p className="text-sm text-gray-600">
                Skilled professionals dedicated to quality care.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Safe Environment</h4>
              <p className="text-sm text-gray-600">
                Secure and comfortable living spaces for all residents.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Community Focus</h4>
              <p className="text-sm text-gray-600">
                Encouraging social engagement and independence.
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default AboutPage;