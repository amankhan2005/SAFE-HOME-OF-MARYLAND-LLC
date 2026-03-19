 import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We provide residential care, personal support, behavioral support, respite care, and supported living services tailored to individual needs."
  },
  {
    question: "Who can benefit from your services?",
    answer:
      "Our services are designed for individuals with developmental disabilities, physical challenges, and complex behavioral needs seeking a supportive community."
  },
  {
    question: "Do you offer 24/7 care?",
    answer:
      "Yes, we provide round-the-clock supervision and care to ensure the safety, health, and well-being of all our residents."
  },
  {
    question: "Where are you located?",
    answer:
      "Our facility is conveniently located at 1337 Tralee Circle, Aberdeen, MD 21001. You can find a map on our Contact page."
  },
  {
    question: "How can I contact you?",
    answer:
      "You can contact us through our Contact page form, email us directly at info@safehomeofmaryland.com, or call our main office."
  },
  {
    question: "Do you provide personalized care plans?",
    answer:
      "Absolutely. We believe in person-centered care. All our services are tailored to meet the unique preferences, goals, and needs of each resident."
  }
];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative bg-[#1F2F2F] py-24 lg:py-32 overflow-hidden">
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2F5D5E]/30 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E68A3F]/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-bold text-[#E68A3F] tracking-widest uppercase mb-4">
            Help Center
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our services, admission process, and care philosophy.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT - Split Layout */}
      <section className="relative py-16 lg:py-24">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* LEFT COLUMN - Sidebar (Sticky) */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                
                {/* Info Card */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mb-8">
                  <h3 className="text-xl font-bold text-[#1F2F2F] mb-4">
                    Can't find an answer?
                  </h3>
                  <p className="text-gray-500 mb-6 leading-relaxed">
                    Our team is here to help. Reach out directly and we’ll get back to you as soon as possible.
                  </p>
                  <Link
                    to="/contact-us"
                    className="inline-flex w-full items-center justify-center px-6 py-3 bg-[#1F2F2F] text-white font-semibold rounded-xl shadow-lg hover:bg-[#2F5D5E] transition-colors"
                  >
                    Contact Support
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </Link>
                </div>

                {/* Contact Details Mini */}
                {/* <div className="hidden lg:block bg-gradient-to-br from-[#2F5D5E] to-[#1F2F2F] p-8 rounded-3xl text-white">
                   <div className="flex items-center gap-4 mb-4">
                     <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                     </div>
                     <div>
                       <p className="text-xs text-gray-300 uppercase tracking-wider">Call Us</p>
                       <p className="font-semibold">+1 XXX XXX XXXX</p>
                     </div>
                   </div>
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                     </div>
                     <div>
                       <p className="text-xs text-gray-300 uppercase tracking-wider">Email</p>
                       <p className="font-semibold text-sm">safehomeofmaryland@gmail.com</p>
                     </div>
                   </div>
                </div> */}

              </div>
            </div>

            {/* RIGHT COLUMN - Accordion */}
            <div className="lg:col-span-8 space-y-4">
              
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`group bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${
                    activeIndex === index 
                      ? 'border-[#E68A3F]/30 shadow-lg shadow-[#E68A3F]/5' 
                      : 'border-transparent shadow-sm hover:border-gray-100'
                  }`}
                >
                  
                  {/* Question Header */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-6 py-6 flex items-center gap-5"
                  >
                    {/* Number Badge */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
                       activeIndex === index 
                       ? 'bg-[#E68A3F] text-white' 
                       : 'bg-[#2F5D5E]/5 text-[#2F5D5E]'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <h3 className={`flex-grow text-lg font-semibold transition-colors duration-300 ${
                      activeIndex === index ? 'text-[#1F2F2F]' : 'text-gray-700'
                    }`}>
                      {faq.question}
                    </h3>

                    {/* Toggle Icon */}
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      activeIndex === index 
                      ? 'rotate-180 border-[#E68A3F] text-[#E68A3F] bg-white' 
                      : 'border-gray-200 text-gray-400 bg-white'
                    }`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </button>

                  {/* Answer Content */}
                  {activeIndex === index && (
                    <div className="px-6 pb-6 ml-[60px] mr-[40px]">
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}

                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FAQPage;