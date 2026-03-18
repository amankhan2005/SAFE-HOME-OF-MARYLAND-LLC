import { Link } from "react-router-dom";

const HomeAboutPreview = () => {
  return (
    <section className="bg-white py-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <div>
          <img
            src="/images/about.jpg"
            alt="about"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* CONTENT */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            About SAFE HOME OF MARYLAND
          </h2>

          <p className="text-gray-600 mb-4">
            SAFE HOME OF MARYLAND LLC is dedicated to providing compassionate and
            high-quality residential care services for individuals with diverse needs.
            Our focus is on creating a safe, nurturing, and supportive environment
            where every individual can thrive.
          </p>

          <p className="text-gray-600 mb-6">
            We believe in dignity, independence, and personalized care, ensuring
            each resident receives the attention and respect they deserve.
          </p>

          <Link
            to="/about"
            className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md hover:bg-slate-700"
          >
            Read More
          </Link>
        </div>

      </div>

    </section>
  );
};

export default HomeAboutPreview;