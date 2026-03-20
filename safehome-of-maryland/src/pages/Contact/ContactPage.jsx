 import { useState, useEffect } from "react";
import { submitContactForm } from "../../utils/api";
import toast from "react-hot-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Auto-close modal after 3 seconds
  useEffect(() => {
    let timer;
    if (showModal) {
      timer = setTimeout(() => {
        setShowModal(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showModal]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return toast.error("Please fill in all required fields ❌");
    }

    try {
      setLoading(true);
      await submitContactForm(formData);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setShowModal(true); // Show success modal
    } catch (error) {
      toast.error(error.message || "Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* HERO */}
      <section className="relative bg-[#1F2F2F] py-16 sm:py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#2F5D5E]/30 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-[#E68A3F]/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs sm:text-sm font-bold text-[#E68A3F] tracking-widest uppercase mb-3 sm:mb-4">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 sm:mb-6">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
            Have questions about our services? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="relative py-16 sm:py-20 lg:py-32 -mt-8 sm:-mt-10">

        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">

            {/* LEFT COLUMN - Info & Map */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">

              {/* Contact Info Card */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1F2F2F] mb-4 sm:mb-6">Contact Information</h2>

                <div className="space-y-4 sm:space-y-6">

                  {/* 📍 Location */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1F2F2F] text-sm sm:text-base">Our Location</h4>

                      <a
                        href="https://www.google.com/maps?q=1337+Tralee+Circle+Aberdeen+MD+21001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 text-xs sm:text-sm mt-1 block hover:text-[#2F5D5E] transition"
                      >
                        1337 Tralee Circle <br /> Aberdeen, MD 21001
                      </a>
                    </div>
                  </div>

                  {/* 📧 Email */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#2F5D5E]/10 flex items-center justify-center text-[#2F5D5E]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1F2F2F] text-sm sm:text-base">Email Address</h4>

                      <a
                        href="mailto:safehomeofmaryland@gmail.com"
                        className="text-gray-500 text-xs sm:text-sm mt-1 block hover:text-[#2F5D5E] transition break-all"
                      >
                        safehomeofmaryland@gmail.com
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Map */}
              <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-gray-200 border border-gray-100">
                <iframe
                  src="https://www.google.com/maps?q=1337+Tralee+Circle+Aberdeen+MD+21001&output=embed"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Location Map"
                ></iframe>
              </div>

            </div>

            {/* RIGHT COLUMN - Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1F2F2F] mb-2">Send us a Message</h2>
                <p className="text-gray-500 text-sm sm:text-base mb-6 sm:mb-8">We typically respond within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">

                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Full Name *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#E68A3F]/20 focus:border-[#E68A3F] outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Email Address *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#E68A3F]/20 focus:border-[#E68A3F] outline-none transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Phone Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#E68A3F]/20 focus:border-[#E68A3F] outline-none transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Message *</label>
                    <div className="relative">
                      <div className="absolute top-2.5 sm:top-3 left-0 pl-3 sm:pl-4 flex items-start pointer-events-none">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#E68A3F]/20 focus:border-[#E68A3F] outline-none transition-all resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base text-white font-bold rounded-xl shadow-lg transition-all duration-300 ${loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#E68A3F] hover:bg-[#CC7730] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                      }`}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                      </>
                    )}
                  </button>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SUCCESS MODAL - Responsive & Scrollable */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop Overlay */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeModal}
          ></div>

          {/* Modal Container - Centers content vertically, allows scrolling on small screens */}
          <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
            
            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-md w-full p-6 sm:p-8 text-center transform transition-all duration-300 animate-[fadeIn_0.3s_ease-out]">
              
              {/* Close Button (X) */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Success Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-5 sm:mb-6 rounded-full bg-gradient-to-br from-[#2F5D5E] to-[#3A7A7B] flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Title */}
              <h3 
                id="modal-title"
                className="text-xl sm:text-2xl font-bold text-[#1F2F2F] mb-2 sm:mb-3"
              >
                Message Sent!
              </h3>

              {/* Description */}
              <p className="text-gray-500 mb-5 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Thank you for reaching out! We've received your message and will get back to you within 24 hours.
              </p>

              {/* Auto-close indicator */}
              <p className="text-xs text-gray-400 mb-4">
                This window will close automatically
              </p>

              {/* OK Button */}
              <button
                onClick={closeModal}
                className="w-full sm:w-auto sm:min-w-[180px] px-6 py-3 bg-[#E68A3F] hover:bg-[#CC7730] text-white font-bold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#E68A3F]/50 focus:ring-offset-2 text-sm sm:text-base"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add keyframe animation styles */}
       <style>
  {`
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: scale(0.95) translateY(10px);
      }
      to {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }
  `}
</style>

    </div>
  );
};

export default ContactPage;