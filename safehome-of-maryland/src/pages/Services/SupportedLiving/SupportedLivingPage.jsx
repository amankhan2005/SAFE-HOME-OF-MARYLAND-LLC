 import { useState } from "react";
import { Link } from "react-router-dom";

const SupportedLivingPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What is supported living?",
      a: "Supported living helps individuals live independently in their own homes or apartments while receiving guidance and support tailored to their specific needs."
    },
    {
      q: "Who is this service for?",
      a: "It is ideal for individuals who are capable of living independently but require some level of assistance, supervision, or guidance to manage their daily lives."
    },
    {
      q: "Is support available at all times?",
      a: "Support is flexible and can be scheduled as needed, ranging from a few hours a week to daily check-ins, depending on the individual’s care plan."
    },
    {
      q: "Do you help with daily tasks?",
      a: "Yes, we assist with daily routines, decision-making, budgeting, and life skills development to promote greater independence."
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
            alt="Supported Living"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F2F2F] via-[#1F2F2F]/90 to-[#2F5D5E]/80"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E68A3F]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-24 text-center">
          
          <span className="inline-block px-4 py-1.5 bg-[#E68A3F]/10 border border-[#E68A3F]/20 rounded-full text-[#E68A3F] text-sm font-bold uppercase tracking-wider mb-6">
            Independent Living
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Supported Living  
            <span className="text-[#EED4B7]"> Services</span>
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Empowering individuals to live independently while receiving the right level of support to maintain safety, confidence, and a fulfilling lifestyle.
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
                src="/images/supported-living.jpg" 
                alt="Person living independently"
                className="relative z-10 w-full h-full object-cover rounded-2xl shadow-xl"
              />
             
            </div>

            {/* Content */}
            <div>
              <span className="inline-block text-sm font-bold text-[#2F5D5E] tracking-widest uppercase mb-4">
                About This Service
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F2F2F] leading-tight tracking-tight mb-6">
                Independence with the <span className="text-[#2F5D5E]">Right Support</span>
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  At Safe Home of Maryland, our supported living services are designed for individuals who want to live more independently while still having access to the care and guidance they need.
                </p>
                <p>
                  Our approach focuses on providing flexible support that adapts to each individual’s lifestyle. Whether it’s assistance with daily tasks, guidance in decision-making, or help managing routines, our trained staff provides the right level of care.
                </p>
                <p>
                  We create a supportive environment where individuals can develop life skills, build confidence, and take control of their daily lives while knowing help is always within reach.
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
              Encouraging self-reliance while ensuring safety and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Benefit 1 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:bg-[#2F5D5E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2F2F] mb-2 group-hover:text-white transition-colors">Independent Living</h3>
              <p className="text-gray-500 text-sm group-hover:text-gray-200 transition-colors">Encourages self-confidence and independent living in a home setting.</p>
            </div>

            {/* Benefit 2 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:bg-[#2F5D5E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2F2F] mb-2 group-hover:text-white transition-colors">Flexible Support</h3>
              <p className="text-gray-500 text-sm group-hover:text-gray-200 transition-colors">Customized support schedules based on individual needs and routines.</p>
            </div>

            {/* Benefit 3 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:bg-[#2F5D5E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2F2F] mb-2 group-hover:text-white transition-colors">Daily Task Assistance</h3>
              <p className="text-gray-500 text-sm group-hover:text-gray-200 transition-colors">Help with daily routines, chores, and personal management.</p>
            </div>

            {/* Benefit 4 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:bg-[#2F5D5E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2F2F] mb-2 group-hover:text-white transition-colors">Life Skills Development</h3>
              <p className="text-gray-500 text-sm group-hover:text-gray-200 transition-colors">Promotes personal growth and essential skill building.</p>
            </div>

            {/* Benefit 5 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:bg-[#2F5D5E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2F2F] mb-2 group-hover:text-white transition-colors">Safe Environment</h3>
              <p className="text-gray-500 text-sm group-hover:text-gray-200 transition-colors">Ensuring safety and well-being while fostering autonomy.</p>
            </div>

            {/* Benefit 6 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:bg-[#2F5D5E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2F2F] mb-2 group-hover:text-white transition-colors">Compassionate Care</h3>
              <p className="text-gray-500 text-sm group-hover:text-gray-200 transition-colors">Access to trained caregivers who respect individual choices.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. APPROACH SECTION (Text Focus) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2F2F] tracking-tight">
              Building Confidence and Life Skills
            </h2>
          </div>
          
          <div className="relative pl-8 border-l-4 border-[#E68A3F] space-y-8 text-gray-600 leading-relaxed">
            <p>
              Supported living is an ideal solution for individuals who are capable of living independently but still benefit from occasional guidance and support. Our services are designed to strike the right balance between independence and care.
            </p>
            <p>
              We work closely with individuals to develop essential life skills such as managing daily routines, maintaining personal hygiene, preparing meals, and making informed decisions. This support helps individuals become more self-reliant while still feeling secure.
            </p>
            <p>
              By offering consistent yet flexible support, we empower individuals to live meaningful and fulfilling lives. Our goal is to create an environment where independence is encouraged, confidence is built, and individuals can achieve their personal goals.
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
            <p className="text-gray-500">Common questions about our Supported Living services.</p>
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
            Start Living Independently with Confidence
          </h2>
          <p className="text-gray-300 mb-8 text-lg max-w-xl mx-auto">
            Contact us today to learn how our supported living services can help achieve greater independence.
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

export default SupportedLivingPage;