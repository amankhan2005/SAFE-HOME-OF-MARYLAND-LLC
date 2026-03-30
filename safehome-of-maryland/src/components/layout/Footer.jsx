import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#1F2F2F] text-gray-300 pt-16 pb-8 overflow-hidden">

      {/* TOP ACCENT LINE */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E68A3F] via-[#2F5D5E] to-[#E68A3F]"></div>

      {/* SUBTLE BACKGROUND TEXTURE */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNNjAgMEwzMCAzME0zMCAzMEwwIDYwTTMwIDMwTDMwIDYwTTMwIDMwTDAgMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">

          {/* COMPANY INFO - Takes more space */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              {/* Logo Placeholder - Use an actual image if available */}
              <Link to="/" className="inline-block">
                <div className="bg-white p-2 rounded-lg shadow-md inline-block">
                  <img
                    src="images/logo.png"
                    alt="logo"
                    className="h-18 w-auto"
                  />
                </div>
              </Link>
            </div>

            <p className="text-white mb-6 leading-relaxed">
              Providing compassionate, high-quality residential care services that promote dignity, independence, and community integration for individuals with diverse needs.
            </p>


          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-6">Explore</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-white hover:text-[#E68A3F] transition-colors flex items-center gap-2 group"><span className="w-2 h-2 rounded-full bg-[#2F5D5E] group-hover:bg-[#E68A3F] transition-colors"></span>Home</Link></li>
              <li><Link to="/about" className="text-white hover:text-[#E68A3F] transition-colors flex items-center gap-2 group"><span className="w-2 h-2 rounded-full bg-[#2F5D5E] group-hover:bg-[#E68A3F] transition-colors"></span>About Us</Link></li>
              <li><Link to="/services" className="text-white hover:text-[#E68A3F] transition-colors flex items-center gap-2 group"><span className="w-2 h-2 rounded-full bg-[#2F5D5E] group-hover:bg-[#E68A3F] transition-colors"></span>Services</Link></li>
              <li><Link to="/faq" className="text-white hover:text-[#E68A3F] transition-colors flex items-center gap-2 group"><span className="w-2 h-2 rounded-full bg-[#2F5D5E] group-hover:bg-[#E68A3F] transition-colors"></span>FAQs</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services/behavioral-support" className="text-white hover:text-[#E68A3F] transition-colors flex items-center gap-2 group"><span className="w-2 h-2 rounded-full bg-[#2F5D5E] group-hover:bg-[#E68A3F] transition-colors"></span>Behavioral Support</Link></li>
              <li><Link to="/services/personal-care" className="text-white hover:text-[#E68A3F] transition-colors flex items-center gap-2 group"><span className="w-2 h-2 rounded-full bg-[#2F5D5E] group-hover:bg-[#E68A3F] transition-colors"></span>Personal Care</Link></li>
              <li><Link to="/services/residential-services" className="text-white hover:text-[#E68A3F] transition-colors flex items-center gap-2 group"><span className="w-2 h-2 rounded-full bg-[#2F5D5E] group-hover:bg-[#E68A3F] transition-colors"></span>Residential Services</Link></li>
              <li><Link to="/services/respite-care" className="text-white hover:text-[#E68A3F] transition-colors flex items-center gap-2 group"><span className="w-2 h-2 rounded-full bg-[#2F5D5E] group-hover:bg-[#E68A3F] transition-colors"></span>Respite Care</Link></li>
              <li><Link to="/services/supported-living" className="text-white hover:text-[#E68A3F] transition-colors flex items-center gap-2 group"><span className="w-2 h-2 rounded-full bg-[#2F5D5E] group-hover:bg-[#E68A3F] transition-colors"></span>Supported Living</Link></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="lg:col-span-3">
  <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>

  <ul className="space-y-5">

    {/* ADDRESS */}
  <li className="flex items-start gap-4">
  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#E68A3F] mt-0.5">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  </div>

  <div>
    <a
      href="https://www.google.com/maps/search/?api=1&query=1337+Tralee+Circle+Aberdeen+MD+21001"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#E68A3F] transition-all duration-300"
    >
      <p className="text-white">1337 Tralee Circle</p>
      <p className="text-gray-500 text-sm">Aberdeen, MD 21001</p>
    </a>
  </div>
</li>

    {/* EMAIL */}
    <li className="flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#E68A3F] mt-0.5">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <div>
        <a
          href="mailto:safehomeofmd@gmail.com"
          className="text-white hover:text-[#E68A3F] transition-all duration-300"
        >
          safehomeofmd@gmail.com
        </a>
        <p className="text-gray-500 text-sm">General Inquiries</p>
      </div>
    </li>

    {/* PHONE */}
    <li className="flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#E68A3F] mt-0.5">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </div>
      <div>
        <a
          href="tel:+14107765928"
          className="text-white hover:text-[#E68A3F] transition-all duration-300"
        >
          410-776-5928
        </a>
        <p className="text-gray-500 text-sm">Mon - Fri</p>
      </div>
    </li>

    {/* FAX */}
 <li className="flex items-start gap-4">
  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#E68A3F] mt-0.5">
    
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 9V2h12v7M6 18h12a2 2 0 002-2v-5a2 2 0 00-2-2H6a2 2 0 00-2 2v5a2 2 0 002 2zm2 0v4h8v-4"
      />
    </svg>

  </div>

  <div>
    <a
      href="tel:+14102724230"
      className="text-white hover:text-[#E68A3F] transition-all duration-300"
    >
      410-272-4230
    </a>
    <p className="text-gray-500 text-sm">Fax Line</p>
  </div>
</li>

  </ul>

   
</div>

        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500 text-center md:text-left">
            © {currentYear} Safe Home of Maryland LLC. All rights reserved.
          </p>

          <p className="text-sm text-gray-500 text-center md:text-right">
            Design & Developed by{" "}
            <a
              href="https://www.webieapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E68A3F] hover:text-white transition-colors font-medium"
            >
              WebieApp
            </a>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;