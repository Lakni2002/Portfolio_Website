import { useEffect, useState } from "react";
import me from "../assets/images/me.png";

export default function About() {
  // ✅ Typing text animation
  const texts = ["UI/UX Designer", "Front-end Developer"];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[textIndex];
    const speed = isDeleting ? 150 : 200; // delete faster, type slower

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        // pause after typing full word
        if (charIndex + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 900);
        }
      } else {
        setCurrentText(fullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        // move to next text when fully deleted
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-transparent text-white"
    >
      {/* soft glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-240px] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#6b21a8]/25 blur-[120px]" />
        <div className="absolute left-[15%] top-[20%] h-[380px] w-[380px] rounded-full bg-[#3b82f6]/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-[140px] pb-[110px]">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* LEFT: Character */}
          <div className="relative mx-auto w-full max-w-[360px] md:max-w-[420px]">
            <img
              src={me}
              alt="Lakni"
              className="w-full select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]"
            />
          </div>

          {/* RIGHT: Text */}
          <div className="md:pl-4">
            {/* Hello line + SMALL arrow like your reference */}
            <div className="relative mb-6 inline-block">
              <p className="text-[18px] leading-snug text-white/80">
                Hello! I Am{" "}
                <span className="font-semibold text-[#a855f7]">
                  Lakni Weerasinghe
                </span>
              </p>

              {/* Small thin arrow (animated) */}
              <svg
                className="pointer-events-none absolute -left-[150px] top-[6px] h-[60px] w-[140px] hidden md:block"
                viewBox="0 0 140 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M135 10 C95 2, 65 6, 40 18 C20 28, 12 38, 6 48"
                  className="arrow-stroke"
                />

                {/* arrow head */}
                <path d="M6 50 L30 56" className="arrow-stroke" />
                <path d="M6 49 L4 34" className="arrow-stroke" />
              </svg>
            </div>

            {/* ✅ BIG title (keep your same) */}
            <h1 className="min-h-[120px] text-balance text-[44px] font-semibold leading-[1.12] tracking-wide md:min-h-[150px] md:text-[56px]">
              I am a{" "}
              <span className="text-[#a855f7]">
                {currentText}
                <span className="typing-cursor">|</span>
              </span>
            </h1>

            {/* Paragraph */}
            <p className="mt-10 max-w-xl text-[18px] leading-[1.9] text-white/80">
              I’m a UI/UX Designer &amp; Front-End Developer passionate about
              creating modern, user-friendly digital experiences. I design clean
              interfaces and build responsive websites that are both visually
              appealing and easy to use.
            </p>

            {/* Button */}
            <div className="mt-12">
              <a
                href="/CV.pdf"
                download
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-10 py-4 text-[16px] font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
