import GoddessVisual from "./GoddessVisual.jsx";
import PortfolioButton from "./Buttons.jsx";
import Stats from "./Stats.jsx";
import cvFile from "../assets/UI-UX Designer.pdf";

function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="luxury-hero">
      <div className="luxury-hero-copy reveal">
        <p className="luxury-eyebrow">From Insight To Interface</p>
        <h1>
          <span>Shaping user problems</span>
          <span>into thoughtful digital</span>
          <span>experiences.</span>
        </h1>
        <div className="title-divider" aria-hidden="true" />
        <p className="luxury-intro">
          I create clean, accessible, and engaging digital experiences
          <br />
          through UX research, wireframing, prototyping, testing,
          <br />
          and refined visual design.
        </p>
        <div className="luxury-hero-actions">
          <PortfolioButton href={cvFile} target="_blank">
            Download Resume
          </PortfolioButton>
          <PortfolioButton onClick={() => scrollToSection("contact")} variant="secondary">
            Contact Me
          </PortfolioButton>
        </div>
        <Stats />
      </div>

      <GoddessVisual />
    </section>
  );
}

export default Hero;
