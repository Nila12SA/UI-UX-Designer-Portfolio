import { ArrowRight, Check, Compass, HeartPulse, Leaf, MoonStar, Sparkles, Users } from "lucide-react";
import Header from "../components/Header.jsx";
import PortfolioButton from "../components/Buttons.jsx";
import bluetoothScreen from "../assets/Bluetooth connect1.png";
import fingerScanScreen from "../assets/Finger scan2.png";
import insightsScreen from "../assets/Insights & Recommendations.png";
import auraLoginScreen from "../assets/Login1.png";

const auraNavLinks = [
  { id: "aura-overview", label: "Overview" },
  { id: "aura-concept", label: "Concept" },
  { id: "aura-research", label: "Research" },
  { id: "aura-ux", label: "UX" },
  { id: "aura-ui", label: "UI" },
];

const conceptSteps = [
  "Health data",
  "Condition insight",
  "Exercise suggestion",
  "User action",
];

const designDecisions = [
  "I simplified health information into a calmer interface so the experience felt understandable rather than overwhelming.",
  "The app presents condition insights in a way that supports clarity, while keeping the focus on personalized recommendations.",
  "Exercise suggestions were surfaced as helpful next steps rather than medical claims or outcomes that were not validated.",
  "The interface uses soft visual hierarchy, calm color treatment, and clear interaction states to support an easy user experience.",
];

const learningPoints = [
  "I learned how important it is to understand unfamiliar technology before trying to design around it.",
  "Translating technical concepts into user-friendly UX requires simplification and careful communication.",
  "Designing for personalization means creating trust through clarity, not complexity.",
  "This project reinforced that a thoughtful UX should help people act with confidence, even when the concept is exploratory.",
];

