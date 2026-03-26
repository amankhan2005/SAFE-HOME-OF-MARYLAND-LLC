 import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <section className="relative min-h-screen md:min-h-[90vh] flex items-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="/images/hero.jpeg"
        alt="Individuals with developmental disabilities participating in community activities with support staff"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* 🔥 STRONGER OVERLAY FOR BETTER CONTRAST */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1F2F2F]/95 via-[#2F5D5E]/95 to-[#2F5D5E]/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 md:py-20">

        <div className="max-w-2xl">

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EED4B7]/15 border border-[#EED4B7]/30 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-[#E68A3F] animate-pulse"></span>
            <span className="text-[#EED4B7] text-sm font-semibold tracking-wide uppercase">
              Safe Home of Maryland
            </span>
          </div>

          {/* 🔥 HEADING (slightly bigger + more spacing) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Empowering Lives Through{" "}
            <span className="text-[#E68A3F]">Compassionate Support</span>
          </h1>

          {/* 🔥 PARAGRAPH (BIG CHANGE for accessibility) */}
          <p className="text-lg md:text-xl text-gray-100 mb-10 leading-relaxed max-w-xl">
            We support individuals with intellectual and developmental disabilities by providing personalized care that encourages independence, builds confidence, and helps each person live a meaningful and connected life.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">

            <Link
              to="/contact-us"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#E68A3F] text-white text-lg font-bold rounded-xl shadow-lg shadow-[#E68A3F]/30 transition-all duration-300 hover:bg-[#CC7730] hover:shadow-xl hover:shadow-[#E68A3F]/40 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Get Support
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border border-white/30 text-white text-lg font-semibold rounded-xl backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/50 w-full sm:w-auto"
            >
              Our Services
            </Link>
          </div>

          {/* TRUST */}
          <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-white/20">

            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#EED4B7]/20 flex items-center justify-center text-[#EED4B7]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-base">24/7 Care</p>
                <p className="text-gray-300 text-sm">Always Available</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#EED4B7]/20 flex items-center justify-center text-[#EED4B7]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-base">Experienced Staff</p>
                <p className="text-gray-300 text-sm">Trained & Compassionate</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeHero;