 import { useState } from "react";
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ validation
    if (!formData.name || !formData.email || !formData.message) {
      return toast.error("All required fields are required ❌");
    }

    try {
      setLoading(true);

      await submitContactForm(formData);

      // 🔥 SUCCESS POPUP
      toast.success("Message sent successfully ✅");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });

    } catch (error) {
      // 🔥 ERROR POPUP
      toast.error(error.message || "Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">

      <section className="bg-slate-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-8 rounded-lg shadow-md space-y-4"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 border rounded-md"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-md text-white ${
              loading
                ? "bg-gray-400"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </section>

    </div>
  );
};

export default ContactPage;