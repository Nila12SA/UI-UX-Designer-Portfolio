import { Eye, Flower2, Palette, ShoppingBag } from "lucide-react";
import Header from "../components/Header.jsx";
import PortfolioButton from "../components/Buttons.jsx";

const bloomcraftNavLinks = [
  { id: "bloomcraft-overview", label: "Overview" },
  { id: "bloomcraft-features", label: "Features" },
  { id: "bloomcraft-process", label: "Process" },
  
];

const overviewItems = [
  {
    number: "01",
    title: "Project Overview",
    description:
      "BloomCraft is a custom bouquet builder website designed to help users create personalized flower arrangements online. The experience supports choosing flowers, colors, wrapping styles, and bouquet sizes based on personal preferences.",
  },
  {
    number: "02",
    title: "Project Goal",
    description:
      "The goal was to design a personalized floral shopping experience that helps users confidently build and preview custom bouquets before placing an order.",
  },
  {
    number: "03",
    title: "Category",
    description: "UI/UX Design Project using Figma",
  },
  {
    number: "04",
    title: "Tools Used",
    description: "Figma",
  },
];

const features = [
  {
    icon: Flower2,
    title: "Interactive flower selection",
    description:
      "Users can choose flowers visually and build a bouquet step by step.",
  },
  {
    icon: Eye,
    title: "Real-time bouquet preview",
    description:
      "The preview increases confidence before checkout and makes customization feel clear.",
  },
  {
    icon: Palette,
    title: "Clean floral e-commerce dashboard",
    description:
      "A soft, organized layout supports product browsing and decision making.",
  },
  {
    icon: ShoppingBag,
    title: "User-friendly checkout flow",
    description:
      "The flow keeps ordering clear, direct, and easy to complete.",
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

const projectDetails = [
  "Designed an interactive bouquet customization platform in Figma that allows users to create personalized flower arrangements.",
  "Created user-friendly interfaces enabling customers to select flowers, colors, bouquet sizes, and wrapping styles based on their preferences.",
  "Developed high-fidelity UI screens and interactive prototypes with a real-time bouquet preview experience.",
  "Focused on intuitive navigation, modern visual aesthetics, and user-centered design principles to improve the overall shopping experience.",
];

function BloomcraftKicker({ children }) {
  return (
    <p className="bloomcraft-kicker">
      <span>{children}</span>
    </p>
  );
}


function BloomcraftCaseStudy() {
  return (
    <>
      <Header
        actionHref="#bloomcraft-preview"
        actionLabel="View Figma Design"
        activeId="bloomcraft-overview"
        links={bloomcraftNavLinks}
      />
      <main className="bloomcraft-case-study">
        <section className="bloomcraft-hero" id="bloomcraft-overview">
          <BloomcraftKicker>UI/UX Design Project using Figma</BloomcraftKicker>
          <h1>BloomCraft - Custom Bouquet Builder</h1>
          <div className="bloomcraft-actions">
            <PortfolioButton href="https://www.figma.com/design/9uLfnGJK2K9PzeoF0o3YL5/Bloom-Craft--Nilani-?node-id=139-70&t=VvrlNW14gDNxYFbg-1">View Figma Design</PortfolioButton>
            <PortfolioButton href={`${import.meta.env.BASE_URL}#projects`} variant="secondary">
              Back to Portfolio
            </PortfolioButton>
          </div>

          <div className="bloomcraft-overview-grid" aria-label="BloomCraft project overview">
            {overviewItems.map((item) => (
              <article className="bloomcraft-info-card" key={item.title}>
                <span className="bloomcraft-number">{item.number}</span>
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

        <section className="bloomcraft-section" id="bloomcraft-features">
          <BloomcraftKicker>Key Features</BloomcraftKicker>
          <h2 className="bloomcraft-section-title">Designed for confident customization</h2>
          <div className="bloomcraft-feature-grid">
            {features.map(({ icon: Icon, title, description }) => (
              <article className="bloomcraft-feature-card" key={title}>
                <span className="bloomcraft-feature-icon">
                  <Icon size={32} strokeWidth={1.55} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bloomcraft-section bloomcraft-process-section" id="bloomcraft-process">
          <BloomcraftKicker>Design Process</BloomcraftKicker>
          <h2 className="bloomcraft-section-title">From research to interactive prototype</h2>
          <div className="bloomcraft-process-line" aria-label="BloomCraft design process steps">
            {processSteps.map((step, index) => (
              <article className="bloomcraft-process-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="bloomcraft-details">
          <BloomcraftKicker>Full Project Details</BloomcraftKicker>
          <h2>What I designed</h2>
          <ul>
            {projectDetails.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </section>

        <p id="contact" className="bloomcraft-page-footer">
          &copy; 2026 Nilani Subramaniyam. All rights reserved.
        </p>
      </main>
    </>
  );
}

export default BloomcraftCaseStudy;









