import type { ReactNode } from "react";
import logo from "../assets/images/logo.png";
import Orb from "./Orb";

// ✅ Icons
import {
  FaFigma,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
} from "react-icons/si";

type Skill = {
  icon: ReactNode;
  label: string;
  colorClass: string;
};

const topSkills: Skill[] = [
  { icon: <FaFigma />, label: "Figma", colorClass: "text-pink-400" },
  { icon: <FaHtml5 />, label: "HTML5", colorClass: "text-orange-500" },
  { icon: <FaCss3Alt />, label: "CSS3", colorClass: "text-blue-400" },
  { icon: <SiJavascript />, label: "JS", colorClass: "text-yellow-300" },
  { icon: <FaReact />, label: "React", colorClass: "text-cyan-400" },
  { icon: <SiNextdotjs />, label: "Next.js", colorClass: "text-white" },
  { icon: <FaPhp />, label: "PHP", colorClass: "text-indigo-400" },
  { icon: <FaNodeJs />, label: "Node.js", colorClass: "text-green-500" },
  
 
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-28 overflow-hidden bg-transparent py-5 text-white md:scroll-mt-32"
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

        <div className="relative mx-auto mt-14 h-[620px] w-full max-w-[1100px] sm:h-[650px] md:h-[600px]">
          {/* ===== TOP ICON CARDS ===== */}
          <div className="absolute left-1/2 top-[20px] w-full max-w-[640px] -translate-x-1/2 px-2">
            <div className="grid grid-cols-2 place-items-center gap-4 sm:grid-cols-4 sm:gap-5">
              {topSkills.map((s, i) => (
                <div
                  key={i}
                  title={s.label}
                  className={[
                    "group flex w-full max-w-[135px] items-center gap-3 rounded-2xl",
                    "border border-white/10 bg-white/[0.08] px-4 py-3",
                    "shadow-[0_12px_35px_rgba(0,0,0,0.18)] backdrop-blur-md",
                    "transition-all duration-300",
                    "hover:-translate-y-1 hover:border-purple-400/40 hover:bg-white/[0.12]",
                    "hover:shadow-[0_0_26px_rgba(168,85,247,0.28)]",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "grid h-9 w-9 shrink-0 place-items-center rounded-xl",
                      "bg-black/25 ring-1 ring-white/10",
                      "text-[22px] sm:text-[23px]",
                      s.colorClass,
                      "transition-all duration-300",
                      "group-hover:scale-110 group-hover:drop-shadow-[0_0_14px_currentColor]",
                    ].join(" ")}
                  >
                    {s.icon}
                  </span>

                  <span className="truncate text-sm font-medium text-white/85 transition-colors duration-300 group-hover:text-white">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ===== ORB CENTER AREA (ONLY INSIDE THIS BOX) ===== */}
          <div className="absolute left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2 sm:top-[68%] md:top-[65%]">
            {/* THIS BOX LIMITS ORB */}
            <div className="relative h-[260px] w-[260px] overflow-hidden rounded-full sm:h-[300px] sm:w-[300px] md:h-[320px] md:w-[320px]">
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
                <div className="grid h-[96px] w-[96px] place-items-center rounded-full bg-black/20 backdrop-blur-md ring-2 ring-purple-500/70 shadow-[0_0_80px_rgba(168,85,247,0.35)] sm:h-[110px] sm:w-[110px] md:h-[120px] md:w-[120px]">
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-[56px] w-[56px] sm:h-[64px] sm:w-[64px] md:h-[70px] md:w-[70px]"
                  />
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