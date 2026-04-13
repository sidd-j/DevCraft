import { useEffect, useRef } from "react";
import CTABand from "../components/CTABand";

const services = [
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Modern, responsive websites and web applications that load fast and convert visitors into customers.",
    price: "Starting ₹15,000",
    features: ["Business / Corporate Website", "E-Commerce Store", "Landing Pages", "Admin Dashboards", "SEO Optimization", "Mobile Responsive", "CMS Integration", "Performance Optimized", "Custom Domain & Hosting", "30-day Post-launch Support"],
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    desc: "Cross-platform Flutter apps on Android and iOS -from MVP to full-featured production applications.",
    price: "Starting ₹25,000",
    features: ["Android & iOS Apps", "Flutter Cross-Platform", "Firebase Integration", "Push Notifications", "Offline Support", "Payment Integration", "Real-time Features", "App Store Submission", "User Authentication", "Analytics Integration"],
  },
  {
    icon: "⚙️",
    title: "Custom Software Solutions",
    desc: "Bespoke backend systems, APIs, and automation tools built precisely to your business requirements.",
    price: "Starting ₹20,000",
    features: ["REST & GraphQL APIs", "Admin Panels", "CRM Systems", "Automation Tools", "Database Design", "3rd-party Integrations", "Scalable Architecture", "Order Management", "Reporting & Analytics", "Cloud Deployment"],
  },
];

export default function ServicesPage({ show }) {
  const pageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.05 }
    );
    pageRef.current?.querySelectorAll(".fade").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={pageRef}>
      <div className="svc-hero">
        <div className="svc-hero-inner container">
          <div className="overline fade">What We Offer</div>
          <h1 className="fade d1">Our <em>Services</em></h1>
          <p className="fade d2">Comprehensive digital solutions built with modern technology, tailored to your business, and delivered on time.</p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }} className="fade d3">
            <a className="btn btn-dark" href="#" onClick={() => show("contact")}>Book a Free Consultation →</a>
            <a className="btn btn-wa" href="https://wa.me/8879679671" target="_blank" rel="noreferrer">💬 WhatsApp Us</a>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="svc-cards fade">
            {services.map(svc => (
              <div className="svc-card" key={svc.title}>
                <div className="svc-card-left">
                  <div className="svc-card-icon">{svc.icon}</div>
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                  <div className="price">{svc.price}</div>
                  <a className="btn btn-dark" href="#" onClick={() => show("contact")} style={{ width: "fit-content", marginTop: "8px" }}>Get a Quote →</a>
                </div>
                <div className="svc-card-right">
                  <h4>What's Included</h4>
                  <div className="feat-grid">
                    {svc.features.map(f => <div className="feat-item" key={f}>{f}</div>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        heading="Not sure what"
        emText="you need?"
        buttons={[
          { label: "Let's Talk →", className: "btn btn-white", href: "#", onClick: () => show("contact") },
          { label: "💬 WhatsApp Us", className: "btn btn-ghost-white", href: "https://wa.me/8879679671", target: "_blank", rel: "noreferrer" },
        ]}
      />
    </div>
  );
}
