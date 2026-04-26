import React, { useState } from "react";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { FaGithubSquare, FaPhone, FaInstagram } from "react-icons/fa";

import toast from "react-hot-toast";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    const mailto = `mailto:rahulgwl72@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
    window.open(mailto, "_blank");
    toast.success("Opening your email client...");
    setForm({ name: "", email: "", message: "" });
  };

  const contactItems = [
    { icon: <CiMail size={22} />, label: "Email", value: "rahulgwl72@gmail.com", href: "mailto:rahulgwl72@gmail.com" },
    { icon: <FaPhone size={18} />, label: "Phone", value: "+91 8962113963", href: "tel:+918962113963" },
    { icon: <CiLinkedin size={22} />, label: "LinkedIn", value: "rahulpal-gwl896", href: "https://www.linkedin.com/in/rahulpal-gwl896/" },
    { icon: <FaGithubSquare size={20} />, label: "GitHub", value: "rahul72pal", href: "https://github.com/rahul72pal" },
    { icon: <FaInstagram size={20} />, label: "Instagram", value: "@rahulgwl72", href: "https://www.instagram.com/rahulgwl72/" },
  ];

  return (
    <section className="section" id="contact">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 5%" }}>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's build something amazing together</p>

        <div className="contact-grid">
          <div className="contact-info" data-aos="fade-right" data-aos-duration="800">
            <h3>Let's Connect 🤝</h3>
            <p>
              I'm currently open to full-time roles, freelance projects, and exciting collaborations. Whether you have a product idea or just want to chat tech — I'm all ears.
            </p>

            {contactItems.map((c, i) => (
              <a key={i} href={c.href} target="_blank" rel="noreferrer" className="contact-item" style={{ display: "flex" }}>
                <span className="contact-item-icon">{c.icon}</span>
                <div className="contact-item-text">
                  <div className="contact-item-label">{c.label}</div>
                  <div>{c.value}</div>
                </div>
              </a>
            ))}

            <div className="social-row">
              <a href="https://www.linkedin.com/in/rahulpal-gwl896/" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
                <CiLinkedin />
              </a>
              <a href="https://github.com/rahul72pal" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
                <FaGithubSquare />
              </a>
              <a href="https://www.instagram.com/rahulgwl72/" target="_blank" rel="noreferrer" className="social-btn" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="mailto:rahulgwl72@gmail.com" className="social-btn" aria-label="Email">
                <CiMail />
              </a>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="800">
            <form className="contact-form glass-card" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input id="name" name="name" className="form-control" placeholder="Rahul Pal" value={form.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" className="form-control" placeholder="you@example.com" value={form.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} className="form-control" placeholder="Tell me about your project..." value={form.message} onChange={handleChange} />
              </div>
              <button type="submit" className="btn-primary-grad" style={{ width: "100%", justifyContent: "center" }}>
                Send Message ✉
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
