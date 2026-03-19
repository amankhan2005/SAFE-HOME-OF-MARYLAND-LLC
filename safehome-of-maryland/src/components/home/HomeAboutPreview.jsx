 import { Link } from "react-router-dom";

const HomeAboutPreview = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      
      {/* ABSTRACT BACKGROUND SHAPE */}
      {/* Replaces the dot pattern with a large, subtle organic shape for a modern editorial feel */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F8F9FA] to-transparent opacity-70 clip-path-polygon-[0_0,100%_0,100%_100%,20%_100%]"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* IMAGE COMPOSITION - Asymmetric Collage */}
          <div className="relative lg:col-span-5 h-[450px] lg:h-[580px]">
            
            {/* Main Image Container - Shifted slightly down */}
            <div className="relative z-10 w-full h-[85%] rounded-2xl overflow-hidden shadow-2xl transform lg:rotate-1 transition-transform duration-500 hover:rotate-0">
              <img
                src="/images/about.jpg"
                alt="Caregiver providing assistance"
                className="w-full h-full object-cover"
              />
              {/* Color wash to blend with brand */}
              <div className="absolute inset-0 bg-[#2F5D5E]/10 mix-blend-multiply"></div>
            </div>

            {/* Secondary Overlapping Image - Creates depth */}
            {/* Note: You can use a different image here, e.g., "/images/about-2.jpg" */}
            <div className="absolute z-20 bottom-0 left-0 lg:left-4 w-2/3 h-1/3 rounded-xl overflow-hidden shadow-xl border-4 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-300">
               <img
                src="/images/about.jpg" // Swap this for a secondary image
                alt="Happy resident"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* FLOATING STATS BADGE */}
            <div className="absolute z-30 top-6 right-0 lg:-right-4 bg-[#1F2F2F] text-white p-4 rounded-xl shadow-xl flex items-center gap-3 border border-[#2F5D5E]/50">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#E68A3F]">10+</p>
                <p className="text-xs uppercase tracking-wider opacity-80">Years Exp.</p>
              </div>
              <div className="h-10 w-px bg-white/20"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#E68A3F]">24/7</p>
                <p className="text-xs uppercase tracking-wider opacity-80">Support</p>
              </div>
            </div>

            {/* Decorative Blurred Circle */}
            <div className="hidden lg:block absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-[#EED4B7]/30 rounded-full blur-3xl"></div>
          </div>

          {/* CONTENT CONTAINER */}
          <div className="lg:col-span-7 lg:pl-12">
            
            {/* EYEBROW */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-[#E68A3F]"></span>
              <span className="text-[#E68A3F] font-bold text-sm tracking-widest uppercase">
                About Us
              </span>
            </div>

            {/* HEADING */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F2F2F] leading-tight tracking-tight mb-6">
              Redefining Care with <br />
              <span className="relative inline-block text-[#2F5D5E]">
                Dignity & Compassion
                {/* Underline accent */}
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 7C50 3 150 3 200 7" stroke="#EED4B7" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-lg text-gray-600 mb-10 leading-relaxed border-l-2 border-gray-100 pl-6">
              At <strong className="text-[#1F2F2F]">Safe Home of Maryland</strong>, we go beyond standard support. 
              We create a sanctuary where residents thrive through personalized care plans 
              designed to foster independence and joy.
            </p>

            {/* FEATURE LIST - Connected Style */}
            <div className="space-y-6 mb-10 relative">
              
              {/* Vertical connecting line */}
              <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-gray-200"></div>

              {/* Feature 1 */}
              <div className="flex items-start gap-4 relative">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2F5D5E] flex items-center justify-center ring-4 ring-white z-10">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#1F2F2F] text-lg">Safe & Supportive Environment</h3>
                  <p className="text-gray-500 text-sm mt-1">Round-the-clock care in a secure, nurturing setting.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4 relative">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2F5D5E] flex items-center justify-center ring-4 ring-white z-10">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#1F2F2F] text-lg">Person-Centered Care Plans</h3>
                  <p className="text-gray-500 text-sm mt-1">Tailored strategies that respect individual choices.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4 relative">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E68A3F] flex items-center justify-center ring-4 ring-white z-10">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#1F2F2F] text-lg">Promoting Independence</h3>
                  <p className="text-gray-500 text-sm mt-1">Empowering residents to live life on their own terms.</p>
                </div>
              </div>
              
            </div>

            {/* CTA AREA */}
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <Link
                to="/about-us"
                className="group inline-flex items-center gap-3 bg-[#1F2F2F] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-[#2F5D5E] transition-all duration-300 hover:-translate-y-1"
              >
                Discover Our Story
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>

              {/* Secondary "Soft" Link */}
              <Link to="/services" className="inline-flex items-center gap-2 text-[#1F2F2F] font-semibold hover:text-[#E68A3F] transition-colors group">
                View Services
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-0 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeAboutPreview;