import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <h2 className="text-lg font-bold">
          SAFE HOME OF MARYLAND
        </h2>

        {/* Menu */}
        <ul className="flex gap-6 items-center text-sm">

          <li>
            <Link to="/" className="hover:text-blue-400">Home</Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-blue-400">About</Link>
          </li>

          {/* Dropdown */}
          <li 
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <span className="cursor-pointer hover:text-blue-400">
              Services ▾
            </span>

            {open && (
              <ul className="absolute top-8 left-0 bg-slate-800 rounded-md shadow-lg p-3 w-56 space-y-2">

                <li>
                  <Link to="/services/behavioral-support" className="block hover:text-blue-400">
                    Behavioral Support
                  </Link>
                </li>

                <li>
                  <Link to="/services/personal-care" className="block hover:text-blue-400">
                    Personal Care
                  </Link>
                </li>

                <li>
                  <Link to="/services/residential-services" className="block hover:text-blue-400">
                    Residential Services
                  </Link>
                </li>

                <li>
                  <Link to="/services/respite-care" className="block hover:text-blue-400">
                    Respite Care
                  </Link>
                </li>

                <li>
                  <Link to="/services/supported-living" className="block hover:text-blue-400">
                    Supported Living
                  </Link>
                </li>

              </ul>
            )}
          </li>

          <li>
            <Link to="/contact" className="hover:text-blue-400">Contact</Link>
          </li>

          <li>
            <Link to="/faq" className="hover:text-blue-400">FAQ</Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;