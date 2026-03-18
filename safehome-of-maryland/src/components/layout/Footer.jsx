import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-10">
      
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <h2 className="text-white font-bold text-lg mb-3">
            SAFE HOME OF MARYLAND LLC
          </h2>
          <p className="text-sm">
            Providing compassionate residential care services for individuals with diverse needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
            <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-blue-400">FAQ</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-3">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services/behavioral-support" className="hover:text-blue-400">Behavioral Support</Link></li>
            <li><Link to="/services/personal-care" className="hover:text-blue-400">Personal Care</Link></li>
            <li><Link to="/services/residential-services" className="hover:text-blue-400">Residential Services</Link></li>
            <li><Link to="/services/respite-care" className="hover:text-blue-400">Respite Care</Link></li>
            <li><Link to="/services/supported-living" className="hover:text-blue-400">Supported Living</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm">
            1337 Tralee Circle <br />
            Aberdeen, MD 21001
          </p>

          <p className="text-sm mt-2">
            Email: info@safehomeofmaryland.com
          </p>

          <p className="text-sm mt-1">
            Phone: +1 XXX XXX XXXX
          </p>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 text-center text-sm py-4">
        © {new Date().getFullYear()} SAFE HOME OF MARYLAND LLC. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;