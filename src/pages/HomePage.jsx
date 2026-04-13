import { useEffect, useRef } from "react";
import Carousel from "../components/Carousel";
import CTABand from "../components/CTABand";

const marqueeItems = [
  "Web Development", "Flutter Apps", "Custom Software", "REST APIs",
  "Admin Dashboards", "E-Commerce", "Mobile-First Design", "Node.js Backends"
];

const stackItems = [
  { name: "Node.js", color: "#68A063" },
  { name: "React", color: "#61DAFB" },
  { name: "Flutter", color: "#54C5F8" },
  { name: "Firebase", color: "#FF9900" },
  { name: "MongoDB", color: "#4DB33D" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Next.js", color: "#111" },
  { name: "GraphQL", color: "#E535AB" },
  { name: "Unity", color: "#6633CC" },
  { name: "Docker", color: "#2496ED" },
];

export default function HomePage({ show }) {
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
      {/* HERO */}
      <div className="hero">
        <div className="hero-inner">
          <div className="hero-kicker fade">
            <div className="hero-kicker-dot"></div>
            <span>Mumbai-based software studio</span>
          </div>
          <h1 className="fade d1">We build modern <em>websites&nbsp;&amp;&nbsp;apps</em><br />that grow your business.</h1>
          <div className="hero-sub fade d2">
            <p>From sleek websites to powerful mobile apps- we craft digital solutions that are fast, affordable, and built to scale for startups and growing companies.</p>
            <div className="hero-sub-right">
              <a className="btn btn-dark" href="#" onClick={() => show("contact")}>Start a Project →</a>
              <a className="btn btn-outline" href="#" onClick={() => show("portfolio")}>View Work</a>
            </div>
          </div>
          <div className="hero-stats-strip fade d3">
            <div className="hero-stat"><strong>2+</strong><span>Projects Delivered</span></div>
            <div className="hero-stat"><strong>100%</strong><span>Client Satisfaction</span></div>
            <div className="hero-stat"><strong>2-6 wk</strong><span>Average Delivery</span></div>
          </div>
        </div>
      </div>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span className="marquee-item" key={i}><span className="dot"></span>{item}</span>
          ))}
        </div>
      </div>

      {/* SERVICES LIST */}
      <section className="services-list-section">
        <div className="container">
          <div className="services-intro fade">
            <div className="services-intro-left">
              <div className="overline">Our Services</div>
              <h2>Everything your business needs, online.</h2>
            </div>
            <div className="services-intro-right">
              <p>We're a lean, focused studio -no bloat, no middlemen. Two experienced developers committed to shipping quality products fast, at prices that make sense for growing businesses.</p>
              <a className="btn-arrow" href="#" onClick={() => show("services")}>Explore all services →</a>
            </div>
          </div>

          {[
            { num: "01", title: "Web Development", desc: "Beautiful, fast, and functional websites that convert visitors into customers. From landing pages to full e-commerce platforms -built to perform and scale.", chips: ["Business Websites", "E-Commerce", "Landing Pages", "Dashboards", "CMS Integration"], icon: "🌐", delay: "" },
            { num: "02", title: "Mobile App Development", desc: "Cross-platform Flutter apps that work seamlessly on Android and iOS. Production-ready, scalable, and designed to delight users from day one.", chips: ["Flutter (Android & iOS)", "Firebase", "Push Notifications", "Payment Integration", "Real-time Features"], icon: "📱", delay: "d1" },
            { num: "03", title: "Custom Software Solutions", desc: "Bespoke backend systems, REST APIs, admin panels, and automation tools built to your exact specifications -no off-the-shelf compromises.", chips: ["REST & GraphQL APIs", "Admin Panels", "CRM Systems", "Automation", "Cloud Deployment"], icon: "⚙️", delay: "d2" },
          ].map((svc) => (
            <div className={`service-row fade ${svc.delay}`} key={svc.num}>
              <div className="service-num">{svc.num}</div>
              <div className="service-body">
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <div className="service-chips">
                  {svc.chips.map(c => <span className="chip" key={c}>{c}</span>)}
                </div>
                <a className="btn-arrow" href="#" onClick={() => show("services")}>Know More →</a>
              </div>
              <div className="service-icon-col">{svc.icon}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY DEVCRAFT */}
      <section className="why-section">
        <div className="container">
          <div className="why-inner">
            <div className="why-left fade">
              <div className="overline">Why DevCraft</div>
              <h2>Built different.<br />Delivered better.</h2>
              <p>We're not an agency with layers of account managers. You work directly with the developers who build your product -resulting in faster delivery, better quality, and lower cost.</p>
              <div className="why-list">
                {[
                  { num: "01", title: "Affordable Pricing", desc: "Agency-quality work at startup-friendly prices. Transparent quotes, zero hidden fees." },
                  { num: "02", title: "Fast, Reliable Delivery", desc: "Most projects shipped in 2-6 weeks. We value your timeline as much as you do." },
                  { num: "03", title: "Direct Communication", desc: "Talk to the founders directly -no relay chains, no miscommunication." },
                  { num: "04", title: "Post-Launch Support", desc: "We stay with you after go-live. Bug fixes, updates, and guidance included." },
                ].map(item => (
                  <div className="why-item" key={item.num}>
                    <div className="why-item-num">{item.num}</div>
                    <div className="why-item-body"><h4>{item.title}</h4><p>{item.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="why-right fade d1">
              <div className="why-stat"><strong>2+</strong><span>Projects Delivered</span></div>
              <div className="why-stat"><strong>100%</strong><span>Satisfaction Rate</span></div>
              <div className="why-stat"><strong>50%</strong><span>Less Than Agencies</span></div>
              <div className="why-stat"><strong>24/7</strong><span>Support Available</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section">
        <div className="container">
          <div className="fade">
            <div className="overline">Our Process</div>
            <h2>Simple. Transparent.<br />Effective.</h2>
          </div>
          <div className="process-grid fade d1">
            {[
              { n: "01", title: "Discovery Call", desc: "We learn your goals, vision, and requirements in a free, no-pressure consultation." },
              { n: "02", title: "Proposal & Quote", desc: "Clear scope, honest timeline, and fixed pricing -no surprises down the line." },
              { n: "03", title: "Design & Build", desc: "We design, develop, and keep you updated at every milestone with full transparency." },
              { n: "04", title: "Launch & Support", desc: "We deploy and stick around -providing ongoing maintenance and improvements." },
            ].map(step => (
              <div className="process-step" key={step.n}>
                <div className="step-n">{step.n}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="process-section">
        <div className="container">
          <div className="fade">

            <div className="overline">Technologies</div>
            <h2>Modern stack.<br />Proven tools.</h2>
          </div>
          <div className="stack-grid fade d1">
            {stackItems.map(s => (
              <div className="stack-item" key={s.name}>
                <div className="stack-dot" style={{ background: s.color }}></div>
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAROUSEL */}
      <Carousel />

      <CTABand
        heading="Ready for your"
        emText="next steps?"
        buttons={[
          { label: "Let's Start →", className: "btn btn-white", href: "#", onClick: () => show("contact") },
          { label: "💬 WhatsApp Us", className: "btn btn-ghost-white btn-wa", href: "https://wa.me/8879679671", target: "_blank", rel: "noreferrer" },
        ]}
      />
    </div>
  );
}
