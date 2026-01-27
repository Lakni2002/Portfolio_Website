import { Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-transparent text-white py-14">
      <div className="mx-auto max-w-6xl px-6">
        {/* Top line */}
        <div className="h-[1px] w-full bg-white/15" />

        <div className="flex flex-col items-center justify-center gap-6 py-10">
          {/* Name */}
          <h3 className="text-lg font-medium text-[#3b82f6]">
            Lakni Weerasinghe
          </h3>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-white/80">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/lakni-weerasinghe-5a4610352/"
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 backdrop-blur-md transition hover:bg-blue-500
              "
            >
              <Linkedin className="h-5 w-5 text-white/90" />
            </a>

            <a
  href="https://www.instagram.com/_li_woof_/"
  target="_blank"
  rel="noreferrer"
  className="group grid h-10 w-10 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 backdrop-blur-md transition
             hover:bg-gradient-to-tr hover:from-[#feda75] hover:via-[#d62976] hover:to-[#4f5bd5] hover:ring-white/20"
>
  <Instagram className="h-5 w-5 text-white/80 transition group-hover:text-white" />
</a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-white/60">
            © 2026 Lakni Weerasinghe — All rights reserved.
          </p>
        </div>

        {/* Bottom line */}
        <div className="h-[1px] w-full bg-white/15" />
      </div>
    </footer>
  );
}
