 import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className="group relative flex flex-col h-full p-8 lg:p-10 bg-white rounded-3xl border border-gray-100/80 shadow-sm hover:shadow-2xl transition-all duration-500 ease-out overflow-hidden hover:-translate-y-2">
      
     
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E68A3F]/0 group-hover:bg-[#E68A3F]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 transition-all duration-700"></div>
      
      {/* DECORATIVE CORNER ACCENT */}
      {/* A subtle geometric touch that frames the card */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-4 right-4 w-2 h-8 bg-[#2F5D5E]/20 rounded-full"></div>
        <div className="absolute top-4 right-4 w-8 h-2 bg-[#2F5D5E]/20 rounded-full"></div>
      </div>

      {/* ICON CONTAINER */}
      <div className="relative mb-8 flex-shrink-0">
        <div className="w-16 h-16 rounded-2xl bg-[#2F5D5E]/5 border border-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] group-hover:bg-[#E68A3F] group-hover:border-[#E68A3F] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#E68A3F]/30 transition-all duration-300">
          {service.icon ? (
            <span className="w-7 h-7">{service.icon}</span>
          ) : (
            // Premium Default Icon
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
          )}
        </div>
      </div>

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 flex flex-col flex-grow">
        
        {/* TITLE */}
        <h3 className="text-xl lg:text-2xl font-bold text-[#1F2F2F] mb-4 tracking-tight leading-snug group-hover:text-[#2F5D5E] transition-colors duration-300">
          {service.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-gray-500 mb-8 leading-relaxed flex-grow text-base">
          {service.description}
        </p>

        {/* ACTION FOOTER */}
        <div className="mt-auto pt-4 border-t border-gray-50 group-hover:border-transparent transition-colors">
          <Link
            to={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F3F4F6] text-[#1F2F2F] font-semibold text-sm group-hover:bg-[#1F2F2F] group-hover:text-white transition-all duration-300"
          >
            <span>Explore Service</span>
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </div>
        
      </div>

    </div>
  );
};

export default ServiceCard;