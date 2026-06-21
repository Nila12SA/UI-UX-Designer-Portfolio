import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Empathize",
    detail: "Research users, observe behavior, and listen for needs, goals, and frustrations.",
  },
  {
    number: "02",
    title: "Define",
    detail: "Organize insights into a focused problem, audience, scope, and success criteria.",
  },
  {
    number: "03",
    title: "Ideate",
    detail: "Sketch and compare multiple solution paths before committing to one direction.",
  },
  {
    number: "04",
    title: "Prototype",
    detail: "Create testable screens and flows that make the idea tangible and interactive.",
  },
  {
    number: "05",
    title: "Test",
    detail: "Gather feedback, find friction, and refine the experience until it feels clear.",
  },
];

function Process() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      className={`process section-warm ${animate ? "animate-process" : ""}`}
      ref={sectionRef}
    >
      <div className="container reveal">
        <p className="section-label">DESIGN PROCESS</p>
        <h2 className="section-title">From Insight to Refined Experience</h2>
        <div className="process-grid">
          {steps.map((step) => (
            <article className="process-card card" key={step.title} tabIndex={0}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
