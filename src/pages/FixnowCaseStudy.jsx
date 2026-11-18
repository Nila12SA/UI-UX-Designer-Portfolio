import { useEffect } from "react";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  Check,
  CircleDollarSign,
  ClipboardList,
  Clock3,
  Compass,
  FileCheck2,
  MapPin,
  MessageCircleMore,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Header from "../components/Header.jsx";
import PortfolioButton from "../components/Buttons.jsx";

const figmaUrl = "https://www.figma.com/design/C2gyu0LNkRNgvc2llpTCtJ/FixNow?node-id=0-1";

const navLinks = [
  { id: "fixnow-overview", label: "Overview" },
  { id: "fixnow-problem", label: "Problem" },
  { id: "fixnow-flow", label: "Process" },
  { id: "fixnow-design", label: "Design" },
];

const projectDetails = [
  ["Project type", "Mobile UI/UX concept"],
  ["Platform", "Mobile"],
  ["Design tool", "Figma"],
  ["Scope", "Customer-side plumbing booking"],
  ["Deliverables", "UX analysis, user flow, wireframes, high-fidelity UI, reusable components"],
];

const challenges = [
  [Wrench, "Find a suitable professional", "Match the repair need with someone who handles that kind of work."],
  [ShieldCheck, "Establish trust", "Give people useful signals for judging credibility and experience."],
  [CircleDollarSign, "Understand the fee", "Show the call-out fee separately from repair costs confirmed after inspection."],
  [CalendarClock, "Choose when to book", "Support urgent help as well as a scheduled visit."],
  [MessageCircleMore, "Know what happens next", "Make request status and acceptance clear after sending."],
];

const processSteps = ["Problem definition", "User flow", "Wireframes", "High-fidelity UI", "Design system"];
const assetBase = `${import.meta.env.BASE_URL}fixnow/`;

const bookingSteps = [
  ["01", "Describe the problem", "Choose plumbing, explain the leaking sink, and optionally add photos."],
  ["02", "Set time and location", "Share where help is needed and choose an urgent or preferred time."],
  ["03", "Choose a plumber", "Compare available professionals, review the profile and fee, then send the request."],
];

const screenSequence = [
  ["Home", "home.png", "Start with popular repair services and a direct path to describe a home problem."],
  ["Problem Description", "problem-description.png", "Select an issue, describe what happened, and add optional photos."],
  ["When and Where", "when-and-where.png", "Set the service location and choose urgent or scheduled help."],
  ["Choose a Plumber", "choose-a-plumber.png", "Compare available professionals by ratings, experience, availability, and call-out fee."],
  ["Plumber Profile", "plumber-profile.png", "Review identity checks, recent feedback, fee details, and the request summary."],
  ["Request Sent", "request-sent.png", "See that the request is waiting for the selected plumber to respond."],
  ["Request Details", "request-details.png", "Follow pending acceptance and review the request information and status."],
  ["Plumber Unavailable", "plumber-unavailable.png", "Keep details and photos saved while choosing another available plumber."],
];

const screenGroups = [
  ["01", "Start with the service need", "The first screens focus on service discovery and a structured problem description, with space to add supporting photos.", screenSequence.slice(0, 2)],
  ["02", "Set the visit, then compare options", "The booking continues with location and timing before presenting available plumbers with information for comparison.", screenSequence.slice(2, 4)],
  ["03", "Review details and send the request", "The profile brings trust signals and fee information together with the request summary before the user sends it.", screenSequence.slice(4, 6)],
  ["04", "Track progress and recover gracefully", "Request details make the pending state clear. If a plumber cannot accept, the original details and photos remain saved for another choice.", screenSequence.slice(6, 8)],
];

const decisions = [
  [ClipboardList, "Guided booking", "A three-step structure breaks a complicated repair request into smaller decisions."],
  [BadgeCheck, "Trust through information", "Verification, ratings, reviews, and experience help people assess each professional."],
  [CircleDollarSign, "Transparent pricing", "The call-out fee is visible up front, while parts and labour are quoted after inspection."],
  [Clock3, "Clear request status", "Pending acceptance is distinct from a confirmed visit, with a notification promised after the professional responds."],
  [FileCheck2, "Graceful recovery", "If a plumber cannot accept, the problem details and photos stay saved for another choice."],
];

