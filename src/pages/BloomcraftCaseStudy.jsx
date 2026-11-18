import { useEffect } from "react";
import {
  ArrowRight,
  Flower2,
  Images,
  LogIn,
  Palette,
  ReceiptText,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import Header from "../components/Header.jsx";
import PortfolioButton from "../components/Buttons.jsx";

const base = `${import.meta.env.BASE_URL}bloomcraft/`;

const navLinks = [
  { id: "bloomcraft-overview", label: "Overview" },
  { id: "bloomcraft-journey", label: "Journey" },
  { id: "bloomcraft-screens", label: "Screens" },
  { id: "bloomcraft-system", label: "Visual design" },
];

const projectDetails = [
  ["Project type", "Floral e-commerce concept"],
  ["Platform", "Website"],
  ["Design tool", "Figma"],
  ["Product focus", "Custom bouquet creation"],
  ["Screens presented", "Home, login, and registration"],
];

const journey = [
  ["01", "Discover the offer", "The homepage introduces a custom bouquet and invites visitors to start building."],
  ["02", "Understand the process", "How It Works explains flower selection, quantity adjustment, and bouquet preview."],
  ["03", "Compare price options", "Three price tiers give a quick overview of the bouquet range."],
  ["04", "Continue to an account", "Visitors can move into the login or registration experience."],
];

const designDecisions = [
  [Flower2, "Lead with the custom bouquet", "The homepage headline and Start Building action make the central offer easy to spot."],
  [Images, "Explain the steps visually", "Three short process captions and flower imagery show how customization is intended to work."],
  [ReceiptText, "Keep pricing scannable", "Three visible price ranges help visitors compare options without leaving the landing page."],
  [LogIn, "Keep account entry consistent", "Login and registration share the same floral background, centered form panel, and account links."],
];

const components = [
  ["Primary navigation", "How It Works, Simple Pricing, Contact Us, and Register"],
  ["Primary action", "Start Building call to action"],
  ["Process cards", "Flower selection, quantity adjustment, and bouquet preview"],
  ["Price cards", "Three bouquet price tiers with image-led presentation"],
  ["Florist profile", "A featured florist with role and introduction"],
  ["Account forms", "Shared login and registration layout"],
];

function BloomcraftCaseStudy() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = "BloomCraft website UI/UX case study: a custom bouquet landing page with process, pricing, login, and registration screens.";
    document.title = "BloomCraft Case Study | Nilani Subramaniyam";
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
      <Header actionHref={`${import.meta.env.BASE_URL}#projects`} actionLabel="Back to Projects" activeId="bloomcraft-overview" links={navLinks} />
      <main className="case-study-shell bloomcraft-shell">
        <section className="case-study-hero bloomcraft-hero" id="bloomcraft-overview">
          <div className="case-study-copy">
            <p className="case-study-kicker">Floral E-commerce · Website UI/UX</p>
            <h1>BloomCraft — Simple. Personal. Beautiful.</h1>
            <p className="case-study-lead">A floral shopping website introducing a custom-bouquet journey, showing how to select flowers, adjust quantities, and preview an arrangement, alongside pricing and account access.</p>
            <div className="case-study-project-meta">
              <div><span>Platform</span><strong>Responsive website concept</strong></div>
              <div><span>Product</span><strong>Custom bouquet shopping</strong></div>
              <div><span>Design tool</span><strong>Figma</strong></div>
            </div>
            <div className="bloomcraft-hero-actions">
              <a className="bloomcraft-inline-link" href="#bloomcraft-screens">Explore the screens <ArrowRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
          <figure className="bloomcraft-hero-screenshot">
            <img src={`${base}home.jpg`} alt="BloomCraft home page introducing custom bouquets, how it works, pricing, and the florist" fetchPriority="high" />
            <figcaption>BloomCraft home page</figcaption>
          </figure>
        </section>

        <section className="case-study-section bloomcraft-section" id="bloomcraft-overview-details">
          <div className="section-heading"><span className="section-number">01</span><h2>Project overview</h2></div>
          <div className="case-study-two-col">
            <div className="case-study-copy-block">
              <p>BloomCraft is a floral e-commerce website concept for people who want to create a more personal bouquet. Its landing page presents the custom bouquet offer, explains the three-step process, shows pricing, and introduces the florist.</p>
              <p>The supplied screens cover the home page and account entry through login and registration. The bouquet-builder interface itself is not included in these screens.</p>
            </div>
            <dl className="bloomcraft-details-list">
              {projectDetails.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}
            </dl>
          </div>
        </section>

        <section className="case-study-section bloomcraft-section" id="bloomcraft-challenge">
          <div className="section-heading"><span className="section-number">02</span><h2>Make customization easy to understand</h2></div>
          <div className="bloomcraft-problem-panel">
            <span><Sparkles size={20} aria-hidden="true" /></span>
            <p>Visitors need to understand what they can customize, how the process works, and what price range to expect before they choose to begin.</p>
          </div>
          <p className="bloomcraft-evidence-note">This design challenge is inferred from the supplied screens; no user research findings were included with the exports.</p>
        </section>

        <section className="case-study-section bloomcraft-section" id="bloomcraft-journey">
          <div className="section-heading"><span className="section-number">03</span><h2>A simple path from idea to account</h2></div>
          <div className="bloomcraft-journey-grid">
            {journey.map(([number, title, detail], index) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{detail}</p>{index < journey.length - 1 && <ArrowRight size={18} aria-hidden="true" />}</article>)}
          </div>
        </section>

        <section className="case-study-section bloomcraft-section" id="bloomcraft-screens">
          <div className="section-heading"><span className="section-number">04</span><h2>The BloomCraft screens</h2></div>
          <p className="bloomcraft-section-intro">The supplied pages are arranged from the landing experience into account access.</p>
          <div className="bloomcraft-screen-groups">
            <article className="bloomcraft-screen-group">
              <div className="bloomcraft-screen-copy"><span>01</span><h3>Introduce the bouquet experience</h3><p>The landing page combines its custom-bouquet message with the process, simple pricing, florist introduction, and contact details.</p></div>
              <figure className="bloomcraft-home-screen"><img src={`${base}home.jpg`} alt="Full BloomCraft home page showing navigation, custom bouquet introduction, how it works, pricing, florist profile, and contact information" loading="lazy" decoding="async" /><figcaption>Home page</figcaption></figure>
            </article>
            <article className="bloomcraft-screen-group">
              <div className="bloomcraft-screen-copy"><span>02</span><h3>Continue into an account</h3><p>Login and registration use the same floral backdrop, centered form panel, and links between account states.</p></div>
              <div className="bloomcraft-account-screens">
                <figure><img src={`${base}login.jpg`} alt="BloomCraft login page with email and password fields" loading="lazy" decoding="async" /><figcaption>Login</figcaption></figure>
                <figure><img src={`${base}register.jpg`} alt="BloomCraft registration page with email, password, and confirmation fields" loading="lazy" decoding="async" /><figcaption>Register</figcaption></figure>
              </div>
            </article>
          </div>
        </section>

        <section className="case-study-section bloomcraft-section" id="bloomcraft-decisions">
          <div className="section-heading"><span className="section-number">05</span><h2>Key UX decisions</h2></div>
          <div className="bloomcraft-decision-grid">
            {designDecisions.map(([Icon, title, detail]) => <article key={title}><Icon size={22} aria-hidden="true" /><h3>{title}</h3><p>{detail}</p></article>)}
          </div>
        </section>

        <section className="case-study-section bloomcraft-section" id="bloomcraft-system">
          <div className="section-heading"><span className="section-number">06</span><h2>A warm floral visual language</h2></div>
          <div className="bloomcraft-style-panel">
            <div className="bloomcraft-style-intro"><p className="case-study-kicker">Visual design</p><h3>Flower photography carries the story.</h3><p>The screens pair expressive floral imagery and a soft pink palette with bold, readable headings and simple navigation. Login and registration reuse the same visual treatment.</p></div>
            <div className="bloomcraft-palette" aria-label="Approximate palette based on the supplied screens">
              <div><span className="bloomcraft-swatch bloomcraft-swatch-blush" /><strong>Blush pink</strong></div>
              <div><span className="bloomcraft-swatch bloomcraft-swatch-rose" /><strong>Rose accent</strong></div>
              <div><span className="bloomcraft-swatch bloomcraft-swatch-berry" /><strong>Deep floral backdrop</strong></div>
              <div><span className="bloomcraft-swatch bloomcraft-swatch-white" /><strong>Form white</strong></div>
            </div>
          </div>
          <div className="bloomcraft-component-grid">
            {components.map(([title, detail]) => <article key={title}><span><Palette size={17} aria-hidden="true" /></span><div><h3>{title}</h3><p>{detail}</p></div></article>)}
          </div>
        </section>

        <section className="case-study-section bloomcraft-section bloomcraft-reflection">
          <div className="section-heading"><span className="section-number">07</span><h2>Design reflection</h2></div>
          <p>BloomCraft’s landing page introduces the custom bouquet idea through a clear message, an easy-to-follow process, and visible pricing. The account screens extend that floral identity into login and registration. Together, these pages show how a website can explain a service before asking visitors to sign in.</p>
        </section>

        <section className="case-study-footer bloomcraft-footer">
          <div><p className="case-study-kicker">Keep exploring</p><h2>More product design work</h2><p>Return to the project collection or view Leafora, another commerce concept.</p></div>
          <div className="bloomcraft-footer-actions">
            <PortfolioButton href={`${import.meta.env.BASE_URL}#/projects/leafora`} variant="secondary">Next: Leafora</PortfolioButton>
            <PortfolioButton href={`${import.meta.env.BASE_URL}#projects`} variant="secondary">Back to Projects</PortfolioButton>
          </div>
        </section>
      </main>
    </>
  );
}

export default BloomcraftCaseStudy;
