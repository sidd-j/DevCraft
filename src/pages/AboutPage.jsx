import { useEffect, useRef } from "react";
import CTABand from "../components/CTABand";

const founders = [
  {
    initials: "SJ",
    name: "Siddhesh Jadhav",
    role: "Co-Founder & Backend Developer",
    desc: "Siddhesh is a full-stack developer with deep expertise in scalable backend systems and robust web applications. He brings a strong engineering mindset -ensuring every system is fast, reliable, and built to grow with your business.",
    skills: ["Node.js", "React", "MongoDB", "PostgreSQL", "Unity", "REST APIs", "System Architecture"],
  },
  {
    initials: "SC",
    name: "Shubhangi Chavan",
    role: "Co-Founder & Mobile Developer",
    desc: "Shubhangi is a Flutter specialist with a track record of delivering production-ready mobile apps. She combines technical excellence with a sharp eye for UX -creating apps people genuinely enjoy using day to day.",
    skills: ["Flutter", "Dart", "Firebase", "Android", "iOS", "UI/UX Design", "App Architecture"],
  },
];

const values = [
  { icon: "💎", title: "Quality First", desc: "We never cut corners. Every line of code is written with care, performance, and long-term maintainability in mind." },
  { icon: "⚡", title: "Fast Delivery", desc: "Speed without sacrificing quality. We use proven workflows to ship on time, every time -no excuses." },
  { icon: "💰", title: "Fair Pricing", desc: "Premium quality at prices that work for growing businesses. Transparent quotes, no hidden costs." },
  { icon: "🤝", title: "True Partnership", desc: "We treat your project like our own. Your success is our success -and we mean that." },
];

export default function AboutPage({ show }) {
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
      <div className="about-hero">
        <div className="about-hero-inner container">
          <div className="overline fade">Our Story</div>
          <h1 className="fade d1">Built by developers,<br /><em>for your business.</em></h1>
          <p className="lead fade d2">DevCraft Studio was founded with one mission: make high-quality software accessible and affordable for every business -not just the ones with agency budgets.</p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }} className="fade d3">
            <a className="btn btn-dark" href="#" onClick={() => show("contact")}>Work With Us →</a>
            <a className="btn btn-outline" href="#" onClick={() => show("portfolio")}>See Our Work</a>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="overline fade">The Founders</div>
          <div className="about-split fade d1">
            {founders.map(f => (
              <div className="founder-block" key={f.initials}>
                <div className="founder-initial">{f.initials}</div>
                <h3>{f.name}</h3>
                <div className="role">{f.role}</div>
                <p>{f.desc}</p>
                <div className="skill-row">
                  {f.skills.map(s => <span className="skill-chip" key={s}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div className="overline fade" style={{ marginTop: 0 }}>Our Values</div>
          <div className="process-grid fade d1" style={{ marginTop: "24px" }}>
            {values.map(v => (
              <div className="process-step" key={v.title}>
                <div className="step-n">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        heading="Let's build something"
        emText="great together."
        buttons={[
          { label: "Get a Free Quote →", className: "btn btn-white", href: "#", onClick: () => show("contact") },
          { label: "💬 WhatsApp", className: "btn btn-ghost-white", href: "https://wa.me/8879679671", target: "_blank", rel: "noreferrer" },
        ]}
      />
    </div>
  );
}
