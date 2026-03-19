 import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <section className="relative min-h-screen md:min-h-[90vh] flex items-center overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <img
        src="/images/hero.png"
        alt="Caregiver providing compassionate care"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* PREMIUM OVERLAY GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1F2F2F] via-[#2F5D5E]/95 to-[#2F5D5E]/40"></div>
      
      {/* Optional: Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjEiLz4KPC9zdmc+')]"></div>

      {/* CONTENT CONTAINER */}
      {/* Reduced py-16 for mobile, increased to py-20 for desktop */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 md:py-20">
        
        <div className="max-w-2xl">

          {/* FLOATING BADGE */}
          {/* Smaller padding/text on mobile */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#EED4B7]/10 border border-[#EED4B7]/20 backdrop-blur-sm mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-[#E68A3F] animate-pulse"></span>
            <span className="text-[#EED4B7] text-xs sm:text-sm font-medium tracking-wide uppercase">
              Safe Home of Maryland
            </span>
          </div>

          {/* HEADING */}
          {/* Responsive text sizing: 3xl -> 4xl -> 5xl -> 6xl */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4 md:mb-6">
            Safe, Compassionate{" "}
            <span className="text-[#E68A3F]">Care</span> for Every Individual
          </h1>

          {/* TEXT */}
          {/* Slightly smaller text on mobile */}
          <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-10 leading-relaxed max-w-xl">
            Providing high-quality residential support services that promote dignity,
            independence, and well-being in a nurturing environment.
          </p>

          {/* BUTTONS */}
          {/* Stacked on mobile, row on sm+ screens. Buttons full width on mobile. */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-12">
            
            {/* Primary CTA */}
            <Link
              to="/contact-us"
              className="group relative inline-flex items-center justify-center px-8 py-3.5 sm:py-4 bg-[#E68A3F] text-white font-bold rounded-xl shadow-lg shadow-[#E68A3F]/30 transition-all duration-300 hover:bg-[#CC7730] hover:shadow-xl hover:shadow-[#E68A3F]/40 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Contact Us
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>

            {/* Secondary CTA */}
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-3.5 sm:py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/40 w-full sm:w-auto"
            >
              Our Services
            </Link>
          </div>

          {/* TRUST INDICATORS */}
          {/* Adjusted pt and icon sizes for mobile */}
          <div className="flex flex-col sm:flex-row gap-6 pt-6 md:pt-8 border-t border-white/10">
            
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#EED4B7]/10 flex items-center justify-center text-[#EED4B7]">
                 <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm sm:text-base">24/7 Care</p>
                <p className="text-gray-400 text-xs sm:text-sm">Always Available</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#EED4B7]/10 flex items-center justify-center text-[#EED4B7]">
                 <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm sm:text-base">Experienced Staff</p>
                <p className="text-gray-400 text-xs sm:text-sm">Trained & Compassionate</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeHero;