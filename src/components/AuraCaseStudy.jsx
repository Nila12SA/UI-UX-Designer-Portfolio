import { BarChart3, Flower2, Leaf, Moon } from "lucide-react";
import Header from "./Header.jsx";
import PortfolioButton from "./Buttons.jsx";

const caseNavLinks = [
  { id: "aura-overview", label: "Overview" },
  { id: "aura-features", label: "Features" },
  { id: "aura-process", label: "Process" },
  { id: "contact", label: "Contact" },
];

const overviewItems = [
  {
    number: "01",
    title: "Project Overview",
    description:
      "Aura is an iOS-inspired wellness app for meditation, breathing exercises, mood tracking, sleep support, relaxation music, and daily mental wellness insights.",
  },
  {
    number: "02",
    title: "Project Goal",
    description:
      "Create a calming mobile experience that feels emotionally safe, simple to use, visually premium, and useful for repeated daily self-care moments.",
  },
  {
    number: "03",
    title: "Audience",
    description:
      "Students, professionals, and wellness-focused users who need fast stress relief, sleep support, and a gentle way to understand their mood patterns.",
  },
  {
    number: "04",
    title: "Tools Used",
    description: "Figma",
  },
];

const features = [
  {
    icon: BarChart3,
    title: "Mood tracking dashboard",
    description:
      "Users can record emotional states and understand daily mood patterns in a simple visual way.",
  },
  {
    icon: Flower2,
    title: "Breathing and meditation exercises",
    description:
      "Guided calming sessions help users reduce stress and reset during busy moments.",
  },
  {
    icon: Moon,
    title: "Sleep and stress analytics",
    description:
      "Insight screens show wellness trends, sleep quality, and stress indicators over time.",
  },
  {
    icon: Leaf,
    title: "Personalized recommendations",
    description:
      "The app suggests music, breathing sessions, and wellness routines based on user needs.",
  },
];

const processSteps = [
  "Research",
  "User Flow",
  "Wireframes",
  "High-fidelity UI Design",
  "Prototype",
  "Final Design",
];

const designDetails = [
  "Designed a wellness-focused mobile application in Figma to help users manage stress, relaxation, breathing, and daily emotional balance.",
  "Created user-friendly interfaces for onboarding, meditation, breathing exercises, mood tracking, sleep support, and relaxation music.",
  "Developed high-fidelity UI screens and interactive prototype ideas with a calm, accessible, and emotionally supportive mobile experience.",
  "Focused on simple navigation, soft visual hierarchy, consistent components, and user-centered design principles for mental wellness users.",
];

function AuraKicker({ children }) {
  return (
    <p className="aura-kicker">
      <span>{children}</span>
    </p>
  );
}

function AuraCaseStudy() {
  return (
    <>
      <Header links={caseNavLinks} />
      <main className="case-study aura-case-study">
        <section className="aura-hero" id="aura-overview">
          <AuraKicker>Wellness App Case Study</AuraKicker>
          <h1>Aura - Stress Relief & Wellness</h1>
          <div className="aura-actions">
            <PortfolioButton href="#aura-project-details">View Figma Design</PortfolioButton>
            <PortfolioButton href="#projects" variant="secondary">
              Back to Portfolio
            </PortfolioButton>
          </div>

          <div className="aura-overview-grid" aria-label="Aura project overview">
            {overviewItems.map((item) => (
              <article className="aura-info-card" key={item.title}>
                <span className="aura-number">{item.number}</span>
                <div>
                  <h2>{item.title}</h2>
                  {item.title === "Tools Used" ? (
                    <ul>
                      <li>{item.description}</li>
                    </ul>
                  ) : (
                    <p>{item.description}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="aura-section" id="aura-features">
          <AuraKicker>Key Features</AuraKicker>
          <h2 className="aura-section-title">Designed for calm daily wellness</h2>
          <div className="aura-feature-grid">
            {features.map(({ icon: Icon, title, description }) => (
              <article className="aura-feature-card" key={title}>
                <span className="aura-feature-icon">
                  <Icon size={34} strokeWidth={1.55} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="aura-section" id="aura-process">
          <AuraKicker>Design Process</AuraKicker>
          <h2 className="aura-section-title">From research to interactive prototype</h2>
          <div className="aura-process-line" aria-label="Aura design process steps">
            {processSteps.map((step, index) => (
              <article className="aura-process-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="aura-details" id="aura-project-details">
          <AuraKicker>Full Project Details</AuraKicker>
          <h2>What I designed</h2>
          <ul>
            {designDetails.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </section>

        <p id="contact" className="aura-page-footer">
          &copy; 2026 Nilani Subramaniyam. All rights reserved.
        </p>
      </main>
    </>
  );
}

export default AuraCaseStudy;


