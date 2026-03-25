// Updated content from your file :contentReference[oaicite:0]{index=0}

const HomeMissionVision = () => {
  return (
    <section className="relative py-24 lg:py-24 overflow-hidden">
      
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#EED4B7]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#2F5D5E]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#E68A3F]"></span>
            <span className="text-sm font-bold text-[#E68A3F] tracking-widest uppercase">
              Our Purpose
            </span>
            <span className="w-8 h-[2px] bg-[#E68A3F]"></span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2F2F] tracking-tight">
            Guided by Purpose, Focused on People
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* MISSION */}
          <div className="group relative bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
            
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#E68A3F] to-[#CC7730]"></div>
            
            <div className="absolute -bottom-4 -right-4 w-32 h-32 text-[#E68A3F]/5 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#E68A3F]/10 text-[#E68A3F] mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-[#1F2F2F] mb-4 tracking-tight">
                Our Mission
              </h3>

              <p className="text-gray-600 leading-relaxed text-lg">
                To provide person-centered support that empowers individuals with intellectual and developmental disabilities to live with dignity, build independence, and actively participate in their communities.
              </p>
            </div>
          </div>

          {/* VISION */}
          <div className="group relative bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
            
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#2F5D5E] to-[#1F2F2F]"></div>
            
            <div className="absolute -bottom-4 -right-4 w-32 h-32 text-[#2F5D5E]/5 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#2F5D5E]/10 text-[#2F5D5E] mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-[#1F2F2F] mb-4 tracking-tight">
                Our Vision
              </h3>

              <p className="text-gray-600 leading-relaxed text-lg">
                To build a future where every individual has the opportunity to live independently, feel included, and lead a meaningful life within their community.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeMissionVision;