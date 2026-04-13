export default function Footer({ show }) {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">DevCraft<span>.</span></div>
            <p>A focused software studio building modern websites, mobile apps, and custom software for startups and growing businesses.</p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a className="btn btn-accent" href="#" onClick={() => show("contact")} style={{ fontSize: "0.8rem", padding: "10px 18px", borderRadius: "2px" }}>Get a Quote</a>
              <a className="btn btn-wa" href="https://wa.me/8879679671" target="_blank" rel="noreferrer" style={{ fontSize: "0.8rem", padding: "10px 18px", borderRadius: "2px" }}>💬 WhatsApp</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Pages</h4>
            <ul>
              <li><a href="#" onClick={() => show("home")}>Home</a></li>
              <li><a href="#" onClick={() => show("about")}>About Us</a></li>
              <li><a href="#" onClick={() => show("services")}>Services</a></li>
              <li><a href="#" onClick={() => show("portfolio")}>Portfolio</a></li>
              <li><a href="#" onClick={() => show("contact")}>Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#" onClick={() => show("services")}>Web Development</a></li>
              <li><a href="#" onClick={() => show("services")}>Mobile Apps</a></li>
              <li><a href="#" onClick={() => show("services")}>Custom Software</a></li>
              <li><a href="#" onClick={() => show("services")}>API Development</a></li>
              <li><a href="#" onClick={() => show("services")}>Admin Dashboards</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="https://wa.me/8879679671" target="_blank" rel="noreferrer">💬 WhatsApp</a></li>
              <li><a href="mailto:info@devcraft.studio">📧 Email Us</a></li>
              <li><a href="#">📍 Mumbai, India</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 <span>DevCraft Studio</span>. All rights reserved.</p>
          <p>Built with Passion by Siddhesh & Shubhangi</p>
        </div>
      </div>
    </footer>
  );
}
