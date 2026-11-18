import { ArrowRight, Check, Compass } from "lucide-react";
import Header from "../components/Header.jsx";
import PortfolioButton from "../components/Buttons.jsx";

const auraAssetBase = `${import.meta.env.BASE_URL}aura/`;

const auraNavLinks = [
  { id: "aura-overview", label: "Overview" },
  { id: "aura-concept", label: "Concept" },
  { id: "aura-research", label: "Research" },
  { id: "aura-ux", label: "UX" },
  { id: "aura-ui", label: "UI" },
];

const conceptSteps = [
  "Connect a device",
  "Review a wellness signal",
  "See a personalized insight",
  "Choose a calming activity",
];

const auraScreenGroups = [
  {
    number: "01",
    title: "Sign in and connect a device",
    detail: "The login screen opens the experience. Device setup explains continuous monitoring, lists compatible wearables, and shows connection status.",
    screens: [["login.png", "Aura login screen"], ["connect-device.png", "Connect a wearable device"]],
  },
  {
    number: "02",
    title: "Turn signals into a useful next step",
    detail: "The Mind-Aura view surfaces a heart-rate reading and calm-mode action. The insights screen highlights a stress signal and offers breathing, meditation, nature sounds, and yoga activities.",
    screens: [["mind-aura.png", "Mind-Aura visualization with heart-rate reading"], ["insights-recommendations.png", "Stress insight and wellness recommendations"]],
  },
];

const designDecisions = [
  "A dedicated device-connection screen explains continuous monitoring and lists compatible devices before the user starts a search.",
  "A single BPM value and calm status make the Mind-Aura reading quick to scan in the visualization screen.",
  "The insights screen pairs a stress message with one prominent breathing exercise and keeps other activities available as alternatives.",
  "The concept presents wellness prompts and relaxation activities; the supplied screens do not claim diagnosis or treatment outcomes.",
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
        actionLabel="Back to Projects"
        activeId="aura-overview"
        links={auraNavLinks}
      />
      <main className="case-study-shell aura-shell">
        <section className="case-study-hero" id="aura-overview">
          <div className="case-study-copy">
            <p className="case-study-kicker">Mobile Wellness · UI/UX Design</p>
            <h1>Aura — Turning wellness signals into calmer next steps.</h1>
            <p className="case-study-lead">
              A wearable-connected wellness concept that pairs health signals with a Mind-Aura visualization and guided relaxation activities.
            </p>

            <div className="case-study-project-meta">
              <div>
                <span>Role</span>
                <strong>UI/UX Designer</strong>
              </div>
              <div>
                <span>Tools</span>
                  <strong>Figma</strong>
              </div>
              <div>
                <span>Project type</span>
                  <strong>Wellness mobile app concept</strong>
              </div>
            </div>
          </div>

          <div className="aura-real-screens" aria-label="Aura screens: login, wearable connection, wellness visualization, and recommendations">
            <figure className="aura-real-screen aura-real-screen-back"><img src={`${auraAssetBase}connect-device.png`} alt="" fetchPriority="high" /></figure>
            <figure className="aura-real-screen aura-real-screen-main"><img src={`${auraAssetBase}insights-recommendations.png`} alt="" fetchPriority="high" /></figure>
            <figure className="aura-real-screen aura-real-screen-front"><img src={`${auraAssetBase}mind-aura.png`} alt="" fetchPriority="high" /></figure>
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
                Aura is a wearable-connected wellness concept. The supplied screens show device setup, a heart-rate reading with a calm status, a stress insight, and a set of relaxation activities.
              </p>
            </div>

            <div className="info-panel">
              <h3>What I was exploring</h3>
              <p>
                The interface explores how connected-device signals could lead into approachable wellness guidance, while keeping the user's next choices clear.
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
              I explored how connected-device signals and an immersive visual direction might be presented in a wellness interface. This was concept exploration rather than formal medical research or evidence of a validated health product.
            </p>
            <p>
              The design frames those signals as prompts for reflection and relaxation activities. The screens do not establish clinical interpretation or treatment outcomes.
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
              The screens suggest a sequence from connecting a wearable, to viewing a heart-rate and calm-state visualization, to reviewing a stress insight and choosing a relaxation activity.
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
              <p>Recommendations offer a relaxation activity such as breathing, meditation, or nature sounds.</p>
            </div>
          </div>
        </section>

        <section className="case-study-section" id="aura-ui">
          <div className="section-heading">
            <span className="section-number">05</span>
            <h2>Device connection and wellness guidance</h2>
          </div>

          <div className="aura-screen-groups">
            {auraScreenGroups.map(({ number, title, detail, screens }) => (
              <article className="aura-screen-group" key={number}>
                <div className="aura-screen-copy"><span>{number}</span><h3>{title}</h3><p>{detail}</p></div>
                <div className="aura-screen-gallery">
                  {screens.map(([file, caption]) => <figure key={file}><img src={`${auraAssetBase}${file}`} alt={`Aura ${caption}`} loading="lazy" decoding="async" /><figcaption>{caption}</figcaption></figure>)}
                </div>
              </article>
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
          <PortfolioButton href={`${import.meta.env.BASE_URL}#/projects/bloomcraft`} variant="secondary">Next: BloomCraft</PortfolioButton>
          <PortfolioButton href={`${import.meta.env.BASE_URL}#projects`} variant="secondary">Back to Projects</PortfolioButton>
        </section>
      </main>
    </>
  );
}

export default AuraCaseStudy;
