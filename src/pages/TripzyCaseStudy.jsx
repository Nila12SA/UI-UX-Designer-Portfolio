import { Accessibility, ArrowRight, Check, Compass, Leaf, Users } from "lucide-react";
import Header from "../components/Header.jsx";
import PortfolioButton from "../components/Buttons.jsx";

const tripzyAssetBase = `${import.meta.env.BASE_URL}tripzy/`;

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

const tripzyScreenGroups = [
  {
    number: "01",
    title: "Start with the ride experience",
    detail: "The welcome screen introduces Tripzy, followed by ride categories and special features for older adults and disabled people.",
    screens: [["ride-loading.png", "Tripzy welcome screen"], ["ride-home.png", "Rides home screen"]],
  },
  {
    number: "02",
    title: "Make room for different ways to earn",
    detail: "The driver pathway begins with a profile area, then lets people choose a vehicle and earning option that matches their situation.",
    screens: [["driver-profile.png", "Tripzy user profile"], ["earning-choices.png", "Driver earning choices"]],
  },
  {
    number: "03",
    title: "Explain the next steps to drivers",
    detail: "The onboarding checklist shows the documents still needed, while the earning form collects location and an optional referral code.",
    screens: [["earn-with-tripzy.png", "Earn with Tripzy form"], ["driver-checklist.png", "Driver onboarding checklist"]],
  },
  {
    number: "04",
    title: "Guide profile verification",
    detail: "The profile photo screen explains how the image will be checked and gives practical guidance before the person takes a photo.",
    screens: [["verify-profile.png", "Profile photo verification guidance"], ["driver-step-one.png", "Driver onboarding with a recommended next step"]],
  },
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
        <section className="case-study-hero tripzy-real-hero" id="tripzy-overview">
          <div className="case-study-copy">
            <p className="case-study-kicker">Tripzy</p>
            <h1>Ride booking and driver onboarding designed for clarity and access.</h1>
            <p className="case-study-lead">
              Tripzy brings passenger ride options together with a guided driver sign-up journey, helping people understand how to request a ride or begin driving with the service.
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
                <strong>Ride and driver app concept</strong>
              </div>
            </div>
          </div>

          <div className="tripzy-real-screens" aria-label="Tripzy screens: passenger home, earning choices, and driver verification">
            <figure className="tripzy-real-screen tripzy-real-screen-back"><img src={`${tripzyAssetBase}earning-choices.png`} alt="" fetchPriority="high" /></figure>
            <figure className="tripzy-real-screen tripzy-real-screen-main"><img src={`${tripzyAssetBase}ride-home.png`} alt="" fetchPriority="high" /></figure>
            <figure className="tripzy-real-screen tripzy-real-screen-front"><img src={`${tripzyAssetBase}verify-profile.png`} alt="" fetchPriority="high" /></figure>
          </div>
        </section>

        <section className="case-study-section" id="tripzy-project-summary">
          <div className="section-heading">
            <span className="section-number">Project</span>
            <h2>One app, two connected journeys</h2>
          </div>
          <div className="case-study-two-col">
            <div className="case-study-copy-block">
              <p>The supplied Tripzy screens cover both a passenger ride-discovery experience and a driver onboarding journey. Riders can explore ride and delivery options, including features presented for older adults and disabled people.</p>
              <p>For prospective drivers, the screens show earning choices, vehicle eligibility information, a document checklist, and profile-photo verification guidance.</p>
            </div>
            <div className="tripzy-journey-summary">
              <article><span>Passenger</span><strong>Explore ride options and trip services</strong></article>
              <article><span>Driver</span><strong>Choose an earning path and complete setup</strong></article>
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
            <h2>Passenger and driver screens</h2>
          </div>

          <div className="tripzy-screen-groups">
            {tripzyScreenGroups.map(({ number, title, detail, screens }) => (
              <article className="tripzy-screen-group" key={number}>
                <div className="tripzy-screen-copy"><span>{number}</span><h3>{title}</h3><p>{detail}</p></div>
                <div className={`tripzy-screen-gallery ${screens.length === 1 ? "is-single" : ""}`}>
                  {screens.map(([file, caption]) => <figure key={file}><img src={`${tripzyAssetBase}${file}`} alt={`Tripzy ${caption}`} loading="lazy" decoding="async" /><figcaption>{caption}</figcaption></figure>)}
                </div>
              </article>
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
          <PortfolioButton href={`${import.meta.env.BASE_URL}#/projects/leafora`} variant="secondary">Next: Leafora</PortfolioButton>
          <PortfolioButton href={`${import.meta.env.BASE_URL}#projects`} variant="secondary">Back to Projects</PortfolioButton>
        </section>
      </main>
    </>
  );
}

export default TripzyCaseStudy;
