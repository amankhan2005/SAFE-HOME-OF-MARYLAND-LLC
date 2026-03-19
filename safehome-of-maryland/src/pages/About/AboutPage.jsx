 const AboutPage = () => {
  return (
    <div className="bg-white">

      {/* 1. HERO SECTION - Premium Impact */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center justify-center bg-[#1F2F2F] overflow-hidden">
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/about-hero.jpg" // Ensure this image exists
            alt="Caregiver helping resident"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F2F2F] via-[#1F2F2F]/80 to-transparent"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2F5D5E]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-20">
          <span className="inline-block text-sm font-bold text-[#E68A3F] tracking-widest uppercase mb-4">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Redefining Care with <br />
            <span className="text-[#EED4B7]">Compassion & Dignity</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We are more than a care facility; we are a sanctuary where individuals find support, independence, and a true sense of home.
          </p>
        </div>
      </section>

      {/* 2. WHO WE ARE - Asymmetric Layout */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Image Composition */}
            <div className="relative lg:col-span-5 h-[450px] lg:h-[600px]">
              {/* Main Image */}
              <div className="absolute top-0 left-0 w-full h-[85%] rounded-2xl overflow-hidden shadow-2xl z-10 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/images/about.jpg"
                  alt="Safe Home interior"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Secondary Overlapping Image */}
              <div className="absolute bottom-0 left-0 lg:left-10 w-2/3 h-1/3 rounded-xl overflow-hidden shadow-xl border-4 border-white z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/images/about.jpg" // Secondary image
                  alt="Happy resident"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
               
            </div>

            {/* Content */}
            <div className="lg:col-span-7">
              <span className="inline-block text-sm font-bold text-[#2F5D5E] tracking-widest uppercase mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2F2F] leading-tight tracking-tight mb-6">
                A Legacy of Caring for <br className="hidden sm:block" />
                <span className="text-[#2F5D5E]">Maryland Families</span>
              </h2>

              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  <span className="font-semibold text-[#1F2F2F]">SAFE HOME OF MARYLAND LLC</span> is a trusted provider of residential care services dedicated to supporting individuals with diverse needs.
                </p>
                <p>
                  Our goal is to create a safe, nurturing, and structured environment where individuals can thrive. We focus on personalized care plans that promote independence, dignity, and emotional well-being for every resident.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-gray-200">
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-[#E68A3F]">50+</p>
                  <p className="text-sm text-gray-500 mt-1">Happy Residents</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-[#E68A3F]">24/7</p>
                  <p className="text-sm text-gray-500 mt-1">Care Support</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-[#E68A3F]">15+</p>
                  <p className="text-sm text-gray-500 mt-1">Years Exp.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION - Color Coded Cards */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2F2F] tracking-tight">
              Our Guiding Principles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Mission Card */}
            <div className="group relative bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#E68A3F] to-[#CC7730]"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 text-[#E68A3F]/5">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#E68A3F]/10 text-[#E68A3F] mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1F2F2F] mb-4 tracking-tight">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To deliver high-quality, person-centered care that enhances the physical, emotional, and social well-being of every individual we serve.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#2F5D5E] to-[#1F2F2F]"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 text-[#2F5D5E]/5">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#2F5D5E]/10 text-[#2F5D5E] mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1F2F2F] mb-4 tracking-tight">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To create a future where every individual can live with dignity, independence, and purpose while being supported by a caring community.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US - Interactive Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-bold text-[#E68A3F] tracking-widest uppercase mb-4">
              Why Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2F2F] tracking-tight">
              The Safe Home Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1 */}
            <div className="group p-8 bg-[#F9FAFB] rounded-2xl border border-gray-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-[#2F5D5E] group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </div>
              <h4 className="text-lg font-bold text-[#1F2F2F] mb-2">Compassionate Care</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                We treat every individual with respect, kindness, and empathy.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group p-8 bg-[#F9FAFB] rounded-2xl border border-gray-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-[#2F5D5E] group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path></svg>
              </div>
              <h4 className="text-lg font-bold text-[#1F2F2F] mb-2">Experienced Staff</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Skilled professionals dedicated to providing quality care 24/7.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group p-8 bg-[#F9FAFB] rounded-2xl border border-gray-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-[#2F5D5E] group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h4 className="text-lg font-bold text-[#1F2F2F] mb-2">Safe Environment</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Secure and comfortable living spaces designed for peace of mind.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group p-8 bg-[#F9FAFB] rounded-2xl border border-gray-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-[#2F5D5E] group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h4 className="text-lg font-bold text-[#1F2F2F] mb-2">Community Focus</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Encouraging social engagement and fostering independence.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;