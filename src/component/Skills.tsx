import logo from "../assets/images/logo.png";
import Orb from "./Orb";

// your top icons
import figma from "../assets/images/skills/figma.png";
import react from "../assets/images/skills/react.png";
import csharp from "../assets/images/skills/csharp.png";
import node from "../assets/images/skills/node.png";
import php from "../assets/images/skills/php.png";
import next from "../assets/images/skills/next.png";
import html from "../assets/images/skills/html.png";
import ai from "../assets/images/skills/ai.png";
import js from "../assets/images/skills/js.png";
import css from "../assets/images/skills/css.png";

const topIcons = [figma, react, csharp, node, php, next, html, ai, js, css];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-transparent py-24 text-white"
    >
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-240px] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#6b21a8]/18 blur-[150px]" />
        <div className="absolute left-[16%] top-[35%] h-[420px] w-[420px] rounded-full bg-[#3b82f6]/10 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-center text-[44px] font-semibold tracking-wide">
          Skills
        </h2>

        <div className="relative mx-auto mt-14 h-[560px] w-full max-w-[1100px]">
          {/* ===== TOP ICONS ===== */}
          <div className="absolute left-1/2 top-[30px] -translate-x-1/2">
            <div className="grid grid-cols-5 gap-5 place-items-center md:gap-6">
              {topIcons.map((src, i) => (
                <div
                  key={i}
                  className="grid h-[46px] w-[46px] place-items-center rounded-full bg-white/10 ring-1 ring-white/10 backdrop-blur-md transition hover:scale-110"
                >
                  <img src={src} alt="skill" className="h-6 w-6" />
                </div>
              ))}
            </div>
          </div>

         {/* ===== ORB CENTER AREA (ONLY INSIDE THIS BOX) ===== */}
<div className="absolute left-1/2 top-[65%] -translate-x-1/2 -translate-y-1/2">
  {/* THIS BOX LIMITS ORB */}
  <div className="relative h-[320px] w-[320px] overflow-hidden rounded-full">
    {/* Orb background */}
    <Orb
      hoverIntensity={1.5}
      rotateOnHover={true}
      hue={260}
      forceHoverState={false}
      backgroundColor="transparent"
    />

    {/* Your logo on top */}
    <div className="absolute inset-0 grid place-items-center">
      <div className="grid h-[120px] w-[120px] place-items-center rounded-full bg-black/20 backdrop-blur-md ring-2 ring-purple-500/70 shadow-[0_0_80px_rgba(168,85,247,0.35)]">
        <img src={logo} alt="Logo" className="h-[70px] w-[70px]" />
      </div>
    </div>
  </div>
</div>
          {/* ===== END ORB CENTER AREA ===== */}
        </div>
      </div>
    </section>
  );
}
