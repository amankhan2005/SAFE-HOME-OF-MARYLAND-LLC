import { services } from "../../data/servicesData";
import ServiceCard from "../services/ServiceCard";

const HomeServices = () => {
  return (
    <section className="bg-gray-50 py-16">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

      </div>

    </section>
  );
};

export default HomeServices;