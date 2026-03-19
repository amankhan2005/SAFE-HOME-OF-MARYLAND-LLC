import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Scroll
import RouteScrollTop from "./components/RouteScrollTop";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import ServicesPage from "./pages/Services/ServicesPage";
import BehavioralSupportPage from "./pages/Services/BehavioralSupport/BehavioralSupportPage";
import PersonalCarePage from "./pages/Services/PersonalCare/PersonalCarePage";
import ResidentialServicesPage from "./pages/Services/ResidentialServices/ResidentialServicesPage";
import RespiteCarePage from "./pages/Services/RespiteCare/RespiteCarePage";
import SupportedLivingPage from "./pages/Services/SupportedLiving/SupportedLivingPage";
import ContactPage from "./pages/Contact/ContactPage";
import FAQPage from "./pages/FAQ/FAQPage";

function App() {
  return (
    <Router>

      {/*  Toast (Global Popup) */}
      <Toaster position="top-right" />

      {/*  Auto scroll on route change */}
      <RouteScrollTop />

      {/* Scroll to top button */}
      <ScrollToTop />

      {/* Navbar */}
      <Navbar />

      {/*  Main Content */}
      <main className="min-h-screen pt-20">        <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />

        <Route path="/services/behavioral-support" element={<BehavioralSupportPage />} />
        <Route path="/services/personal-care" element={<PersonalCarePage />} />
        <Route path="/services/residential-services" element={<ResidentialServicesPage />} />
        <Route path="/services/respite-care" element={<RespiteCarePage />} />
        <Route path="/services/supported-living" element={<SupportedLivingPage />} />

        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />

        {/*  404 fallback (optional but best) */}
        <Route path="*" element={<h1 className="text-center py-20 text-2xl">Page Not Found</h1>} />

      </Routes>
      </main>

      {/*  Footer */}
      <Footer />

    </Router>
  );
}

export default App;