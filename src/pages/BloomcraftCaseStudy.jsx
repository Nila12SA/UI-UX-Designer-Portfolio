import { ArrowRight, Check, Compass, Flower2, Palette, ShoppingBag } from "lucide-react";
import Header from "../components/Header.jsx";
import PortfolioButton from "../components/Buttons.jsx";
import registerScreen from "../assets/Register.png";
import loginScreen from "../assets/Login.png";

const bloomcraftNavLinks = [
  { id: "bloomcraft-overview", label: "Overview" },
  { id: "bloomcraft-opportunity", label: "Opportunity" },
  { id: "bloomcraft-research", label: "Research" },
  { id: "bloomcraft-flow", label: "Flow" },
  { id: "bloomcraft-ui", label: "UI" },
];

const opportunitySteps = [
  "Browse",
  "Customize bouquet",
  "Personalize",
  "Purchase",
];

const designDecisions = [
  "Custom bouquet selection was introduced to give users more control than a typical pre-made bouquet flow.",
  "The product selection and preview were designed to help users compare options before committing to a purchase.",
  "The bouquet-building flow kept decision-making simple by separating the experience into clear stages.",
  "I used a calm, editorial layout to keep the interface feeling premium while maintaining clarity and ease of use.",
];

const learningPoints = [
  "Competitive analysis helped me spot a clear design opportunity in the floral shopping experience.",
  "I learned that customization works best when the journey stays simple and guided.",
  "Designing a flexible product flow requires balancing choice with clarity.",
  "The final product felt stronger when the interface supported both browsing and personalization without overwhelming the user.",
];

