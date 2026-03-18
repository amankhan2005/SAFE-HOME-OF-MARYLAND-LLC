import { useState } from "react";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We provide residential care, personal support, behavioral support, respite care, and supported living services."
  },
  {
    question: "Who can benefit from your services?",
    answer:
      "Our services are designed for individuals with developmental disabilities, physical challenges, and behavioral needs."
  },
  {
    question: "Do you offer 24/7 care?",
    answer:
      "Yes, we provide 24/7 supervision and care to ensure safety and well-being."
  },
  {
    question: "Where are you located?",
    answer:
      "We are located at 1337 Tralee Circle, Aberdeen, MD 21001."
  },
  {
    question: "How can I contact you?",
    answer:
      "You can contact us through our Contact page or email us at info@safehomeofmaryland.com."
  },
  {
    question: "Do you provide personalized care plans?",
    answer:
      "Yes, all our services are tailored to meet the individual needs of each resident."
  }
];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-slate-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Find answers to common questions about our services and care.
        </p>
      </section>

      {/* FAQ LIST */}
      <section className="max-w-4xl mx-auto px-6 py-16">

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm"
            >

              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
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

      </section>

    </div>
  );
};

export default FAQPage;