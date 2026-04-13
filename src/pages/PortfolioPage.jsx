import { useEffect, useRef } from "react";
import CTABand from "../components/CTABand";

const portfolioData = [
  {
    title: "Laundry — Laundry Order Management",
    category: "Flutter · Node.js · Full-Stack",
    desc: "A complete laundry management system with real-time tracking.",
    tags: ["Flutter", "Node.js", "MongoDB", "Firebase"],
    type: "Mobile App",
    emoji: "🧺",
    thumbClass: "pt-1",
  },
  {
    title: "StaySyne — Building Security Management",
    category: "React · Node.js",
    desc: "A smart building security management system with QR-based attendance, visitor tracking, and real-time notifications.",
    tags: ["React", "Node.js"],
    type: "Android App",
    emoji: "📱",
    thumbClass: "pt-2",
  },
];

export default function PortfolioPage({ show }) {
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
      <div className="port-hero">
        <div className="port-hero-inner container">
          <div className="overline fade">Our Work</div>
          <h1 className="fade d1">Projects we're<br /><em>proud of.</em></h1>
          <p className="fade d2">From mobile apps to full-stack platforms -a selection of work we've shipped for our clients.</p>
        </div>
      </div>

      <section>
        <div className="port-grid" id="portfolioContainer">
          {portfolioData.map((item, i) => (
            <div className="port-card" key={i}>
              <div className={`port-thumb ${item.thumbClass}`}>
                <div className="port-thumb-label">{item.type}</div>
                {item.emoji}
              </div>
              <div className="port-body">
                <div className="cat">{item.category}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="port-tags">
                  {item.tags.map(tag => <span className="port-tag" key={tag}>{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABand
        heading="Your project could be"
        emText="next on this list."
        buttons={[
          { label: "Start Your Project →", className: "btn btn-white", href: "#", onClick: () => show("contact") },
        ]}
      />
    </div>
  );
}
