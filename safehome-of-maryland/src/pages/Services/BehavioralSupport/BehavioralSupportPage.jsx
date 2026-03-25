 import { useState } from "react";
import { Link } from "react-router-dom";

const BehavioralSupportPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What is behavioral support?",
      a: "Behavioral support helps individuals develop positive behaviors and manage emotional challenges through structured plans and professional guidance."
    },
    {
      q: "Who can benefit from behavioral support?",
      a: "Individuals with emotional, developmental, or behavioral challenges can benefit from this service."
    },
    {
      q: "Do you provide continuous support?",
      a: "Yes, we offer 24/7 support to ensure safety, stability, and consistent progress."
    },
    {
      q: "Are care plans personalized?",
      a: "Absolutely. Each care plan is tailored based on individual needs, goals, and assessments."
    }
  ];

  return (
    <div className="bg-white">

     

      {/* 2. HERO SECTION */}
     <section className="relative min-h-[60vh] flex items-center justify-center bg-[#1F2F2F] overflow-hidden">
  
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img 
      src="/images/hero.png"
      alt="Behavioral Support"
      className="w-full h-full object-cover opacity-30"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#1F2F2F] via-[#1F2F2F]/90 to-[#2F5D5E]/80"></div>
  </div>

  {/* Decorative Elements */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-[#E68A3F]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-24 text-center">
    
    <span className="inline-block px-4 py-1.5 bg-[#E68A3F]/10 border border-[#E68A3F]/20 rounded-full text-[#E68A3F] text-sm font-bold uppercase tracking-wider mb-6">
      Core Service
    </span>

    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
      Behavioral Support  
      <span className="text-[#EED4B7]"> Services</span>
    </h1>

    <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
      Structured and compassionate support to help individuals improve emotional well-being, develop positive habits, and lead more independent lives.
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
                src="/images/behavioral-support.avif"
                alt="Caregiver interaction"
                className="relative z-10 w-full h-full object-cover rounded-2xl shadow-xl"
              />
           
            </div>

            {/* Content */}
            <div>
              <span className="inline-block text-sm font-bold text-[#2F5D5E] tracking-widest uppercase mb-4">
                About This Service
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F2F2F] leading-tight tracking-tight mb-6">
                Personalized Support That Creates <span className="text-[#2F5D5E]">Real Change</span>
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  At Safe Home of Maryland, we understand that behavioral challenges can impact daily life, relationships, and emotional stability. Our services are designed to provide individuals with the tools and guidance they need.
                </p>
                <p>
                  Every individual is unique, which is why we focus on creating personalized care plans tailored to specific needs, goals, and challenges. Our trained staff work closely with each resident to identify triggers and encourage positive behaviors.
                </p>
                <p>
                  We provide a structured and nurturing environment where individuals feel safe, respected, and empowered. Through consistent support, patience, and professional care, we help individuals improve their confidence and overall quality of life.
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
              Comprehensive support designed to foster stability and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Benefit 1 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:bg-[#2F5D5E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2F2F] mb-2 group-hover:text-white transition-colors">Emotional Regulation</h3>
              <p className="text-gray-500 text-sm group-hover:text-gray-200 transition-colors">Improves emotional regulation and helps develop healthy coping abilities.</p>
            </div>

            {/* Benefit 2 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:bg-[#2F5D5E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2F2F] mb-2 group-hover:text-white transition-colors">Positive Routines</h3>
              <p className="text-gray-500 text-sm group-hover:text-gray-200 transition-colors">Encourages positive daily habits, structure, and consistent routines.</p>
            </div>

            {/* Benefit 3 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:bg-[#2F5D5E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2F2F] mb-2 group-hover:text-white transition-colors">Personalized Plans</h3>
              <p className="text-gray-500 text-sm group-hover:text-gray-200 transition-colors">Tailored care plans created to meet individual needs and goals.</p>
            </div>

            {/* Benefit 4 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:bg-[#2F5D5E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2F2F] mb-2 group-hover:text-white transition-colors">Expert Staff</h3>
              <p className="text-gray-500 text-sm group-hover:text-gray-200 transition-colors">Support from trained, experienced, and compassionate professionals.</p>
            </div>

            {/* Benefit 5 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:bg-[#2F5D5E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2F2F] mb-2 group-hover:text-white transition-colors">Safe Environment</h3>
              <p className="text-gray-500 text-sm group-hover:text-gray-200 transition-colors">A structured, secure, and supportive living atmosphere.</p>
            </div>

            {/* Benefit 6 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:bg-[#2F5D5E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2F2F] mb-2 group-hover:text-white transition-colors">Progress Tracking</h3>
              <p className="text-gray-500 text-sm group-hover:text-gray-200 transition-colors">Ongoing monitoring to ensure consistent growth and success.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. APPROACH SECTION (Text Focus) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2F2F] tracking-tight">
              Supporting Growth, Stability, and Independence
            </h2>
          </div>
          
          <div className="relative pl-8 border-l-4 border-[#E68A3F] space-y-8 text-gray-600 leading-relaxed">
            <p>
              Behavioral support plays a crucial role in helping individuals manage emotional and developmental challenges. Our approach focuses on understanding the root causes of behaviors and implementing practical strategies that encourage long-term improvement.
            </p>
            <p>
              We collaborate with families, caregivers, and professionals to ensure a consistent and supportive care system. This teamwork allows us to provide well-rounded support that promotes stability and progress in all areas of life.
            </p>
            <p>
              By fostering a positive and structured environment, we empower individuals to build meaningful relationships, improve communication, and gain greater independence. Our goal is not only to address challenges but to create opportunities for growth and success.
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
            <p className="text-gray-500">Common questions about our Behavioral Support services.</p>
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
            Start Your Journey Toward Better Support
          </h2>
          <p className="text-gray-300 mb-8 text-lg max-w-xl mx-auto">
            Reach out to our team today to learn how our behavioral support services can improve quality of life.
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

export default BehavioralSupportPage;