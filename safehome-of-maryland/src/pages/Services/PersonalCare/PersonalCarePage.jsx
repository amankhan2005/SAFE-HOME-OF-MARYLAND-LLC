import { useState } from "react";
import { Link } from "react-router-dom";

const PersonalCarePage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What does personal care include?",
      a: "Personal care includes assistance with daily activities such as bathing, grooming, dressing, eating, and mobility support tailored to individual needs."
    },
    {
      q: "Who can benefit from personal care services?",
      a: "Individuals who need help with daily tasks due to age, disability, or health conditions can greatly benefit from our specialized support."
    },
    {
      q: "Is support available all day?",
      a: "Yes, we provide 24/7 support to ensure safety, comfort, and continuous care for all our residents."
    },
    {
      q: "Are services customized?",
      a: "Absolutely. All care plans are personalized to meet the unique needs, preferences, and routines of each resident."
    }
  ];

  return (
    <div className="bg-white">

    

      {/* 2. HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#1F2F2F] overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.png" // Use a relevant image if available
            alt="Personal Care"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F2F2F] via-[#1F2F2F]/90 to-[#2F5D5E]/80"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E68A3F]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-24 text-center">
          
          <span className="inline-block px-4 py-1.5 bg-[#E68A3F]/10 border border-[#E68A3F]/20 rounded-full text-[#E68A3F] text-base font-bold uppercase tracking-wider mb-6">
            Daily Living Support
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Personal Care  
            <span className="text-[#EED4B7]"> Services</span>
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Compassionate assistance with daily living activities to ensure comfort, dignity, and a better quality of life for every individual we serve.
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
                src="/images/personal-care.jpg"
                alt="Caregiver assisting resident"
                className="relative z-10 w-full h-full object-cover rounded-2xl shadow-xl"
              />
              
            </div>

            {/* Content */}
            <div>
              <span className="inline-block text-base font-bold text-[#2F5D5E] tracking-widest uppercase mb-4">
                About This Service
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F2F2F] leading-tight tracking-tight mb-6">
                Supporting Daily Life with <span className="text-[#2F5D5E]">Dignity & Respect</span>
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  At Safe Home of Maryland, our personal care services are designed to support individuals with essential daily activities while maintaining their dignity and independence.
                </p>
                <p>
                  Our trained caregivers provide hands-on support with bathing, grooming, dressing, meal preparation, and mobility assistance. Every service is delivered with respect, patience, and attention to individual preferences.
                </p>
                <p>
                  We focus on creating a safe and supportive environment where individuals can maintain their routines and feel confident in their daily lives.
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
              Comprehensive support designed to foster independence and well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Benefit 1 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:bg-[#2F5D5E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2F2F] mb-2 group-hover:text-white transition-colors">Hygiene Assistance</h3>
              <p className="text-gray-500 text-base group-hover:text-gray-200 transition-colors">Professional assistance with bathing, grooming, and personal hygiene needs.</p>
            </div>

            {/* Benefit 2 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:bg-[#2F5D5E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2F2F] mb-2 group-hover:text-white transition-colors">Meal Preparation</h3>
              <p className="text-gray-500 text-base group-hover:text-gray-200 transition-colors">Nutritious meal planning and feeding support tailored to dietary needs.</p>
            </div>

            {/* Benefit 3 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:bg-[#2F5D5E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2F2F] mb-2 group-hover:text-white transition-colors">Mobility Support</h3>
              <p className="text-gray-500 text-base group-hover:text-gray-200 transition-colors">Safe movement assistance and transferring to prevent falls and injuries.</p>
            </div>

            {/* Benefit 4 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:bg-[#2F5D5E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2F2F] mb-2 group-hover:text-white transition-colors">Independence</h3>
              <p className="text-gray-500 text-base group-hover:text-gray-200 transition-colors">Encouraging self-care and independence wherever possible.</p>
            </div>

            {/* Benefit 5 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:bg-[#2F5D5E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2F2F] mb-2 group-hover:text-white transition-colors">Expert Caregivers</h3>
              <p className="text-gray-500 text-base group-hover:text-gray-200 transition-colors">Compassionate, trained professionals available around the clock.</p>
            </div>

            {/* Benefit 6 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:bg-[#2F5D5E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2F2F] mb-2 group-hover:text-white transition-colors">Safe Environment</h3>
              <p className="text-gray-500 text-base group-hover:text-gray-200 transition-colors">A respectful, secure, and supportive atmosphere for all residents.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. APPROACH SECTION (Text Focus) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2F2F] tracking-tight">
              Enhancing Comfort, Safety, and Quality of Life
            </h2>
          </div>
          
          <div className="relative pl-8 border-l-4 border-[#E68A3F] space-y-8 text-gray-600 leading-relaxed">
            <p>
              Personal care is an essential part of maintaining health, comfort, and well-being. Our services are designed to ensure that individuals receive the assistance they need while still maintaining their independence and personal choices.
            </p>
            <p>
              We take a person-centered approach, meaning every care plan is tailored to the individual’s needs, preferences, and daily routines. Our caregivers work closely with residents and their families to ensure consistent and reliable support.
            </p>
            <p>
              By providing respectful and attentive care, we help individuals feel more confident, secure, and comfortable in their daily lives. Our goal is to not only assist but also empower individuals to live with dignity.
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
            <p className="text-gray-500">Common questions about our Personal Care services.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`group bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${
                  activeIndex === i 
                    ? 'border-[#E68A3F]/30 shadow-lg' 
                    : 'border-transparent shadow-base hover:border-gray-100'
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
            Get Compassionate Personal Care Today
          </h2>
          <p className="text-gray-300 mb-8 text-lg max-w-xl mx-auto">
            Contact us to learn how our personal care services can support comfort, dignity, and independence.
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

export default PersonalCarePage;