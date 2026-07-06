import {
  FaDraftingCompass,
  FaLayerGroup,
  FaPalette,
  FaSearch,
  FaUniversalAccess,
  FaVial,
} from "react-icons/fa";
import {
  MdDashboardCustomize,
  MdDevices,
  MdPhoneIphone,
  MdTouchApp,
  MdWeb,
} from "react-icons/md";
import { SiFigma } from "react-icons/si";

const skills = [
  { title: "UI Design", icon: MdDashboardCustomize },
  { title: "UX Research", icon: FaSearch },
  { title: "Wireframing", icon: FaDraftingCompass },
  { title: "Prototyping", icon: MdTouchApp },
  { title: "Figma", icon: SiFigma },
  { title: "User Testing", icon: FaVial },
  { title: "Design Systems", icon: FaLayerGroup },
  { title: "Responsive Design", icon: MdDevices },
  { title: "Accessibility Design", icon: FaUniversalAccess },
  { title: "Mobile App Design", icon: MdPhoneIphone },
  { title: "Web Design", icon: MdWeb },
  { title: "Visual Design", icon: FaPalette },
];

function Skills() {
  return (
    <section id="skills" className="skills section-tint">
      <div className="container reveal">
        <p className="section-label">SKILLS</p>
        <h2 className="section-title">Core Design Capabilities</h2>

        <div className="skills-grid">
          {skills.map(({ title, icon: Icon }) => (
            <article className="skill-card card" key={title}>
              <Icon aria-hidden="true" />
              <span>{title}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;