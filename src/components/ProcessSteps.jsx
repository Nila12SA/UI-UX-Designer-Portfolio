import { Ear, FileText, Hammer, Search, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Empathize",
    description:
      "Understanding user goals, motivations, frustrations, and behaviors through research and observation.",
    icon: Ear,
  },
  {
    number: "02",
    title: "Define",
    description:
      "Transforming research findings into clear problem statements and actionable opportunities.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Ideate",
    description:
      "Exploring multiple concepts and innovative solutions through sketching and structured ideation.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Prototype",
    description:
      "Converting ideas into interactive experiences that can be tested, refined, and improved.",
    icon: Hammer,
  },
  {
    number: "05",
    title: "Test",
    description:
      "Validating design decisions with users and improving through iterative feedback.",
    icon: Search,
  },
];

function ProcessSteps() {
  return (
    <div className="luxury-process" aria-label="UX design process">
      <svg className="luxury-process-line" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M29 6 C28 15, 28 21, 58 26 C80 31, 59 41, 34 47 C13 52, 38 60, 62 68 C86 76, 53 82, 44 88" />
      </svg>

      {steps.map((step) => {
        const Icon = step.icon;
        return (
          <article className="stone-step" key={step.title}>
            <div className="stone-tablet">
              <span>{step.number}</span>
              <Icon aria-hidden="true" />
              <strong>{step.title}</strong>
            </div>
            <div className="process-detail">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ProcessSteps;
