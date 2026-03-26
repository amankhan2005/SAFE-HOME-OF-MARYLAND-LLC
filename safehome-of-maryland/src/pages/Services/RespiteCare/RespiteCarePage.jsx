import { useState } from "react";
import { Link } from "react-router-dom";

const RespiteCarePage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What is respite care?",
      a: "Respite care provides temporary support for individuals while giving primary caregivers time to rest, travel, or manage personal responsibilities."
    },
    {
      q: "How long can respite care be provided?",
      a: "Our services are flexible and can be arranged for a few hours, a few days, or longer periods depending on the needs of the family."
    },
    {
      q: "Will the same level of care be provided?",
      a: "Yes, we maintain the same high standard of care to ensure comfort, safety, and consistency for your loved ones."
    },
    {
      q: "Is respite care flexible?",
      a: "Absolutely. Our services are designed to adapt to different schedules and specific individual needs."
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
            alt="Respite Care"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F2F2F] via-[#1F2F2F]/90 to-[#2F5D5E]/80"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E68A3F]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-24 text-center">
          
          <span className="inline-block px-4 py-1.5 bg-[#E68A3F]/10 border border-[#E68A3F]/20 rounded-full text-[#E68A3F] text-base font-bold uppercase tracking-wider mb-6">
            Family Support
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Respite Care  
            <span className="text-[#EED4B7]"> Services</span>
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Temporary care solutions designed to provide relief for families and caregivers while ensuring individuals receive safe, compassionate support.
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
                src="/images/respite-care.jpg"
                alt="Caregiver relaxing"
                className="relative z-10 w-full h-full object-cover rounded-2xl shadow-xl"
              />
             
            </div>

            {/* Content */}
            <div>
              <span className="inline-block text-base font-bold text-[#2F5D5E] tracking-widest uppercase mb-4">
                About This Service
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F2F2F] leading-tight tracking-tight mb-6">
                Giving Caregivers the <span className="text-[#2F5D5E]">Support They Deserve</span>
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  At Safe Home of Maryland, we understand that caregiving is both rewarding and demanding. Our respite care services are designed to provide temporary relief for families and primary caregivers.
                </p>
                <p>
                  During this time, individuals continue to receive high-quality care in a safe, structured, and nurturing environment. Our trained staff ensures that all needs are met with compassion and professionalibase.
                </p>
                <p>
                  Whether care is needed for a few hours or longer, we offer flexible solutions that adapt to each family’s situation, maintaining continuity of care while providing caregivers with the support they need.
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
              Reliable support designed to bring peace of mind to families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Benefit 1 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:bg-[#2F5D5E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2F2F] mb-2 group-hover:text-white transition-colors">Caregiver Relief</h3>
              <p className="text-gray-500 text-base group-hover:text-gray-200 transition-colors">Temporary relief for families and primary caregivers to rest and recharge.</p>
            </div>

            {/* Benefit 2 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:bg-[#2F5D5E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2F2F] mb-2 group-hover:text-white transition-colors">Flexible Scheduling</h3>
              <p className="text-gray-500 text-base group-hover:text-gray-200 transition-colors">Care options tailored to fit your specific schedule and duration needs.</p>
            </div>

            {/* Benefit 3 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:bg-[#2F5D5E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2F2F] mb-2 group-hover:text-white transition-colors">Safe Environment</h3>
              <p className="text-gray-500 text-base group-hover:text-gray-200 transition-colors">A secure, supervised setting ensuring safety and well-being at all times.</p>
            </div>

            {/* Benefit 4 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:bg-[#2F5D5E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2F2F] mb-2 group-hover:text-white transition-colors">Professional Staff</h3>
              <p className="text-gray-500 text-base group-hover:text-gray-200 transition-colors">Compassionate and trained caregivers providing expert support.</p>
            </div>

            {/* Benefit 5 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:bg-[#2F5D5E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2F2F] mb-2 group-hover:text-white transition-colors">Continuity of Care</h3>
              <p className="text-gray-500 text-base group-hover:text-gray-200 transition-colors">Maintaining daily routines and care plans for seamless transitions.</p>
            </div>

            {/* Benefit 6 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:bg-[#2F5D5E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E] mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2F2F] mb-2 group-hover:text-white transition-colors">Peace of Mind</h3>
              <p className="text-gray-500 text-base group-hover:text-gray-200 transition-colors">Knowing your loved ones are in safe, caring hands while you take a break.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. APPROACH SECTION (Text Focus) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2F2F] tracking-tight">
              Flexible Care When You Need It Most
            </h2>
          </div>
          
          <div className="relative pl-8 border-l-4 border-[#E68A3F] space-y-8 text-gray-600 leading-relaxed">
            <p>
              Respite care plays an important role in maintaining the well-being of both individuals and their caregivers. It allows families to take necessary breaks without compromising the quality of care their loved ones receive.
            </p>
            <p>
              Our services are designed to be flexible and responsive, ensuring that care is available when it is needed most. We work closely with families to understand their requirements and provide customized care solutions that fit their schedules.
            </p>
            <p>
              By offering a safe and supportive environment, we help individuals continue their daily routines while caregivers take time to rest and recover. This balance ensures better long-term care and overall well-being for everyone involved.
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
            <p className="text-gray-500">Common questions about our Respite Care services.</p>
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
            Take a Break While We Care for Your Loved Ones
          </h2>
          <p className="text-gray-300 mb-8 text-lg max-w-xl mx-auto">
            Contact us today to learn how our respite care services can provide relief and peace of mind.
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

export default RespiteCarePage;