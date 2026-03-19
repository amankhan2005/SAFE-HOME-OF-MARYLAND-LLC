 
import { useState } from "react";
import { Link } from "react-router-dom";

const ResidentialServicesPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What are residential services?",
      a: "Residential services provide individuals with a safe living environment where they receive 24/7 care, support, and supervision."
    },
    {
      q: "Who can benefit from residential care?",
      a: "Individuals who need ongoing supervision, assistance, or structured support in their daily lives can greatly benefit from these services."
    },
    {
      q: "Is staff available at all times?",
      a: "Yes, our trained staff is available 24/7 to ensure safety, care, and immediate support whenever needed."
    },
    {
      q: "Are residents encouraged to be independent?",
      a: "Absolutely. We promote independence while providing the necessary support to help individuals live confidently and comfortably."
    }
  ];

  return (
    <div className="bg-white">

     

      {/* 2. HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#1F2F2F] overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.png" // Use a relevant residential image if available
            alt="Residential Services"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F2F2F] via-[#1F2F2F]/90 to-[#2F5D5E]/80"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E68A3F]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-24 text-center">
          
          <span className="inline-block px-4 py-1.5 bg-[#E68A3F]/10 border border-[#E68A3F]/20 rounded-full text-[#E68A3F] text-sm font-bold uppercase tracking-wider mb-6">
            24/7 Care
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Residential Care  
            <span className="text-[#EED4B7]"> Services</span>
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Providing a safe, structured, and supportive home environment with 24/7 care designed to promote comfort, stability, and independence.
          </p>

          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E68A3F] text-white font-bold rounded-xl shadow-lg shadow-[#E68A3F]/30 hover:bg-[#CC7730] transition-all duration-300"
          >
            Get Started
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>

        </div>
      </section>

      {/* 3. ABOUT SERVICE (Split Layout) */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Image Composition */}
            <div className="relative h-[400px] lg:h-[500px]">
              <div className="absolute top-4 left-4 w-full h-full bg-[#2F5D5E] rounded-2xl transform rotate-2"></div>
              <img
                src="/images/residential-services.jpg"
                alt="Residential Home"
                className="relative z-10 w-full h-full object-cover rounded-2xl shadow-xl"
              />
              {/* Floating Stat */}
            
            </div>

            {/* Content */}
            <div>
              <span className="inline-block text-sm font-bold text-[#2F5D5E] tracking-widest uppercase mb-4">
                About This Service
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F2F2F] leading-tight tracking-tight mb-6">
                A Safe and Supportive Place to <span className="text-[#2F5D5E]">Call Home</span>
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  At Safe Home of Maryland, our residential services provide individuals with a secure and nurturing living environment where they can feel safe, valued, and supported every day.
                </p>
                <p>
                  Our group home setting is designed to offer both structure and comfort. Residents receive 24/7 supervision and care from trained professionals who are dedicated to meeting their physical, emotional, and social needs.
                </p>
                <p>
                  We focus on promoting independence while providing the necessary level of support. Through personalized care plans, we encourage residents to participate in daily activities and build social connections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. KEY BENEFITS (Feature Grid) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2F2F] tracking-tight">
              Key Benefits
            </h2>
            <p className="text-gray-500 mt-4">
              A structured environment designed to foster stability and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Benefit 1 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:bg-[#2F5D5E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2F2F] mb-2 group-hover:text-white transition-colors">24/7 Supervision</h3>
              <p className="text-gray-500 text-sm group-hover:text-gray-200 transition-colors">Round-the-clock professional care and supervision for peace of mind.</p>
            </div>

            {/* Benefit 2 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:bg-[#2F5D5E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2F2F] mb-2 group-hover:text-white transition-colors">Safe Environment</h3>
              <p className="text-gray-500 text-sm group-hover:text-gray-200 transition-colors">A secure, structured living space designed for comfort and safety.</p>
            </div>

            {/* Benefit 3 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:bg-[#2F5D5E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2F2F] mb-2 group-hover:text-white transition-colors">Community Living</h3>
              <p className="text-gray-500 text-sm group-hover:text-gray-200 transition-colors">A comfortable group home setting that encourages social interaction.</p>
            </div>

            {/* Benefit 4 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:bg-[#2F5D5E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2F2F] mb-2 group-hover:text-white transition-colors">Personalized Plans</h3>
              <p className="text-gray-500 text-sm group-hover:text-gray-200 transition-colors">Tailored care strategies designed to meet each resident's unique needs.</p>
            </div>

            {/* Benefit 5 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:bg-[#2F5D5E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2F2F] mb-2 group-hover:text-white transition-colors">Social Engagement</h3>
              <p className="text-gray-500 text-sm group-hover:text-gray-200 transition-colors">Opportunities for meaningful activities and building connections.</p>
            </div>

            {/* Benefit 6 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:bg-[#2F5D5E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2F2F] mb-2 group-hover:text-white transition-colors">Independence</h3>
              <p className="text-gray-500 text-sm group-hover:text-gray-200 transition-colors">Support that promotes autonomy and enhances overall well-being.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. APPROACH SECTION (Text Focus) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2F2F] tracking-tight">
              Designed for Comfort, Stability, and Growth
            </h2>
          </div>
          
          <div className="relative pl-8 border-l-4 border-[#E68A3F] space-y-8 text-gray-600 leading-relaxed">
            <p>
              Residential care plays a vital role in supporting individuals who require consistent supervision and assistance in their daily lives. Our services are designed to provide not just care, but a stable and welcoming environment where individuals can thrive.
            </p>
            <p>
              We take a person-centered approach to care, ensuring that each resident’s needs, preferences, and goals are respected. Our team works closely with families and healthcare professionals to deliver consistent and high-quality support.
            </p>
            <p>
              By offering a balance of structure and independence, we help residents develop confidence, improve daily living skills, and enjoy a better quality of life. Our goal is to create a home where every individual feels safe, supported, and empowered.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION (Accordion) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1F2F2F] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500">Common questions about our Residential Services.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`group bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${
                  activeIndex === i 
                    ? 'border-[#E68A3F]/30 shadow-lg' 
                    : 'border-transparent shadow-sm hover:border-gray-100'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full text-left px-6 py-6 flex items-center justify-between gap-4"
                >
                  <h4 className="font-semibold text-[#1F2F2F]">{faq.q}</h4>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    activeIndex === i 
                    ? 'rotate-180 border-[#E68A3F] text-[#E68A3F]' 
                    : 'border-gray-200 text-gray-400'
                  }`}>
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </button>
                
                {activeIndex === i && (
                  <div className="px-6 pb-6">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-600 pt-4">{faq.a}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="relative py-24 bg-[#1F2F2F] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#1F2F2F] to-[#2F5D5E] opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E68A3F]/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Find a Safe Place to Call Home
          </h2>
          <p className="text-gray-300 mb-8 text-lg max-w-xl mx-auto">
            Contact us today to learn how our residential services provide comfort, safety, and long-term support.
          </p>
          <Link 
            to="/contact-us" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E68A3F] text-white font-bold rounded-xl shadow-lg shadow-[#E68A3F]/30 hover:bg-[#CC7730] hover:-translate-y-1 transition-all duration-300"
          >
            Contact Us Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ResidentialServicesPage;