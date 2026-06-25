import { useEffect, useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import PortfolioButton from "./Buttons.jsx";

const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Header({ actionHref, actionLabel = "View My Work", links = navLinks }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = `${import.meta.env.BASE_URL}#${id}`;
    }

    setIsOpen(false);
  };

  return (
    <header className={`luxury-header ${isScrolled ? "is-scrolled" : ""}`}>
      <nav className="luxury-nav" aria-label="Main navigation">
        <button className="luxury-logo" onClick={() => scrollToSection("home")} type="button">
          <span>Nilani</span>
          <Leaf size={30} aria-hidden="true" />
          <small>UI/UX Designer</small>
        </button>

        <div className={`luxury-links ${isOpen ? "is-open" : ""}`}>
          {links.map((link) => (
            <button key={link.id} onClick={() => scrollToSection(link.id)} type="button">
              {link.label}
            </button>
          ))}
        </div>

        <div className="luxury-actions">
          <PortfolioButton href={actionHref} onClick={actionHref ? undefined : () => scrollToSection("projects")}>{actionLabel}</PortfolioButton>
          <button
            className="luxury-menu"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            type="button"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      <div className="luxury-header-divider" aria-hidden="true" />
    </header>
  );
}

export default Header;