function BloomcraftCaseStudy() {
  return (
    <>
      <Header
        actionHref={`${import.meta.env.BASE_URL}#projects`}
        actionLabel="Back to Portfolio"
        activeId="bloomcraft-overview"
        links={bloomcraftNavLinks}
      />
      <main className="case-study-shell bloomcraft-shell">
        <section className="case-study-hero" id="bloomcraft-overview">
          <div className="case-study-copy">
            <p className="case-study-kicker">BloomCraft</p>
            <h1>Custom bouquet building for a more flexible flower-shopping experience.</h1>
            <p className="case-study-lead">
              BloomCraft is a flower bouquet website concept focused on giving users more flexibility when creating
              arrangements. The experience supports both pre-made bouquets and a custom bouquet builder so users can
              design something that matches their preferences more closely.
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
                <strong>Responsive web concept</strong>
              </div>
            </div>
          </div>

          <div className="case-study-visual bloomcraft-visual" aria-label="BloomCraft website mockup">
            <div className="mock-browser">
              <div className="browser-bar">
                <span />
                <span />
                <span />
              </div>

              <div className="browser-content">
                <aside className="mock-sidebar">
                  <div className="mock-pill active">Collections</div>
                  <div className="mock-pill">Bouquets</div>
                  <div className="mock-pill">Occasions</div>
                  <div className="mock-pill">Build your own</div>
                </aside>

                <div className="mock-main-panel">
                  <div className="mock-hero-card">
                    <span>Custom bouquet</span>
                    <strong>Build a floral arrangement that feels personal.</strong>
                  </div>

                  <div className="mock-product-row">
                    <div className="mock-product-item large" />
                    <div className="mock-product-item small" />
                    <div className="mock-product-item small alt" />
                  </div>

                  <div className="mock-cta-row">
                    <div className="mock-cta-block" />
                    <div className="mock-cta-block muted" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="case-study-section" id="bloomcraft-opportunity">
          <div className="section-heading">
            <span className="section-number">01</span>
            <h2>Project overview</h2>
          </div>

          <div className="case-study-two-col">
            <div className="case-study-copy-block">
              <p>
                BloomCraft is a floral e-commerce concept created to explore how an online flower store could feel more
                personal and flexible. I wanted the experience to support both customers who prefer pre-made bouquets
                and customers who want to build something based on their own preferences.
              </p>
              <p>
                My role included exploring the browsing and purchasing experience, defining the customization flow, and
                designing screens that made the selection process feel clear and enjoyable.
              </p>
            </div>

            <div className="info-panel">
              <h3>Design goal</h3>
              <p>
                Create a bouquet-shopping experience that feels personal without becoming overwhelming. The goal was to
                make customization feel natural, guided, and easy to understand.
              </p>
            </div>
          </div>
        </section>

        <section className="case-study-section" id="bloomcraft-research">
          <div className="section-heading">
            <span className="section-number">02</span>
            <h2>Competitive analysis</h2>
          </div>

          <div className="case-study-copy-block wide-copy">
            <p>
              While analyzing several existing bouquet and flower websites, I noticed that many primarily focused on
              pre-designed bouquets. These layouts made the experience feel efficient for browsing, but they left limited
              room for users who wanted to create or customize a bouquet based on their own preferences.
            </p>
            <p>
              This observation became the main design opportunity. Instead of treating bouquet building as an extra
              feature, I wanted to make it a core part of the experience.
            </p>
          </div>

          <div className="comparison-grid">
            <article className="comparison-card">
              <h3>Common pattern</h3>
              <p>Browse pre-made bouquet collections, choose a set, and proceed to checkout with limited customization.</p>
            </article>
            <article className="comparison-card emphasis">
              <h3>Design opportunity</h3>
              <p>Introduce a custom build bouquet flow that gives users more control without removing the convenience of ready-made options.</p>
            </article>
          </div>
        </section>

        <section className="case-study-section" id="bloomcraft-flow">
          <div className="section-heading">
            <span className="section-number">03</span>
            <h2>Design opportunity</h2>
          </div>

          <div className="flow-grid">
            {opportunitySteps.map((step, index) => (
              <div className="flow-step" key={step}>
                <span className="flow-index">0{index + 1}</span>
                <p>{step}</p>
                {index < opportunitySteps.length - 1 && <ArrowRight className="flow-arrow" size={18} />}
              </div>
            ))}
          </div>

          <div className="case-study-copy-block wide-copy">
            <p>
              The existing experience was mainly linear: browse, choose a ready-made bouquet, and purchase. I wanted to
              extend that flow by adding a more personal pathway that allowed users to explore flowers, colors, and
              bouquet structure before ordering.
            </p>
          </div>
        </section>

        <section className="case-study-section" id="bloomcraft-solution">
          <div className="section-heading">
            <span className="section-number">04</span>
            <h2>Solution</h2>
          </div>

          <div className="case-study-two-col">
            <div className="case-study-copy-block">
              <p>
                I introduced a Custom Build Bouquet experience that sits alongside the pre-made collection experience.
                This allowed users to either shop a curated design or create a floral arrangement based on their own
                preferences.
              </p>
              <p>
                The builder includes selected flowers, color options, bouquet style, and sizing decisions in a guided
                flow. This helps reduce uncertainty while still giving the user control over the final arrangement.
              </p>
            </div>

            <div className="feature-stack">
              <div className="mini-feature"><Flower2 size={18} /> <span>Flower selection</span></div>
              <div className="mini-feature"><Palette size={18} /> <span>Color and style direction</span></div>
              <div className="mini-feature"><ShoppingBag size={18} /> <span>Checkout-ready preview</span></div>
            </div>
          </div>
        </section>

        <section className="case-study-section" id="bloomcraft-user-flow">
          <div className="section-heading">
            <span className="section-number">05</span>
            <h2>User flow</h2>
          </div>

          <div className="user-flow-grid">
            <div className="user-flow-card">
              <span>01</span>
              <h3>Choose collection</h3>
              <p>Users start by browsing either pre-made bouquets or the custom builder.</p>
            </div>
            <div className="user-flow-card">
              <span>02</span>
              <h3>Select flowers</h3>
              <p>They choose the flowers and color story they want for the arrangement.</p>
            </div>
            <div className="user-flow-card">
              <span>03</span>
              <h3>Review the bouquet</h3>
              <p>The preview helps them understand the final composition before purchase.</p>
            </div>
            <div className="user-flow-card">
              <span>04</span>
              <h3>Complete order</h3>
              <p>The flow ends with a clear purchase path designed to feel straightforward.</p>
            </div>
          </div>
        </section>

        <section className="case-study-section" id="bloomcraft-ui">
          <div className="section-heading">
            <span className="section-number">06</span>
            <h2>Final UI</h2>
          </div>

          <div className="final-ui-grid">
            <figure className="final-screen bloomcraft-screen-image">
              <img src={loginScreen} alt="BloomCraft login screen" />
              <figcaption>Login experience</figcaption>
            </figure>
            <figure className="final-screen bloomcraft-screen-image">
              <img src={registerScreen} alt="BloomCraft registration screen" />
              <figcaption>Registration experience</figcaption>
            </figure>
          </div>
        </section>

        <section className="case-study-section" id="bloomcraft-decisions">
          <div className="section-heading">
            <span className="section-number">07</span>
            <h2>Key design decisions</h2>
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

        <section className="case-study-section" id="bloomcraft-learnings">
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

export default BloomcraftCaseStudy;
