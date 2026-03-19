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
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Providing compassionate, high-quality residential care services that promote dignity, independence, and community integration for individuals with diverse needs.
            </p>

            {/* Social Media Icons */}
            {/* <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#E68A3F] hover:text-white hover:border-[#E68A3F] transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#E68A3F] hover:text-white hover:border-[#E68A3F] transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.13 1.1-4-.2-7.58-2.11-9.96-5.02-.42.72-.66 1.56-.66 2.46 0 1.68.85 3.16 2.14 4.02-.79-.02-1.53-.24-2.18-.6v.06c0 2.35 1.67 4.31 3.88 4.76-.4.1-.83.16-1.27.16-.31 0-.62-.03-.92-.08.63 1.96 2.45 3.39 4.61 3.43-1.69 1.32-3.83 2.1-6.15 2.1-.4 0-.8-.02-1.19-.07 2.19 1.4 4.78 2.22 7.57 2.22 9.07 0 14.02-7.52 14.02-14.02 0-.21 0-.42-.01-.63.96-.69 1.79-1.56 2.45-2.55-.88.39-1.83.65-2.82.77z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#E68A3F] hover:text-white hover:border-[#E68A3F] transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div> */}
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-6">Explore</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-[#E68A3F] transition-colors flex items-center gap-2 group"><span className="w-2 h-2 rounded-full bg-[#2F5D5E] group-hover:bg-[#E68A3F] transition-colors"></span>Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-[#E68A3F] transition-colors flex items-center gap-2 group"><span className="w-2 h-2 rounded-full bg-[#2F5D5E] group-hover:bg-[#E68A3F] transition-colors"></span>About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#E68A3F] transition-colors flex items-center gap-2 group"><span className="w-2 h-2 rounded-full bg-[#2F5D5E] group-hover:bg-[#E68A3F] transition-colors"></span>Services</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-[#E68A3F] transition-colors flex items-center gap-2 group"><span className="w-2 h-2 rounded-full bg-[#2F5D5E] group-hover:bg-[#E68A3F] transition-colors"></span>FAQs</Link></li>
            </ul>
          </div>
 
          {/* SERVICES */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services/behavioral-support" className="text-gray-400 hover:text-[#E68A3F] transition-colors flex items-center gap-2 group"><span className="w-2 h-2 rounded-full bg-[#2F5D5E] group-hover:bg-[#E68A3F] transition-colors"></span>Behavioral Support</Link></li>
              <li><Link to="/services/personal-care" className="text-gray-400 hover:text-[#E68A3F] transition-colors flex items-center gap-2 group"><span className="w-2 h-2 rounded-full bg-[#2F5D5E] group-hover:bg-[#E68A3F] transition-colors"></span>Personal Care</Link></li>
              <li><Link to="/services/residential-services" className="text-gray-400 hover:text-[#E68A3F] transition-colors flex items-center gap-2 group"><span className="w-2 h-2 rounded-full bg-[#2F5D5E] group-hover:bg-[#E68A3F] transition-colors"></span>Residential Services</Link></li>
              <li><Link to="/services/respite-care" className="text-gray-400 hover:text-[#E68A3F] transition-colors flex items-center gap-2 group"><span className="w-2 h-2 rounded-full bg-[#2F5D5E] group-hover:bg-[#E68A3F] transition-colors"></span>Respite Care</Link></li>
              <li><Link to="/services/supported-living" className="text-gray-400 hover:text-[#E68A3F] transition-colors flex items-center gap-2 group"><span className="w-2 h-2 rounded-full bg-[#2F5D5E] group-hover:bg-[#E68A3F] transition-colors"></span>Supported Living</Link></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#E68A3F] mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <p className="text-gray-400">1337 Tralee Circle</p>
                  <p className="text-gray-500 text-sm">Aberdeen, MD 21001</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#E68A3F] mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <a href="mailto:safehomeofmaryland@gmail.com" className="text-gray-400 hover:text-[#E68A3F] transition-colors">
                    safehomeofmaryland@gmail.com
                  </a>
                </div>
              </li>
              {/* <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#E68A3F] mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <p className="text-gray-400">+1 XXX XXX XXXX</p>
                  <p className="text-gray-500 text-sm">Mon - Fri, 8am - 5pm</p>
                </div>
              </li> */}
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {currentYear} Safe Home of Maryland LLC. All rights reserved.
            </p>
            {/* <div className="flex gap-6">
              <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-[#E68A3F] transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-gray-500 hover:text-[#E68A3F] transition-colors">Terms of Service</Link>
            </div> */}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;