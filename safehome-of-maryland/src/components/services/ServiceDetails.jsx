import { Link } from "react-router-dom";

const ServiceDetails = ({ title, description }) => {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-slate-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          {description}
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          What We Offer
        </h2>

        <p className="text-gray-600 mb-6">
          Our {title.toLowerCase()} services are designed to provide personalized care,
          support independence, and improve overall quality of life for individuals.
        </p>

        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
          <li>Personalized care plans</li>
          <li>24/7 professional support</li>
          <li>Safe and structured environment</li>
          <li>Focus on independence and dignity</li>
          <li>Community integration opportunities</li>
        </ul>

        {/* CTA */}
        <Link
          to="/contact-us"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md"
        >
          Contact Us
        </Link>

      </section>

    </div>
  );
};

export default ServiceDetails;