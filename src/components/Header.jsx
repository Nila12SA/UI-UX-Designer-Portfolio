import { useEffect, useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import PortfolioButton from "./Buttons.jsx";

const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const portfolioSectionIds = new Set(["home", "about", "skills", "projects", "contact"]);

function Header({ actionHref, actionLabel = "View My Work", links = navLinks, activeId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentActiveId, setCurrentActiveId] = useState(activeId ?? "");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setCurrentActiveId(activeId ?? "");
  }, [activeId]);

  useEffect(() => {
    const updateActiveLink = () => {
      const sectionLinks = links
        .map((link) => ({ link, section: document.getElementById(link.id) }))
        .filter(({ section }) => section);

      if (!sectionLinks.length) return;

      const scrollMarker = window.scrollY + 160;
      const activeLink = [...sectionLinks]
        .reverse()
        .find(({ section }) => section.offsetTop <= scrollMarker)?.link;

      setCurrentActiveId(activeLink?.id ?? activeId ?? "");
    };

    updateActiveLink();
    window.addEventListener("scroll", updateActiveLink, { passive: true });
    window.addEventListener("resize", updateActiveLink);

    return () => {
      window.removeEventListener("scroll", updateActiveLink);
      window.removeEventListener("resize", updateActiveLink);
    };
  }, [activeId, links]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      setCurrentActiveId(id);
      section.scrollIntoView({ behavior: "smooth", block: "start" });

      if (portfolioSectionIds.has(id)) {
        window.history.pushState(null, "", `${import.meta.env.BASE_URL}#${id}`);
      }
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
            <button
              aria-current={currentActiveId === link.id ? "page" : undefined}
              className={currentActiveId === link.id ? "is-active" : undefined}
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              type="button"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="luxury-actions">
          <PortfolioButton href={actionHref} onClick={actionHref ? undefined : () => scrollToSection("projects")}>
            {actionLabel}
          </PortfolioButton>
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
