const skills = [
  "UI Design",
  "UX Research",
  "Wireframing",
  "Prototyping",
  "Figma",
  "User Testing",
  "Design Systems",
  "Responsive Design",
  "Accessibility Design",
  "Mobile App Design",
  "Web Design",
  "Visual Design",
];

const SkillIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" />
    <path d="M12 8v8" />
    <path d="M8 10l4-2 4 2" />
  </svg>
);

function Skills() {
  return (
    <section id="skills" className="skills section-tint">
      <div className="container reveal">
        <p className="section-label">SKILLS</p>
        <h2 className="section-title">Core Design Capabilities</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-card card" key={skill}>
              <SkillIcon />
              <span>{skill}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;