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
    question: "How can I get started with your services?",
    answer:
      "You can reach out to us through our contact form or call our team directly. We will guide you through eligibility, available programs, and the next steps to begin services."
  }
];

const HomeFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 lg:py-24 bg-white overflow-hidden">

      {/* DECORATIVE BACKGROUND ELEMENTS */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#EED4B7]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#2F5D5E]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

          {/* LEFT COLUMN - Header & CTA (Sticky) */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <span className="inline-block text-sm font-bold text-[#E68A3F] tracking-widest uppercase mb-4">
                Support
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1F2F2F] tracking-tight mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                We’re here to support you every step of the way. If you have additional questions, our team is ready to help you find the right services and guidance.
              </p>

              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 text-[#1F2F2F] font-bold border-b-2 border-[#E68A3F] pb-1 hover:text-[#2F5D5E] transition-colors group"
              >
                Contact Our Team
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN - Accordion */}
          <div className="lg:col-span-8 space-y-4">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`group border rounded-2xl overflow-hidden transition-all duration-300 ${activeIndex === index
                    ? 'bg-white border-[#E68A3F]/30 shadow-lg shadow-[#E68A3F]/5'
                    : 'bg-[#F9FAFB] border-transparent hover:bg-gray-50'
                  }`}
              >

                {/* QUESTION HEADER */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-6 flex justify-between items-center gap-4"
                >
                  <div className="flex items-center gap-4">
                    {/* Dynamic Number/Bullet */}
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${activeIndex === index
                        ? 'bg-[#E68A3F] text-white'
                        : 'bg-[#2F5D5E]/10 text-[#2F5D5E]'
                      }`}>
                      {index + 1}
                    </div>

                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${activeIndex === index ? 'text-[#1F2F2F]' : 'text-gray-700'
                      }`}>
                      {faq.question}
                    </h3>
                  </div>

                  {/* Chevron Icon */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-white border flex items-center justify-center transition-all duration-300 ${activeIndex === index ? 'rotate-180 border-[#E68A3F] text-[#E68A3F]' : 'border-gray-200 text-gray-400'
                    }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </button>

                {/* ANSWER CONTENT */}
                {activeIndex === index && (
                  <div className="px-6 pb-6 ml-12">
                    <div className="border-l-2 border-[#E68A3F]/30 pl-4">
                      <p className="text-gray-600 leading-relaxed">
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
  );
};

export default HomeFAQ;