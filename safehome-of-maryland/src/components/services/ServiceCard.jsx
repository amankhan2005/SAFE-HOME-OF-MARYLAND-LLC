import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">

      <h3 className="text-xl font-semibold mb-3 text-slate-900">
        {service.title}
      </h3>

      <p className="text-gray-600 mb-4">
        {service.description}
      </p>

      <Link
        to={`/services/${service.slug}`}
        className="text-blue-500 font-medium hover:underline"
      >
        Learn More →
      </Link>

    </div>
  );
};

export default ServiceCard;