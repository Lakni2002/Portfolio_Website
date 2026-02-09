import { useEffect } from "react";
import Navbar from "./component/Navbar";
import Particles from "./component/Particles";

import About from "./component/About";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Education from "./component/Education";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

// ✅ GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Respect reduced-motion preference
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      // 1) Small intro for the whole page content
      gsap.fromTo(
        ".page-content",
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" }
      );

      // 2) Scroll animations for sections (no need to edit components)
      const sectionIds = ["#about", "#skills", "#projects", "#education", "#contact"];

      sectionIds.forEach((id) => {
        const section = document.querySelector(id);
        if (!section) return;

        // Animate the whole section container
        gsap.fromTo(
          section,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Animate common elements inside each section (titles/cards/images/buttons)
        const innerTargets = section.querySelectorAll(
          "h1, h2, h3, p, img, form, button, a, .project-card, .project-img, .rounded-3xl, .rounded-2xl"
        );

        gsap.fromTo(
          innerTargets,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.06,
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0b0618] text-white overflow-hidden">
      {/* PARTICLES (middle layer) */}
      <div className="fixed inset-0 z-[5] pointer-events-none">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* WEBSITE CONTENT (top layer) */}
      <div className="relative z-10 page-content">
        <Navbar />
        <main className="pt-[86px]">
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
