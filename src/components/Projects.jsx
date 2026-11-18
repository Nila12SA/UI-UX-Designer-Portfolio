const projects = [
  {
    title: "Leafora",
    subtitle: "Indoor Plant Shopping Mobile App",
    description:
      "A mobile plant-shopping experience with product care guidance, streamlined checkout, and order tracking.",
    className: "leafora",
    slug: "leafora",
    tags: ["UI/UX Design", "Mobile App", "E-commerce"],
    preview: ["leafora/home.png", "leafora/product-details.png", "leafora/order-confirmation.png"],
  },
  {
    title: "FixNow",
    subtitle: "Home Services Booking Mobile App",
    description:
      "A mobile home-services booking concept for comparing repair professionals and requesting help with confidence.",
    className: "fixnow",
    slug: "fixnow",
    tags: ["UI/UX Design", "Mobile App", "Figma"],
    preview: ["fixnow/home.png", "fixnow/choose-a-plumber.png", "fixnow/request-sent.png"],
  },
  {
    title: "Tripzy",
    subtitle: "Ride Booking & Driver Onboarding App",
    description:
      "A mobile ride-booking concept with accessible ride options and a guided driver sign-up and verification journey.",
    className: "tripzy",
    slug: "tripzy",
    tags: ["UI/UX Design", "Mobile App", "Accessibility"],
    preview: ["tripzy/ride-home.png", "tripzy/earning-choices.png", "tripzy/driver-checklist.png"],
  },
  {
    title: "Aura",
    subtitle: "Stress Relief & Wellness Platform",
    description:
      "A wearable-connected wellness concept that pairs health signals with calming, personalized activity suggestions.",
    className: "aura",
    slug: "aura",
    tags: ["UI/UX Design", "Mobile App", "Wellness"],
    preview: ["aura/connect-device.png", "aura/mind-aura.png", "aura/insights-recommendations.png"],
  },
  {
    title: "BloomCraft",
    subtitle: "Custom Bouquet E-commerce Website",
    description:
      "A floral shopping website introducing a custom bouquet process, clear pricing options, and simple account entry.",
    className: "bloomcraft",
    slug: "bloomcraft",
    tags: ["UI/UX Design", "Web Design", "E-commerce"],
    preview: ["bloomcraft/home.jpg", "bloomcraft/login.jpg", "bloomcraft/register.jpg"],
    previewLayout: "desktop",
  },
];

const getProjectRoute = (slug) => `${import.meta.env.BASE_URL}#/projects/${slug}`;

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container reveal">
        <h2 className="section-title">UI/UX Case Studies</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className={`project-card card ${project.slug === "fixnow" ? "fixnow-project-card" : ""}`} key={project.title}>
              <div
                className={`project-thumb ${project.className}`}
                role="img"
                aria-label={`${project.title} ${project.subtitle} thumbnail`}
              >
                <span>{project.title}</span>
                {project.preview && (
                  <span className={`project-preview-phones ${project.previewLayout === "desktop" ? "is-desktop" : ""}`} aria-hidden="true">
                    {project.preview.map((screen) => (
                      <img src={`${import.meta.env.BASE_URL}${screen}`} alt="" loading="lazy" decoding="async" key={screen} />
                    ))}
                  </span>
                )}
              </div>
              <div className="project-body">
                <h3>
                  {project.title} - {project.subtitle}
                </h3>
                <p>{project.description}</p>
                {project.tags && (
                  <ul className="project-tags" aria-label={`${project.title} project tags`}>
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                )}
                {project.slug ? (
                  <a href={getProjectRoute(project.slug)}>View Case Study</a>
                ) : (
                  <span className="project-link-disabled">Coming Soon</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
