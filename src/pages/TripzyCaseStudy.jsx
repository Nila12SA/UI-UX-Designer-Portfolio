import { Accessibility, ArrowRight, CarFront, Check, Compass, Leaf, Users } from "lucide-react";
import Header from "../components/Header.jsx";
import PortfolioButton from "../components/Buttons.jsx";
import tripzyHomeScreen from "../assets/home.png";
import tripzyRidesScreen from "../assets/iPhone 16 - 33.png";
import tripzyUserScreen from "../assets/Tripzy user.png";

const tripzyNavLinks = [
  { id: "tripzy-overview", label: "Overview" },
  { id: "tripzy-reference", label: "Reference" },
  { id: "tripzy-feedback", label: "Feedback" },
  { id: "tripzy-flow", label: "Flow" },
  { id: "tripzy-ui", label: "UI" },
];

const improvementPoints = [
  "Clearer navigation to reduce confusion in a transportation booking flow.",
  "Larger, more readable elements to make the interface easier to scan.",
  "Simplified actions to reduce cognitive load and improve confidence.",
  "More consistent hierarchy and spacing to keep the experience less visually overwhelming.",
];

const learningPoints = [
  "Studying familiar product patterns helped me understand what users expect in a transportation app.",
  "Informal feedback from friends showed me how accessibility issues can be identified early in the process.",
  "Simplifying an interface can make it more useful for a wider range of users.",
  "Good design is not only about adding features, but also about reducing friction and improving clarity.",
];

const opportunitySteps = [
  "Research familiar patterns",
  "Review informal feedback",
  "Simplify the journey",
  "Improve accessibility",
];

