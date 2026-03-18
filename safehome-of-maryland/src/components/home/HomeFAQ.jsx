import { useState } from "react";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We offer residential care, personal support, behavioral support, respite care, and supported living services."
  },
  {
    question: "Who can benefit from your services?",
    answer:
      "Our services are designed for individuals with developmental disabilities, physical challenges, and behavioral needs."
  },
  {
    question: "Do you provide 24/7 care?",
    answer:
      "Yes, we provide round-the-clock supervision and care in a safe and structured environment."
  },
  {
    question: "How can I apply for services?",
    answer:
      "You can contact us directly through our website or call us to discuss eligibility and next steps."
  }
];

const HomeFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border"
            >

              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center"
              >
                <span className="font-medium text-slate-900">
                  {faq.question}
                </span>

                <span className="text-xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>

              {/* Answer */}
              {activeIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default HomeFAQ;