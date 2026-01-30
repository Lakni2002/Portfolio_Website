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
import { SiNextdotjs, SiJavascript } from "react-icons/si";

type Skill = {
  icon: ReactNode;
  label: string;
  colorClass: string;
};

const topSkills: Skill[] = [
  { icon: <FaFigma />, label: "Figma", colorClass: "text-pink-400" },
  { icon: <FaReact />, label: "React", colorClass: "text-cyan-400" },
  { icon: <FaNodeJs />, label: "Node.js", colorClass: "text-green-500" },
  { icon: <FaPhp />, label: "PHP", colorClass: "text-indigo-400" },

  { icon: <FaHtml5 />, label: "HTML", colorClass: "text-orange-500" },
  { icon: <SiJavascript />, label: "JavaScript", colorClass: "text-yellow-300" },
  { icon: <FaCss3Alt />, label: "CSS", colorClass: "text-blue-400" },

  // ✅ Next.js LAST → bottom row
  { icon: <SiNextdotjs />, label: "Next.js", colorClass: "text-white" },
];
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
            {/* ✅ responsive columns so it looks good on mobile */}
            <div className="grid grid-cols-4 sm:grid-cols-4 place-items-center gap-5 md:gap-6">
              {topSkills.map((s, i) => (
                <div
                  key={i}
                  title={s.label}
                  className={[
                    "group grid place-items-center rounded-full",
                    // ✅ responsive circle size
                    "h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14",
                    "bg-white/10 ring-1 ring-white/10 backdrop-blur-md",
                    "transition-all duration-300",
                    "hover:scale-110 hover:bg-white/12",
                    "hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]",
                  ].join(" ")}
                >
                  <span
                    className={[
                      // ✅ responsive icon size
                      "text-lg sm:text-xl md:text-2xl",
                      s.colorClass,
                      "transition",
                      "group-hover:drop-shadow-[0_0_14px_currentColor]",
                    ].join(" ")}
                  >
                    {s.icon}
                  </span>
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
