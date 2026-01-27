import Navbar from "./component/Navbar";
import Particles from "./component/Particles";

import About from "./component/About";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Education from "./component/Education";
import Contact from "./component/Contact";
import Footer from "./component/Footer";



// import SplashCursor from "./components/SplashCursor";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0b0618] text-white overflow-hidden">
      {/* ORB (back layer) */}
      {/* <SplashCursor /> */}
      
      {/* PARTICLES (middle layer, above orb) */}
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
      <div className="relative z-10">
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
