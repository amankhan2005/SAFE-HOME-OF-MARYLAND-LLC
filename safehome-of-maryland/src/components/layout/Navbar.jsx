 
 
   import { NavLink, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Heart, Shield, Home, Users, HelpCircle, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
    setDropdown(false);
  };

  const services = [
    { name: "Behavioral Support", path: "/services/behavioral-support", icon: Heart },
    { name: "Personal Care", path: "/services/personal-care", icon: Users },
    { name: "Residential Services", path: "/services/residential-services", icon: Home },
    { name: "Respite Care", path: "/services/respite-care", icon: Shield },
    { name: "Supported Living", path: "/services/supported-living", icon: Heart },
  ];

  // Helper to determine if any service is active
  const isServiceActive = (match, location) => {
    if (!match) {
      return location.pathname.startsWith("/services");
    }
    return true;
  };

  return (
     <nav className="fixed top-0 left-0 w-full z-[9999] bg-white    shadow-base">
      <div className="max-w-7xl mx-auto px-4 base:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={handleLinkClick} className="flex items-center gap-3">
              <img 
                src="/images/logo.png" 
                alt="Safe Home of Maryland" 
                className="h-18 w-auto object-contain transition-transform duration-300 hover:scale-105" 
              />
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-1">
            
            {/* Standard NavLinks with Active Styling */}
            <NavLink
              to="/"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `relative px-5 py-2 text-base font-medium rounded-full transition-all duration-200 group ${
                  isActive 
                    ? "text-[#2F5D5E] bg-[#2F5D5E]/5" 
                    : "text-slate-600 hover:text-[#2F5D5E] hover:bg-slate-50"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about-us"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `relative px-5 py-2 text-base font-medium rounded-full transition-all duration-200 group ${
                  isActive 
                    ? "text-[#2F5D5E] bg-[#2F5D5E]/5" 
                    : "text-slate-600 hover:text-[#2F5D5E] hover:bg-slate-50"
                }`
              }
            >
              About
            </NavLink>

            {/* SERVICES DROPDOWN */}
            <div className="relative" ref={dropdownRef}>
              <NavLink
                to="/services"
                isActive={isServiceActive} // Highlight if on any service page
                onClick={() => setDropdown(!dropdown)}
                className={({ isActive }) =>
                  `flex items-center px-5 py-2 text-base font-medium rounded-full transition-all duration-200 ${
                    isActive 
                      ? "text-[#2F5D5E] bg-[#2F5D5E]/5" 
                      : "text-slate-600 hover:text-[#2F5D5E] hover:bg-slate-50"
                  }`
                }
              >
                <span>Services</span>
                <ChevronDown 
                  size={16} 
                  className={`ml-1.5 transition-transform duration-300 ${dropdown ? "rotate-180" : ""}`} 
                />
              </NavLink>

              {/* MODERN DROPDOWN PANEL */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-80 transition-all duration-300 origin-top ${
                dropdown ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
              }`}>
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden p-2">
                  <div className="grid gap-1">
                    {services.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={handleLinkClick}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                            isActive 
                              ? "bg-[#2F5D5E] text-white shadow-md" 
                              : "text-slate-600 hover:bg-[#EED4B7]/20 hover:text-[#2F5D5E]"
                          }`
                        }
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                            location.pathname === item.path ? "bg-white/20" : "bg-[#EED4B7]/30"
                        }`}>
                          <item.icon size={16} className={location.pathname === item.path ? "text-white" : "text-[#2F5D5E]"} />
                        </div>
                        <span className="font-medium text-base">{item.name}</span>
                      </NavLink>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-100">
                    <Link 
                      to="/services" 
                      onClick={handleLinkClick}
                      className="block text-center text-xs font-bold text-[#E68A3F] hover:text-[#CC7730] py-2 uppercase tracking-wider transition-colors"
                    >
                      View All Services &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <NavLink
              to="/faq"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `relative px-5 py-2 text-base font-medium rounded-full transition-all duration-200 group ${
                  isActive 
                    ? "text-[#2F5D5E] bg-[#2F5D5E]/5" 
                    : "text-slate-600 hover:text-[#2F5D5E] hover:bg-slate-50"
                }`
              }
            >
              FAQ
            </NavLink>

          </div>

          {/* RIGHT: CTA BUTTON */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact-us"
              onClick={handleLinkClick}
              className="group flex items-center gap-2 px-6 py-2.5 bg-[#E68A3F] text-white text-base font-bold rounded-full shadow-lg shadow-orange-500/20 hover:bg-[#CC7730] hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Phone size={16} className="opacity-80 group-hover:rotate-12 transition-transform duration-300"/>
              Contact Us
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 transition-all duration-500 ease-in-out origin-top ${
        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 invisible h-0"
      }`}>
        <div className="px-4 py-6 space-y-2">
          
          <NavLink to="/" onClick={handleLinkClick} className={({isActive}) => `flex items-center gap-3 px-4 py-3 font-medium rounded-xl ${isActive ? "bg-[#2F5D5E] text-white" : "text-slate-700 hover:bg-slate-50"}`}>
            <Home size={18} className={!location.pathname === "/" ? "text-[#E68A3F]" : ""}/> Home
          </NavLink>
          
          <NavLink to="/about-us" onClick={handleLinkClick} className={({isActive}) => `flex items-center gap-3 px-4 py-3 font-medium rounded-xl ${isActive ? "bg-[#2F5D5E] text-white" : "text-slate-700 hover:bg-slate-50"}`}>
            <Users size={18} className="text-[#E68A3F]"/> About
          </NavLink>

          {/* Mobile Dropdown Toggle */}
          <div>
            <button
              onClick={() => setDropdown(!dropdown)}
              className="flex items-center justify-between w-full px-4 py-3 text-slate-700 font-medium rounded-xl hover:bg-slate-50"
            >
              <span className="flex items-center gap-3">
                <Shield size={18} className="text-[#E68A3F]"/> Services
              </span>
              <ChevronDown size={18} className={`text-slate-400 transition-transform ${dropdown ? "rotate-180" : ""}`} />
            </button>

            {/* Mobile Dropdown Inner */}
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${dropdown ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
              <div className="pl-4 border-l-2 border-[#E68A3F] ml-6 space-y-1">
                {services.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={handleLinkClick}
                    className={({isActive}) => `flex items-center gap-2 px-4 py-2 text-base rounded-lg ${isActive ? "text-[#2F5D5E] font-semibold bg-slate-50" : "text-slate-500 hover:text-slate-700"}`}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <NavLink to="/faq" onClick={handleLinkClick} className={({isActive}) => `flex items-center gap-3 px-4 py-3 font-medium rounded-xl ${isActive ? "bg-[#2F5D5E] text-white" : "text-slate-700 hover:bg-slate-50"}`}>
            <HelpCircle size={18} className="text-[#E68A3F]"/> FAQ
          </NavLink>

          <div className="pt-4">
            <Link
              to="/contact-us"
              onClick={handleLinkClick}
              className="flex items-center justify-center gap-2 w-full text-center bg-[#E68A3F] text-white py-3 rounded-xl font-bold shadow-lg hover:bg-[#CC7730] transition-colors"
            >
              <Phone size={18}/>
              Contact Us
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
 
