import { useEffect, useRef, useState } from "react";

const contactDetails = [
  { icon: "💬", label: "WhatsApp (Preferred)", value: "+91 8879679671" },
  { icon: "📧", label: "Email", value: "jsiddhesh40@gmail.com" },
  { icon: "📍", label: "Based In", value: "Mumbai, Maharashtra, India" },
  { icon: "⏰", label: "Response Time", value: "Within 24 hours" },
];

export default function ContactPage() {
  const pageRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", msg: "" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.05 }
    );
    pageRef.current?.querySelectorAll(".fade").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.msg) {
      alert("Please fill in your name, email, and project description.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div ref={pageRef}>
      <div className="contact-hero">
        <div className="contact-hero-inner container">
          <div className="overline fade">Get In Touch</div>
          <h1 className="fade d1">Let's build something<br /><em>amazing together.</em></h1>
          <p className="fade d2">Tell us about your project and we'll get back within 24 hours with a free consultation — no commitment, no pressure.</p>
        </div>
      </div>

      <div className="contact-body">
        <div className="contact-inner">
          <div className="contact-left fade">
            <div className="overline">Contact Info</div>
            <h2>Talk to a real developer.</h2>
            <p>No bots, no waiting. You'll speak directly with Siddhesh or Shubhangi about your project from day one.</p>
            <div>
              {contactDetails.map(cd => (
                <div className="cd-item" key={cd.label}>
                  <div className="cd-icon">{cd.icon}</div>
                  <div>
                    <div className="cd-label">{cd.label}</div>
                    <div className="cd-value">{cd.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "32px" }}>
              <a className="btn btn-wa" href="https://wa.me/8879679671" target="_blank" rel="noreferrer" style={{ width: "100%", justifyContent: "center", borderRadius: "2px" }}>
                💬 Message on WhatsApp
              </a>
            </div>
          </div>

          <div className="contact-form-wrap fade d1">
            {!submitted ? (
              <div id="form-inner">
                <h3>Get a Free Quote</h3>
                <p className="sub">Fill in your details and we'll respond within 24 hours.</p>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input type="text" placeholder="Rahul Sharma" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label>Phone / WhatsApp</label>
                    <input type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" placeholder="rahul@yourbusiness.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
                <div className="form-group">
                  <label>Service Required</label>
                  <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                    <option value="">Select a service...</option>
                    <option>Web Development</option>
                    <option>Mobile App (Flutter)</option>
                    <option>Custom Software / API</option>
                    <option>Admin Dashboard / CRM</option>
                    <option>Not Sure -Need Advice</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Tell Us About Your Project *</label>
                  <textarea placeholder="Describe your project, goals, timeline, and budget (if known)..." value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })}></textarea>
                </div>
                <button className="btn btn-dark" style={{ width: "100%", justifyContent: "center", padding: "15px", borderRadius: "2px" }} onClick={handleSubmit}>
                  Send Message -It's Free →
                </button>
              </div>
            ) : (
              <div className="form-success" style={{ display: "block" }}>
                <div className="check">🎉</div>
                <h3>Message Sent!</h3>
                <p>We've received your message and will get back to you within 24 hours. Check your WhatsApp too!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
