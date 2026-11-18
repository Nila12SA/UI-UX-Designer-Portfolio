import { useEffect } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CreditCard,
  Leaf,
  PackageCheck,
  ShoppingBag,
  Sprout,
} from "lucide-react";
import Header from "../components/Header.jsx";
import PortfolioButton from "../components/Buttons.jsx";

const base = `${import.meta.env.BASE_URL}leafora/`;
const figmaUrl = "https://www.figma.com/design/sVUkrjUmGhL0OfAodTo12S/Leafora?node-id=0-1";

const navLinks = [
  { id: "leafora-overview", label: "Overview" },
  { id: "leafora-journey", label: "Journey" },
  { id: "leafora-screens", label: "Screens" },
  { id: "leafora-system", label: "Visual system" },
];

const projectDetails = [
  ["Project type", "Mobile shopping app concept"],
  ["Platform", "Mobile"],
  ["Design tool", "Figma"],
  ["Product focus", "Indoor plants and plant care"],
  ["Screens presented", "Shopping, checkout, account, and order history"],
];

const journey = [
  ["01", "Discover", "Browse collections, best sellers, new arrivals, and categories."],
  ["02", "Evaluate", "Review product details, price, availability, and care guidance."],
  ["03", "Purchase", "Manage cart items, review costs, and choose delivery and payment."],
  ["04", "Follow up", "See the order confirmation, history, profile, and account credits."],
];

const screenGroups = [
  {
    number: "01",
    title: "A calm welcome into the shop",
    description: "The splash screen introduces the Leafora name and its “Bring Nature Home” message with a full-screen plant photograph.",
    screens: [["splash.png", "Leafora splash screen"]],
  },
  {
    number: "02",
    title: "Browse plants and collections",
    description: "The home screen brings together search, a seasonal collection, best sellers, new arrivals, and plant categories.",
    screens: [["home.png", "Leafora home screen"]],
  },
  {
    number: "03",
    title: "Choose with useful care information",
    description: "The product page pairs price, stock, and reviews with watering, sunlight, temperature, humidity, and pet-safety guidance.",
    screens: [["product-details.png", "Fiddle Leaf Fig product details and care guidance"]],
  },
  {
    number: "04",
    title: "Review the basket before checkout",
    description: "The cart shows selected plants and quantities alongside subtotal, shipping, tax, and total.",
    screens: [["shopping-cart.png", "Shopping cart and order summary"]],
  },
  {
    number: "05",
    title: "Make delivery and payment choices",
    description: "Checkout groups the delivery address, shipping method, payment option, and final order summary in one flow.",
    screens: [["checkout.png", "Checkout with delivery and payment options"]],
  },
  {
    number: "06",
    title: "Confirm the order and next steps",
    description: "The confirmation screen provides the order reference, estimated delivery, reward credit, and a track-order action.",
    screens: [["order-confirmation.png", "Order confirmation and estimated delivery"]],
  },
  {
    number: "07",
    title: "Support account access and repeat visits",
    description: "The account screens provide sign-in, order history, profile information, saved account actions, and member credits.",
    screens: [
      ["login.png", "Login screen"],
      ["order-history.png", "Order history with delivery status"],
      ["profile.png", "Profile with plant, order, and credit summaries"],
    ],
  },
];

const uxDecisions = [
  [Sprout, "Care guidance beside the product", "Care needs appear on the product details screen, so shoppers can consider light, water, temperature, humidity, and pet suitability before adding a plant to the cart."],
  [ShoppingBag, "A visible cost breakdown", "The cart separates subtotal, shipping, tax, and total before checkout, helping shoppers review the purchase amount."],
  [CreditCard, "Delivery and payment in one checkout", "Delivery speed and payment options are grouped with the order summary to make the final review part of the same step."],
  [PackageCheck, "A clear post-purchase handoff", "The confirmation view gives the order reference and estimated delivery, while order history offers a place to revisit previous purchases."],
];

const components = [
  ["Product cards", "Image, plant name, price, and quick cart action"],
  ["Care information", "Compact care and suitability summaries"],
  ["Order summary", "Subtotal, delivery, tax, and total"],
  ["Delivery options", "Standard and express service choices"],
  ["Payment choices", "Credit card and Apple Pay options"],
  ["Status and account", "Order state, history filters, and profile shortcuts"],
];

