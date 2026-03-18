import { services } from "../../data/servicesData";
import ServiceCard from "../../components/services/ServiceCard";

const ServicesPage = () => {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-slate-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Our Services
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We provide a wide range of residential and support services designed
          to meet the unique needs of every individual.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

      </section>

    </div>
  );
};

export default ServicesPage;