 import { Link } from "react-router-dom";
import { services } from "../../data/servicesData";
import ServiceCard from "../services/ServiceCard";

const HomeServices = () => {
  return (
    <section className="relative   lg:py-16 overflow-hidden">
      
      
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FAFAFA] to-white"></div>
      
       
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2F5D5E]/5 rounded-full blur-3xl opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
 <div className="flex justify-center mb-16 lg:mb-20 text-center">
  <div className="max-w-3xl mx-auto">

    {/* LABEL */}
    <div className="flex items-center justify-center gap-3 mb-4">
      <span className="w-10 h-[2px] bg-[#E68A3F]"></span>
      <span className="text-[#E68A3F] font-semibold text-sm tracking-widest uppercase">
        What We Offer
      </span>
      <span className="w-10 h-[2px] bg-[#E68A3F]"></span>
    </div>

    {/* HEADING */}
    <h2 className="text-4xl md:text-5xl font-bold text-[#1F2F2F] leading-tight">
      Comprehensive Care <br />
      <span className="text-[#2F5D5E]">
        Tailored to You
      </span>
    </h2>

    

     {/* DESCRIPTION (2 LINE ONLY) */}
<p className="mt-3 text-[#4A5A5A] text-lg leading-relaxed max-w-4xl mx-auto">
  Personalized care designed to support comfort and independence.  
  
</p>

  </div>
</div>

        {/* SERVICES GRID */}
        {/* Responsive: 1 col mobile -> 2 col tablet -> 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

       

      </div>
    </section>
  );
};

export default HomeServices;