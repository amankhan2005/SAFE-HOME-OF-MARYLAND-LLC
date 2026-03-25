 import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide a range of person-centered services including residential support, personal support, behavioral support, respite care, and supported living. Each service is tailored to meet the unique needs of the individuals we support."
  },
  {
    question: "Who do you support?",
    answer:
      "We support adults with intellectual and developmental disabilities, as well as individuals with behavioral and complex support needs who are looking for a safe and supportive environment."
  },
  {
    question: "Do you provide 24/7 support?",
    answer:
      "Yes, our team provides 24/7 support to ensure individuals feel safe, supported, and cared for at all times in a structured and respectful environment."
  },
  {
    question: "Where are you located?",
    answer:
      "We are located at 1337 Tralee Circle, Aberdeen, Maryland. Please visit our Contact page for directions and additional details."
  },
  {
    question: "How can I contact you?",
    answer:
      "You can reach out through our Contact page, email us directly, or call our team. We are always happy to assist and guide you through the next steps."
  },
  {
    question: "Do you offer personalized support plans?",
    answer:
      "Yes. We follow a person-centered approach, creating individualized support plans based on each person’s goals, preferences, and unique needs."
  }
];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* HERO */}
      <section className="relative bg-[#1F2F2F] py-24 lg:py-32 overflow-hidden">
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2F5D5E]/30 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E68A3F]/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-bold text-[#E68A3F] tracking-widest uppercase mb-4">
            Support Center
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Find answers about our services, support process, and how we help individuals live more independent and meaningful lives.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative py-16 lg:py-24">
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* LEFT */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mb-8">
                  <h3 className="text-xl font-bold text-[#1F2F2F] mb-4">
                    Need more information?
                  </h3>
                  <p className="text-gray-500 mb-6 leading-relaxed">
                    Our team is here to guide you. Reach out to learn more about our services, eligibility, and how we can support you or your loved one.
                  </p>
                  <Link
                    to="/contact-us"
                    className="inline-flex w-full items-center justify-center px-6 py-3 bg-[#1F2F2F] text-white font-semibold rounded-xl shadow-lg hover:bg-[#2F5D5E] transition-colors"
                  >
                    Contact Our Team
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </Link>
                </div>

              </div>
            </div>

            {/* RIGHT */}
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
                  
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-6 py-6 flex items-center gap-5"
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold ${
                       activeIndex === index 
                       ? 'bg-[#E68A3F] text-white' 
                       : 'bg-[#2F5D5E]/5 text-[#2F5D5E]'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <h3 className="flex-grow text-lg font-semibold text-gray-700">
                      {faq.question}
                    </h3>

                    <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center ${
                      activeIndex === index 
                      ? 'rotate-180 border-[#E68A3F] text-[#E68A3F]' 
                      : 'border-gray-200 text-gray-400'
                    }`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </button>

                  {activeIndex === index && (
                    <div className="px-6 pb-6 ml-[60px] mr-[40px]">
                      <p className="text-gray-600 leading-relaxed pt-2">
                        {faq.answer}
                      </p>
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