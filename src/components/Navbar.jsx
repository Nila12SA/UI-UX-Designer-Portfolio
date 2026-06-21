import { useEffect, useState } from "react";
import { Leaf, Menu, X } from "lucide-react";

const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const currentSection = navLinks.findLast(({ id }) => {
        const section = document.getElementById(id);
        if (!section) return false;
        return section.getBoundingClientRect().top <= 150;
      });

      if (currentSection) {
        setActiveLink(currentSection.id);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <nav className="nav-container" aria-label="Main navigation">
        <div className="logo">
          <span>Nilani</span>
          <Leaf size={22} aria-hidden="true" />
          <small>UI/UX Designer</small>
        </div>

        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`nav-link ${activeLink === link.id ? "active" : ""}`}
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </button>
          ))}
          <button className="nav-cta mobile-cta" onClick={() => scrollToSection("projects")}>
            View My Work
          </button>
        </div>

        <div className="nav-actions">
          <button className="nav-cta" onClick={() => scrollToSection("projects")}>
            View My Work
          </button>
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
