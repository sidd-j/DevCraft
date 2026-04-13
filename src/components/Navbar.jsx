import { useState, useEffect } from "react";

export default function Navbar({ show, toggleMob }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="navbar" className={scrolled ? "scrolled" : ""}>
      <div className="nav-inner">
        <a className="nav-logo" href="#" onClick={() => show("home")}>
          DevCraft<span>.</span>
        </a>
        <ul className="nav-links">
          <li><a className="nav-header" href="#" onClick={() => show("home")}>Home</a></li>
          <li><a className="nav-header" href="#" onClick={() => show("about")}>About</a></li>
          <li><a className="nav-header" href="#" onClick={() => show("services")}>Services</a></li>
          <li><a className="nav-header" href="#" onClick={() => show("portfolio")}>Portfolio</a></li>
          <li><a className="nav-header" href="#" onClick={() => show("contact")}>Contact</a></li>
        </ul>
        <div className="nav-cta">
          <a className="btn btn-outline" href="#" onClick={() => show("contact")} style={{ fontSize: "0.82rem", padding: "10px 22px" }}>
            Get a Quote
          </a>
        </div>
        <div className="hamburger" onClick={toggleMob}>
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  );
}