function AuraCaseStudy() {
  return (
    <>
      <Header
        actionHref={`${import.meta.env.BASE_URL}#projects`}
        actionLabel="Back to Portfolio"
        activeId="aura-overview"
        links={auraNavLinks}
      />
      <main className="case-study-shell aura-shell">
        <section className="case-study-hero" id="aura-overview">
          <div className="case-study-copy">
            <p className="case-study-kicker">Aura</p>
            <h1>Health-focused wellness concept exploring personalized exercise guidance.</h1>
            <p className="case-study-lead">
              Aura is a concept app focused on health and wellness. It explores how health-related measurements could be
              translated into personalized exercise suggestions, while keeping the experience calm, easy to understand,
              and user-centered.
            </p>

            <div className="case-study-project-meta">
              <div>
                <span>Role</span>
                <strong>UI/UX Designer</strong>
              </div>
              <div>
                <span>Tools</span>
                <strong>Figma, research notes</strong>
              </div>
              <div>
                <span>Project type</span>
                <strong>Mobile app concept</strong>
              </div>
            </div>
          </div>

          <div className="case-study-visual aura-visual" aria-label="Aura app mockup">
            <div className="phone-frame">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="screen-header-row">
                  <span>Good morning</span>
                  <MoonStar size={16} />
                </div>
                <div className="screen-stat-card">
                  <div className="stat-circle" />
                  <div>
                    <small>Heart & recovery</small>
                    <strong>Balanced</strong>
                  </div>
                </div>
                <div className="mini-chart" />
                <div className="suggestion-card">
                  <HeartPulse size={18} />
                  <div>
                    <small>Recommended</small>
                    <strong>Breathing reset</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="case-study-section" id="aura-concept">
          <div className="section-heading">
            <span className="section-number">01</span>
            <h2>Project overview</h2>
          </div>

          <div className="case-study-two-col">
            <div className="case-study-copy-block">
              <p>
                Aura is a design exploration that looks at how health-related measurements such as blood pressure and
                heartbeat might be used to guide simple exercise recommendations. The project is not positioned as a
                medical system or diagnosis tool; instead, it focuses on how a user-centered interface could translate
                measurements into understandable wellness guidance.
              </p>
            </div>

            <div className="info-panel">
              <h3>What I was exploring</h3>
              <p>
                I wanted to understand how an app could turn health data into a clear, helpful next step for the user,
                while still feeling calm and approachable.
              </p>
            </div>
          </div>
        </section>

        <section className="case-study-section" id="aura-research">
          <div className="section-heading">
            <span className="section-number">02</span>
            <h2>Technology exploration</h2>
          </div>

          <div className="case-study-copy-block wide-copy">
            <p>
              I was not familiar with AR/VR technologies at the beginning of this project, so I used AI-assisted tools
              and online resources to learn the basic concepts and possibilities. This was secondary research and
              exploration, not formal academic or medical research.
            </p>
            <p>
              The goal was to understand the technology well enough to think carefully about how it could support the
              product concept and the user experience.
            </p>
          </div>

          <div className="comparison-grid">
            <article className="comparison-card">
              <h3>Challenge</h3>
              <p>I was learning an unfamiliar technology while also trying to design a meaningful user experience.</p>
            </article>
            <article className="comparison-card emphasis">
              <h3>Approach</h3>
              <p>I focused on understanding the core idea, simplifying the concept, and turning the technology into a clearer UX story.</p>
            </article>
          </div>
        </section>

        <section className="case-study-section" id="aura-ux">
          <div className="section-heading">
            <span className="section-number">03</span>
            <h2>Concept</h2>
          </div>

          <div className="flow-grid">
            {conceptSteps.map((step, index) => (
              <div className="flow-step" key={step}>
                <span className="flow-index">0{index + 1}</span>
                <p>{step}</p>
                {index < conceptSteps.length - 1 && <ArrowRight className="flow-arrow" size={18} />}
              </div>
            ))}
          </div>

          <div className="case-study-copy-block wide-copy">
            <p>
              The intended experience begins with health-related measurements, moves into a condition insight, and then
              recommends an exercise or action that may support the user in that moment. I wanted the flow to feel
              helpful without becoming overly technical or difficult to interpret.
            </p>
          </div>
        </section>

        <section className="case-study-section" id="aura-experience">
          <div className="section-heading">
            <span className="section-number">04</span>
            <h2>User experience</h2>
          </div>

          <div className="user-flow-grid">
            <div className="user-flow-card">
              <span>01</span>
              <h3>Open the app</h3>
              <p>The user starts with a clear wellness dashboard and daily status overview.</p>
            </div>
            <div className="user-flow-card">
              <span>02</span>
              <h3>Check measurements</h3>
              <p>Key health indicators are displayed in a simplified and readable format.</p>
            </div>
            <div className="user-flow-card">
              <span>03</span>
              <h3>Review insights</h3>
              <p>The app interprets the data and highlights what may be relevant to the user.</p>
            </div>
            <div className="user-flow-card">
              <span>04</span>
              <h3>Take action</h3>
              <p>Recommendations guide the user toward an exercise or wellness activity.</p>
            </div>
          </div>
        </section>

        <section className="case-study-section" id="aura-ui">
          <div className="section-heading">
            <span className="section-number">05</span>
            <h2>Final UI</h2>
          </div>

          <div className="final-ui-grid">
            {[
              [auraLoginScreen, "Login screen"],
              [bluetoothScreen, "Connect your device"],
              [fingerScanScreen, "Mind-Aura visualization"],
              [insightsScreen, "Insights and recommendations"],
            ].map(([image, caption]) => (
              <figure className="final-screen aura-screen-image" key={caption}>
                <img src={image} alt={`Aura ${caption}`} />
                <figcaption>{caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="case-study-section" id="aura-decisions">
          <div className="section-heading">
            <span className="section-number">06</span>
            <h2>Design decisions</h2>
          </div>

          <ul className="design-list">
            {designDecisions.map((item) => (
              <li key={item}>
                <Check size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="case-study-section" id="aura-challenges">
          <div className="section-heading">
            <span className="section-number">07</span>
            <h2>Challenges</h2>
          </div>

          <div className="case-study-copy-block wide-copy">
            <p>
              One of the key challenges was learning an unfamiliar technology and then translating it into a user-focused
              experience. I approached this by conducting secondary research, simplifying the technical concept, and
              focusing on how the product could feel helpful rather than overly complex.
            </p>
          </div>
        </section>

        <section className="case-study-section" id="aura-learnings">
          <div className="section-heading">
            <span className="section-number">08</span>
            <h2>Learnings</h2>
          </div>

          <ul className="design-list">
            {learningPoints.map((item) => (
              <li key={item}>
                <Compass size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="case-study-footer">
          <PortfolioButton href={`${import.meta.env.BASE_URL}#projects`} variant="secondary">
            Return to portfolio
          </PortfolioButton>
        </section>
      </main>
    </>
  );
}

export default AuraCaseStudy;