function TripzyCaseStudy() {
  return (
    <>
      <Header
        actionHref={`${import.meta.env.BASE_URL}#projects`}
        actionLabel="Back to Portfolio"
        activeId="tripzy-overview"
        links={tripzyNavLinks}
      />
      <main className="case-study-shell tripzy-shell">
        <section className="case-study-hero" id="tripzy-overview">
          <div className="case-study-copy">
            <p className="case-study-kicker">Tripzy</p>
            <h1>Accessible ride-booking experience designed for clarity and ease of use.</h1>
            <p className="case-study-lead">
              Tripzy is a transportation app concept focused on making ride-booking feel easier to understand and more
              inclusive for a wider range of users. The design uses familiar app patterns as a reference while aiming to
              simplify the experience for users who may find complex interfaces harder to navigate.
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
                <strong>Mobile app concept</strong>
              </div>
            </div>
          </div>

          <div className="case-study-visual tripzy-visual" aria-label="Tripzy app mockup">
            <div className="phone-frame tripzy-frame">
              <div className="phone-notch" />
              <div className="phone-screen tripzy-screen">
                <div className="screen-header-row">
                  <span>Choose ride</span>
                  <CarFront size={16} />
                </div>
                <div className="screen-stat-card tripzy-card">
                  <div className="stat-circle tripzy-circle" />
                  <div>
                    <small>Pickup</small>
                    <strong>Downtown</strong>
                  </div>
                </div>
                <div className="mini-chart tripzy-chart" />
                <div className="suggestion-card tripzy-suggestion">
                  <Accessibility size={18} />
                  <div>
                    <small>Ride option</small>
                    <strong>Accessible</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="case-study-section" id="tripzy-reference">
          <div className="section-heading">
            <span className="section-number">01</span>
            <h2>Reference analysis</h2>
          </div>

          <div className="case-study-copy-block wide-copy">
            <p>
              I used Uber as a reference to understand familiar transportation-app interaction patterns, including how users
              often navigate booking, location selection, and trip-related actions. I did not copy the interface; instead,
              I studied the general interaction model to understand what felt familiar and intuitive.
            </p>
            <p>
              This helped me frame the product in a way that felt recognizable while still leaving room to design an
              experience that was simpler and more accessible.
            </p>
          </div>
        </section>

        <section className="case-study-section" id="tripzy-feedback">
          <div className="section-heading">
            <span className="section-number">02</span>
            <h2>Informal feedback</h2>
          </div>

          <div className="case-study-copy-block wide-copy">
            <p>
              During the design process, I asked some friends for feedback and suggestions. Through those informal
              discussions, I realized that the interface could be improved for users who may find complex navigation
              difficult, especially older adults and users with disabilities.
            </p>
            <p>
              This feedback was valuable because it highlighted a design opportunity to reduce friction and make the
              journey easier to understand.
            </p>
          </div>

          <div className="comparison-grid">
            <article className="comparison-card">
              <h3>Initial approach</h3>
              <p>Many screens were functional, but some parts of the flow felt more complex than necessary.</p>
            </article>
            <article className="comparison-card emphasis">
              <h3>Accessibility opportunity</h3>
              <p>Make the system easier to understand, easier to navigate, and less visually overwhelming for a broader set of users.</p>
            </article>
          </div>
        </section>

        <section className="case-study-section" id="tripzy-flow">
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
              The design opportunity was clear: make the experience easier to understand and easier to navigate while
              still preserving the needed functionality for booking, selecting a ride, and managing the trip.
            </p>
          </div>
        </section>

        <section className="case-study-section" id="tripzy-improvements">
          <div className="section-heading">
            <span className="section-number">04</span>
            <h2>Design improvements</h2>
          </div>

          <div className="case-study-two-col">
            <div className="case-study-copy-block">
              <p>
                I focused on simplifying the interface by improving hierarchy, readability, and navigation. The goal was
                to reduce the amount of visual clutter and make actions easier to recognize at a glance.
              </p>
              <p>
                These changes were informed by the feedback I received and by the need to think more carefully about the
                needs of users who may prefer simpler, more readable interactions.
              </p>
            </div>

            <div className="feature-stack">
              <div className="mini-feature"><Users size={18} /> <span>More understandable journey</span></div>
              <div className="mini-feature"><Leaf size={18} /> <span>Cleaner layout and hierarchy</span></div>
              <div className="mini-feature"><Accessibility size={18} /> <span>Accessible interaction decisions</span></div>
            </div>
          </div>

          <ul className="design-list">
            {improvementPoints.map((item) => (
              <li key={item}>
                <Check size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="case-study-section" id="tripzy-user-flow">
          <div className="section-heading">
            <span className="section-number">05</span>
            <h2>User flow</h2>
          </div>

          <div className="user-flow-grid">
            <div className="user-flow-card">
              <span>01</span>
              <h3>Open app</h3>
              <p>The user lands on a focused ride-booking screen with essential actions visible.</p>
            </div>
            <div className="user-flow-card">
              <span>02</span>
              <h3>Select trip</h3>
              <p>Pickup and destination details are presented in a simple, easy-to-scan layout.</p>
            </div>
            <div className="user-flow-card">
              <span>03</span>
              <h3>Choose option</h3>
              <p>Ride types and accessibility choices are clearly separated and readable.</p>
            </div>
            <div className="user-flow-card">
              <span>04</span>
              <h3>Confirm trip</h3>
              <p>The final steps stay concise and clear so users can complete the action confidently.</p>
            </div>
          </div>
        </section>

        <section className="case-study-section" id="tripzy-ui">
          <div className="section-heading">
            <span className="section-number">06</span>
            <h2>Final UI</h2>
          </div>

          <div className="final-ui-grid">
            {[
              [tripzyHomeScreen, "Tripzy loading screen"],
              [tripzyRidesScreen, "Rides booking screen"],
              [tripzyUserScreen, "Tripzy user profile"],
            ].map(([image, caption]) => (
              <figure className="final-screen tripzy-screen-image" key={caption}>
                <img src={image} alt={caption} />
                <figcaption>{caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="case-study-section" id="tripzy-learnings">
          <div className="section-heading">
            <span className="section-number">07</span>
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

export default TripzyCaseStudy;
