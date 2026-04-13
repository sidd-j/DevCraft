import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import "./styles.css";

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const [mobNavOpen, setMobNavOpen] = useState(false);

  const show = (id) => {
    setActivePage(id);
    setMobNavOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Navbar show={show} toggleMob={() => setMobNavOpen(!mobNavOpen)} />
      <MobileNav open={mobNavOpen} show={show} close={() => setMobNavOpen(false)} />

      {activePage === "home" && <HomePage show={show} />}
      {activePage === "about" && <AboutPage show={show} />}
      {activePage === "services" && <ServicesPage show={show} />}
      {activePage === "portfolio" && <PortfolioPage show={show} />}
      {activePage === "contact" && <ContactPage />}

      <Footer show={show} />
      <WhatsAppFloat />
    </div>
  );
}
