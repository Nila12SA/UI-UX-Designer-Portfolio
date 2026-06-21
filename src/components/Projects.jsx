const projects = [
  {
    title: "Tripzy",
    subtitle: "Smart Ride Booking Mobile App",
    description:
      "Tripzy is a smart ride-booking mobile application designed with accessibility and inclusive user experience in mind.",
    className: "tripzy",
    route: "/projects/tripzy",
  },
  {
    title: "Aura",
    subtitle: "Stress Relief & Wellness Platform",
    description:
      "Designed a wellness-focused interface to help users manage stress and monitor health indicators.",
    className: "aura",
    route: "/projects/aura",
  },
  {
    title: "BloomCraft",
    subtitle: "Custom Bouquet Builder Website",
    description:
      "Designed an interactive flower selection interface, live bouquet preview section, and elegant floral e-commerce experience.",
    className: "bloomcraft",
    route: "/projects/bloomcraft",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container reveal">
        <h2 className="section-title">UI/UX Case Studies</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card card" key={project.title}>
              <div
                className={`project-thumb ${project.className}`}
                role="img"
                aria-label={`${project.title} ${project.subtitle} thumbnail`}
              >
                <span>{project.title}</span>
              </div>
              <div className="project-body">
                <h3>
                  {project.title} - {project.subtitle}
                </h3>
                <p>{project.description}</p>
                <a href={project.route}>View Case Study</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
