import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import AuraCaseStudy from "./pages/AuraCaseStudy.jsx";
import TripzyCaseStudy from "./pages/TripzyCaseStudy.jsx";
import BloomcraftCaseStudy from "./pages/BloomcraftCaseStudy.jsx";

const basePath = import.meta.env.BASE_URL;
const portfolioHashes = ["#home", "#about", "#skills", "#projects", "#contact"];
const projectRoutes = {
  aura: "#/projects/aura",
  tripzy: "#/projects/tripzy",
  bloomcraft: "#/projects/bloomcraft",
};

const getProjectRoute = () => {
  const currentHash = window.location.hash;
  const currentPath = window.location.pathname;

  return Object.entries(projectRoutes).find(
    ([slug, hash]) => currentHash === hash || currentPath === `${basePath}projects/${slug}`
  )?.[0];
};

const getInitialRoute = () => getProjectRoute() || "home";

function App() {
  const [route, setRoute] = useState(getInitialRoute);
  const isAuraCaseStudy = route === "aura";
  const isTripzyCaseStudy = route === "tripzy";
  const isBloomcraftCaseStudy = route === "bloomcraft";
  const isCaseStudy = isAuraCaseStudy || isTripzyCaseStudy || isBloomcraftCaseStudy;

  useEffect(() => {
    const handleHashChange = () => {
      const projectRoute = getProjectRoute();
      if (projectRoute) {
        setRoute(projectRoute);
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
    const projectRoute = getProjectRoute();

    if (projectRoute && window.location.hash !== projectRoutes[projectRoute]) {
      window.history.replaceState(null, "", `${basePath}${projectRoutes[projectRoute]}`);
    }
  }, []);

  useEffect(() => {
    if (route !== "home" || !portfolioHashes.includes(window.location.hash)) return undefined;

    const scrollToHashSection = () => {
      const section = document.getElementById(window.location.hash.slice(1));
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const frameId = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(scrollToHashSection);
    });
    const timeoutId = window.setTimeout(scrollToHashSection, 180);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(timeoutId);
    };
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

  if (isBloomcraftCaseStudy) {
    return <BloomcraftCaseStudy />;
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