function LeaforaCaseStudy() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = "Leafora mobile UI/UX case study: an indoor plant shopping experience with care guidance, checkout, and order tracking.";
    document.title = "Leafora Case Study | Nilani Subramaniyam";
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
      <Header actionHref={`${import.meta.env.BASE_URL}#projects`} actionLabel="Back to Projects" activeId="leafora-overview" links={navLinks} />
      <main className="case-study-shell leafora-shell">
        <section className="case-study-hero leafora-hero" id="leafora-overview">
          <div className="case-study-copy">
            <p className="case-study-kicker">Mobile Commerce · UI/UX Design</p>
            <h1>Leafora — Bring Nature Home</h1>
            <p className="case-study-lead">A mobile indoor-plant shopping experience that brings browsing, practical plant-care guidance, checkout, and order tracking together.</p>
            <div className="case-study-project-meta">
              <div><span>Platform</span><strong>Mobile app</strong></div>
              <div><span>Product</span><strong>Indoor plant shopping</strong></div>
              <div><span>Design tool</span><strong>Figma</strong></div>
            </div>
            <div className="leafora-hero-actions">
              <PortfolioButton href={figmaUrl} target="_blank">View Figma Design</PortfolioButton>
              <a className="leafora-inline-link" href="#leafora-screens">Explore the screens <ArrowRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="leafora-hero-screens" aria-label="Leafora mobile screens: home, product details, and order confirmation">
            <figure className="leafora-hero-screen leafora-hero-screen-back"><img src={`${base}product-details.png`} alt="" fetchPriority="high" /></figure>
            <figure className="leafora-hero-screen leafora-hero-screen-main"><img src={`${base}home.png`} alt="" fetchPriority="high" /></figure>
            <figure className="leafora-hero-screen leafora-hero-screen-front"><img src={`${base}order-confirmation.png`} alt="" fetchPriority="high" /></figure>
          </div>
        </section>

        <section className="case-study-section leafora-section" id="leafora-overview-details">
          <div className="section-heading"><span className="section-number">01</span><h2>Project overview</h2></div>
          <div className="case-study-two-col">
            <div className="case-study-copy-block">
              <p>Leafora is a mobile shopping concept for indoor plants. The supplied screens show a customer journey from discovering plants to reviewing care details, placing an order, and returning to order history or profile information.</p>
              <p>The interface is aimed at people shopping for indoor plants. Plant-care and suitability details are presented as part of product selection, alongside the purchasing information.</p>
            </div>
            <dl className="leafora-details-list">
              {projectDetails.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}
            </dl>
          </div>
        </section>

        <section className="case-study-section leafora-section" id="leafora-challenge">
          <div className="section-heading"><span className="section-number">02</span><h2>Shopping for a plant takes more than a picture</h2></div>
          <div className="leafora-problem-panel">
            <span className="leafora-mark"><Leaf size={20} aria-hidden="true" /></span>
            <p>Shoppers need to compare plants, understand care requirements, check the full cost of an order, and know what happens after purchase.</p>
          </div>
          <p className="leafora-evidence-note">This design challenge is inferred from the provided screens. No research findings or user feedback were included with the exports.</p>
        </section>

        <section className="case-study-section leafora-section" id="leafora-journey">
          <div className="section-heading"><span className="section-number">03</span><h2>A shopping journey from discovery to delivery</h2></div>
          <div className="leafora-journey-grid">
            {journey.map(([number, title, detail], index) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{detail}</p>{index < journey.length - 1 && <ArrowRight size={18} aria-hidden="true" />}</article>)}
          </div>
        </section>

        <section className="case-study-section leafora-section" id="leafora-screens">
          <div className="section-heading"><span className="section-number">04</span><h2>The Leafora screens</h2></div>
          <p className="leafora-section-intro">The screens are arranged in the order of the shopping journey, followed by account and order-management views.</p>
          <div className="leafora-screen-groups">
            {screenGroups.map((group) => (
              <article className="leafora-screen-group" key={group.number}>
                <div className="leafora-screen-copy"><span>{group.number}</span><h3>{group.title}</h3><p>{group.description}</p></div>
                <div className={`leafora-screen-gallery ${group.screens.length > 1 ? "is-multi" : ""}`}>
                  {group.screens.map(([file, alt]) => <figure key={file}><img src={`${base}${file}`} alt={alt} loading="lazy" decoding="async" /><figcaption>{alt}</figcaption></figure>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="case-study-section leafora-section" id="leafora-decisions">
          <div className="section-heading"><span className="section-number">05</span><h2>Key UX decisions</h2></div>
          <div className="leafora-decision-grid">
            {uxDecisions.map(([Icon, title, detail]) => <article key={title}><Icon size={22} aria-hidden="true" /><h3>{title}</h3><p>{detail}</p></article>)}
          </div>
        </section>

        <section className="case-study-section leafora-section" id="leafora-system">
          <div className="section-heading"><span className="section-number">06</span><h2>A natural, readable visual language</h2></div>
          <div className="leafora-style-panel">
            <div className="leafora-style-intro"><p className="case-study-kicker">Visual design</p><h3>Plant imagery meets clear shopping details.</h3><p>The screens pair leafy product photography with restrained green accents, light surfaces, serif display headings, and straightforward sans-serif interface text.</p></div>
            <div className="leafora-palette" aria-label="Approximate palette based on the supplied screens">
              <div><span className="leafora-swatch leafora-swatch-forest" /><strong>Forest green</strong></div>
              <div><span className="leafora-swatch leafora-swatch-leaf" /><strong>Leaf green</strong></div>
              <div><span className="leafora-swatch leafora-swatch-sage" /><strong>Soft sage</strong></div>
              <div><span className="leafora-swatch leafora-swatch-paper" /><strong>Warm white</strong></div>
            </div>
          </div>
          <div className="leafora-component-grid">
            {components.map(([title, detail]) => <article key={title}><span><BadgeCheck size={17} aria-hidden="true" /></span><div><h3>{title}</h3><p>{detail}</p></div></article>)}
          </div>
        </section>

        <section className="case-study-section leafora-section leafora-reflection">
          <div className="section-heading"><span className="section-number">07</span><h2>Design reflection</h2></div>
          <p>Leafora brings product discovery and plant care together, then carries the same calm, green visual language into cart, checkout, and post-purchase screens. The design shows how practical information can support a more considered shopping choice without interrupting the purchase journey.</p>
        </section>

        <section className="case-study-footer leafora-footer">
          <div><p className="case-study-kicker">Keep exploring</p><h2>More product design work</h2><p>Return to the project collection or view FixNow, another mobile app concept.</p></div>
          <div className="leafora-footer-actions">
            <PortfolioButton href={figmaUrl} target="_blank">View Figma Design</PortfolioButton>
            <PortfolioButton href={`${import.meta.env.BASE_URL}#/projects/fixnow`} variant="secondary">Next: FixNow</PortfolioButton>
            <PortfolioButton href={`${import.meta.env.BASE_URL}#projects`} variant="secondary">Back to Projects</PortfolioButton>
          </div>
        </section>
      </main>
    </>
  );
}

export default LeaforaCaseStudy;
