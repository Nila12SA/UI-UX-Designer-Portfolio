import { Accessibility, CarFront, Leaf, UserRound } from "lucide-react";
import Header from "./Header.jsx";
import PortfolioButton from "./Buttons.jsx";

const tripzyNavLinks = [
  { id: "tripzy-overview", label: "Overview" },
  { id: "tripzy-features", label: "Features" },
  { id: "tripzy-process", label: "Process" },
  { id: "tripzy-preview", label: "Preview" },
  { id: "contact", label: "Contact" },
];

const overviewItems = [
  {
    number: "01",
    title: "Project Overview",
    description:
      "Tripzy is a smart ride-booking mobile application designed with accessibility and inclusive user experience in mind. The design includes ride booking, driver onboarding, document verification, eco-friendly ride options, and user profile management.",
  },
  {
    number: "02",
    title: "Project Goal",
    description:
      "The goal of Tripzy was to design a modern and accessible ride-booking application that provides a smooth transportation experience for both drivers and passengers while supporting inclusive and eco-friendly travel solutions.",
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
    icon: CarFront,
    title: "Smart ride booking",
    description:
      "Users can search locations, compare ride options, and book a trip with a clear mobile flow.",
  },
  {
    icon: UserRound,
    title: "Driver onboarding",
    description:
      "Drivers can register, add vehicle details, and complete profile setup step by step.",
  },
  {
    icon: Accessibility,
    title: "Accessible rides for disabled users",
    description:
      "Users can choose supportive transport options designed for safer and more comfortable mobility.",
  },
  {
    icon: Leaf,
    title: "Eco-friendly vehicles",
    description:
      "Green vehicle choices help users make better travel decisions with lower environmental impact.",
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
  "Designed splash screens, loading screens, onboarding flows, account setup, and welcome screens for new users.",
  "Created a driver registration experience with vehicle registration, driving license, revenue license, and vehicle insurance upload flows.",
  "Designed the ride-booking home screen, location search, ride selection UI, eco-friendly ride options, and accessibility-focused transportation options.",
  "Built user profile screens, bottom navigation layouts, settings, messages, and account management pages with consistent mobile UI components.",
  "Focused on clean visual hierarchy, readable layouts, inclusive patterns, and user-centered interactions throughout the app.",
];

function TripzyKicker({ children }) {
  return (
    <p className="tripzy-kicker">
      <span>{children}</span>
    </p>
  );
}

function TripzyCaseStudy() {
  return (
    <>
      <Header actionHref="#tripzy-preview" actionLabel="View Figma Design" links={tripzyNavLinks} />
      <main className="tripzy-case-study">
        <section className="tripzy-hero" id="tripzy-overview">
          <TripzyKicker>UI/UX Design Project using Figma</TripzyKicker>
          <h1>Tripzy - Smart Ride Booking Mobile App</h1>
          <div className="tripzy-actions">
            <PortfolioButton href="#tripzy-preview">View Figma Design</PortfolioButton>
            <PortfolioButton href="#projects" variant="secondary">
              Back to Portfolio
            </PortfolioButton>
          </div>

          <div className="tripzy-overview-grid" aria-label="Tripzy project overview">
            {overviewItems.map((item) => (
              <article className="tripzy-info-card" key={item.title}>
                <span className="tripzy-number">{item.number}</span>
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
        <section className="tripzy-section" id="tripzy-features">
          <TripzyKicker>Key Features</TripzyKicker>
          <h2 className="tripzy-section-title">Designed for smooth ride booking</h2>
          <div className="tripzy-feature-grid">
            {features.map(({ icon: Icon, title, description }) => (
              <article className="tripzy-feature-card" key={title}>
                <span className="tripzy-feature-icon">
                  <Icon size={34} strokeWidth={1.55} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="tripzy-section" id="tripzy-process">
          <TripzyKicker>Design Process</TripzyKicker>
          <h2 className="tripzy-section-title">From research to interactive prototype</h2>
          <div className="tripzy-process-line" aria-label="Tripzy design process steps">
            {processSteps.map((step, index) => (
              <article className="tripzy-process-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="tripzy-details">
          <TripzyKicker>Full Project Details</TripzyKicker>
          <ul>
            {projectDetails.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </section>

        <section className="tripzy-preview" id="tripzy-preview">
          <TripzyKicker>Figma Design</TripzyKicker>
          <h2>Design preview area</h2>
          <p>Key Tripzy mobile app screens from the driver registration and document verification flow.</p>
        </section>

        <p id="contact" className="tripzy-page-footer">
          &copy; 2026 Nilani Subramaniyam. All rights reserved.
        </p>
      </main>
    </>
  );
}

export default TripzyCaseStudy;