function FixnowCaseStudy() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = "FixNow mobile UI/UX case study: a guided home-repair booking concept focused on trust, clear pricing, and request status.";
    document.title = "FixNow Case Study | Nilani Subramaniyam";
    let meta = document.querySelector('meta[name="description"]');
    const createdMeta = !meta;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    const previousDescription = meta.content;
    meta.content = description;
    return () => {
      document.title = previousTitle;
      if (createdMeta) meta.remove();
      else meta.content = previousDescription;
    };
  }, []);

  return (
    <>
      <Header actionHref={`${import.meta.env.BASE_URL}#projects`} actionLabel="Back to Projects" activeId="fixnow-overview" links={navLinks} />
      <main className="case-study-shell fixnow-shell">
        <section className="case-study-hero fixnow-hero" id="fixnow-overview">
          <div className="case-study-copy">
            <p className="case-study-kicker">Mobile App UI/UX · Figma</p>
            <h1>FixNow — Making Home Repairs Easier</h1>
            <p className="case-study-lead">
              A mobile-first experience for discovering trusted home repair professionals and requesting services with confidence.
            </p>
            <div className="case-study-project-meta">
              <div><span>Platform</span><strong>Mobile app concept</strong></div>
              <div><span>Journey</span><strong>Plumbing service booking</strong></div>
              <div><span>Focus</span><strong>Trust and transparency</strong></div>
            </div>
            <div className="fixnow-hero-actions">
              <PortfolioButton href={figmaUrl} target="_blank">View Figma Design</PortfolioButton>
              <a className="fixnow-text-link" href="#fixnow-overview-details">Explore the project <ArrowDown size={15} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="fixnow-hero-screens" aria-label="FixNow screens: home, plumber selection, and request details">
            <figure className="fixnow-hero-screen fixnow-hero-screen-back"><img src={`${assetBase}choose-a-plumber.png`} alt="" fetchPriority="high" /></figure>
            <figure className="fixnow-hero-screen fixnow-hero-screen-main"><img src={`${assetBase}home.png`} alt="" fetchPriority="high" /></figure>
            <figure className="fixnow-hero-screen fixnow-hero-screen-front"><img src={`${assetBase}request-details.png`} alt="" fetchPriority="high" /></figure>
          </div>
        </section>

        <section className="case-study-section fixnow-section" id="fixnow-overview-details">
          <div className="section-heading"><span className="section-number">01</span><h2>Project overview</h2></div>
          <div className="case-study-two-col">
            <div className="case-study-copy-block">
              <p>FixNow is a mobile UI/UX concept focused on making the home-repair booking journey simpler, clearer, and more trustworthy.</p>
              <p>The work covers the customer-side plumbing journey: from describing a kitchen sink leak through comparing plumbers and checking whether a request has been accepted.</p>
            </div>
            <dl className="fixnow-detail-list">
              {projectDetails.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}
            </dl>
          </div>
        </section>

        <section className="case-study-section fixnow-section" id="fixnow-problem">
          <div className="section-heading"><span className="section-number">02</span><h2>A leak creates more than one problem</h2></div>
          <div className="fixnow-problem-callout">
            <MapPin size={21} aria-hidden="true" />
            <p>A user discovers that their kitchen sink is leaking but does not know a reliable plumber. They need a convenient way to find someone trustworthy, check availability, compare service information, understand costs, and request help.</p>
          </div>
          <div className="fixnow-challenge-grid">
            {challenges.map(([Icon, title, detail], index) => (
              <article className="fixnow-challenge" key={title}>
                <span className="fixnow-card-index">0{index + 1}</span><Icon size={20} aria-hidden="true" /><h3>{title}</h3><p>{detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-study-section fixnow-section" id="fixnow-solution">
          <div className="section-heading"><span className="section-number">03</span><h2>A guided request, with clarity at every step</h2></div>
          <div className="fixnow-booking-grid">
            {bookingSteps.map(([number, title, detail], index) => (
              <article className="fixnow-booking-step" key={number}>
                <span>{number}</span><h3>{title}</h3><p>{detail}</p>
                {index < bookingSteps.length - 1 && <ArrowRight className="fixnow-booking-arrow" size={19} aria-hidden="true" />}
              </article>
            ))}
          </div>
          <div className="fixnow-support-grid">
            <div><ShieldCheck size={20} /><strong>Assess trust</strong><span>Verification, reviews, ratings, and experience</span></div>
            <div><CircleDollarSign size={20} /><strong>See the fee</strong><span>Call-out fee up front; repair costs after inspection</span></div>
            <div><Clock3 size={20} /><strong>Understand status</strong><span>Pending response is separate from confirmed service</span></div>
            <div><Compass size={20} /><strong>Try another option</strong><span>Saved request details support a fresh professional choice</span></div>
          </div>
        </section>

        <section className="case-study-section fixnow-section" id="fixnow-flow">
          <div className="section-heading"><span className="section-number">04</span><h2>From the scenario to a reusable system</h2></div>
          <p className="fixnow-section-intro">The UX analysis starts from an assessment scenario, maps the customer path, and carries the same logic into the interface and component set. The assumptions about professional availability and response times are identified for future validation.</p>
          <div className="fixnow-process-track" aria-label="Problem definition, user flow, wireframes, high-fidelity UI, design system">
            {processSteps.map((step, index) => <div className="fixnow-process-step" key={step}><span>0{index + 1}</span><strong>{step}</strong>{index < processSteps.length - 1 && <ArrowRight size={17} aria-hidden="true" />}</div>)}
          </div>
          <div className="fixnow-flow-branches">
            <div><span className="fixnow-branch-label">Request path</span><p>Home → describe problem → set time and location → compare plumbers → review details → send request → view status</p></div>
            <div><span className="fixnow-branch-label">Recovery path</span><p>If the plumber cannot accept → keep details and photos saved → choose another available plumber</p></div>
          </div>
          <p className="fixnow-analysis-note">The concept’s UX analysis is based on the assessment scenario and stated assumptions. It does not claim interviews or usability studies.</p>
        </section>

        <section className="case-study-section fixnow-section" id="fixnow-design">
          <div className="section-heading"><span className="section-number">05</span><h2>The booking screens</h2></div>
          <p className="fixnow-section-intro">The final flow moves from service discovery to a saved-request recovery path. Screen descriptions below follow the named mobile frames in the FixNow file.</p>
          <div className="fixnow-screen-groups">
            {screenGroups.map(([number, title, detail, screens]) => (
              <article className="fixnow-screen-group" key={number}>
                <div className="fixnow-screen-copy"><span>{number}</span><h3>{title}</h3><p>{detail}</p></div>
                <div className="fixnow-screen-gallery">
                  {screens.map(([caption, file, alt]) => <figure key={file}><img src={`${assetBase}${file}`} alt={`FixNow ${caption} screen. ${alt}`} loading="lazy" decoding="async" /><figcaption>{caption}</figcaption></figure>)}
                </div>
              </article>
            ))}
          </div>
          <div className="fixnow-design-decisions">
            <div className="section-heading"><span className="section-number">06</span><h2>Key UX decisions</h2></div>
            <div className="fixnow-decision-grid">
              {decisions.map(([Icon, title, detail]) => <article key={title}><Icon size={21} aria-hidden="true" /><h3>{title}</h3><p>{detail}</p></article>)}
            </div>
          </div>
        </section>

        <section className="case-study-section fixnow-section" id="fixnow-system">
          <div className="section-heading"><span className="section-number">07</span><h2>A consistent design language</h2></div>
          <div className="fixnow-system-panel">
            <div className="fixnow-system-copy"><p className="case-study-kicker">Design system</p><h3>Reusable pieces keep the journey familiar.</h3><p>The Figma Design System page organizes the mobile interface into repeatable controls and states, including services, professional cards, navigation, and booking progress.</p></div>
            <div className="fixnow-component-list">
              {["Brand colors", "Heading and body type", "Primary and secondary buttons", "Inputs and selection fields", "Service and professional cards", "Navigation and progress", "Default and selected states"].map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong><Check size={15} aria-hidden="true" /></div>)}
            </div>
          </div>
        </section>

        <section className="case-study-section fixnow-section fixnow-reflection">
          <div className="section-heading"><span className="section-number">08</span><h2>Reflection</h2></div>
          <p>This concept demonstrates how a complex service request can be broken into manageable steps, how trust and pricing information can be made visible, and how a recovery path can preserve effort when the first booking attempt does not work out. Reusable components help carry those decisions consistently across the experience.</p>
        </section>

        <section className="case-study-footer fixnow-footer">
          <div><p className="case-study-kicker">Explore the project</p><h2>FixNow on Figma</h2><p>Open the source design for the mobile UI, design system, and UX analysis.</p></div>
          <div className="fixnow-footer-actions">
            <PortfolioButton href={figmaUrl} target="_blank">View Figma Design</PortfolioButton>
            <PortfolioButton href={`${import.meta.env.BASE_URL}#/projects/leafora`} variant="secondary">Next: Leafora</PortfolioButton>
            <PortfolioButton href={`${import.meta.env.BASE_URL}#projects`} variant="secondary">Back to Projects</PortfolioButton>
          </div>
        </section>
      </main>
    </>
  );
}

export default FixnowCaseStudy;
