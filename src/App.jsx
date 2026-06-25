import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import AuraCaseStudy from "./components/AuraCaseStudy.jsx";
import TripzyCaseStudy from "./components/TripzyCaseStudy.jsx";

const portfolioHashes = ["#home", "#about", "#skills", "#projects", "#contact"];
const basePath = import.meta.env.BASE_URL;

const getInitialRoute = () => {
  if (
    window.location.hash === "#/projects/aura" ||
    window.location.pathname === `${basePath}projects/aura`
  ) {
    return "aura";
  }

  if (
    window.location.hash === "#/projects/tripzy" ||
    window.location.pathname === `${basePath}projects/tripzy`
  ) {
    return "tripzy";
  }

  return "home";
};

function App() {
  const [route, setRoute] = useState(getInitialRoute);
  const isAuraCaseStudy = route === "aura";
  const isTripzyCaseStudy = route === "tripzy";
  const isCaseStudy = isAuraCaseStudy || isTripzyCaseStudy;

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#/projects/aura") {
        setRoute("aura");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      if (window.location.hash === "#/projects/tripzy") {
        setRoute("tripzy");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      if (portfolioHashes.includes(window.location.hash)) {
        if (window.location.pathname !== basePath) {
          window.history.replaceState(null, "", `${basePath}${window.location.hash}`);
        }
        setRoute("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (route !== "home" || !portfolioHashes.includes(window.location.hash)) return;

    window.requestAnimationFrame(() => {
      const section = document.getElementById(window.location.hash.slice(1));
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [route]);

  useEffect(() => {
    if (isCaseStudy) return undefined;

    const revealItems = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [isCaseStudy]);

  if (isAuraCaseStudy) {
    return <AuraCaseStudy />;
  }

  if (isTripzyCaseStudy) {
    return <TripzyCaseStudy />;
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
