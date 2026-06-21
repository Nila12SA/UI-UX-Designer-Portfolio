import { useState } from "react";
import { FaBehance, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "nilasubram12@gmail.com",
    href: "mailto:nilasubram12@gmail.com",
    icon: <Mail size={20} />,
  },
  {
    label: "LinkedIn",
    value: "nilani-subramaniyam",
    href: "https://www.linkedin.com/in/nilani-subramaniyam-509a222b9/",
    icon: <FaLinkedinIn />,
  },
  {
    label: "Behance",
    value: "nilasubram",
    href: "https://www.behance.net/nilanisubrama",
    icon: <FaBehance />,
  },
  {
    label: "GitHub",
    value: "Nila12SA",
    href: "https://github.com/Nila12SA",
    icon: <FaGithub />,
  },
];

const initialForm = {
  name: "",
  email: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "error", message: "Please complete all fields." });
      return;
    }

    if (!emailPattern.test(form.email)) {
      setStatus({ type: "error", message: "Please enter a valid email." });
      return;
    }

    setStatus({
      type: "success",
      message: "Thank you. Your message has been sent successfully.",
    });
    setForm(initialForm);
  };

  return (
    <section id="contact" className="contact section-contact">
      <div className="container reveal">
        <p className="section-label">CONTACT</p>
        <h2 className="section-title">
          Let's Create Thoughtful Digital Experiences
        </h2>
        <div className="contact-grid">
          <div className="contact-list">
            {contactLinks.map((item) => (
              <a className="contact-card card" href={item.href} key={item.label}>
                <span className="contact-icon">{item.icon}</span>
                <span>
                  <strong>{item.label}</strong>
                  <small>{item.value}</small>
                </span>
              </a>
            ))}
          </div>

          <form className="contact-form card" onSubmit={handleSubmit} noValidate>
            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                placeholder="Tell me about your project"
                value={form.message}
                onChange={handleChange}
              />
            </label>
            {status.message && (
              <p className={`form-status ${status.type}`}>{status.message}</p>
            )}
            <button className="btn btn-primary" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
