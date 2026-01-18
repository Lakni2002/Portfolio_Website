import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png"; // your logo.png

type NavItem = {
  label: string;
  href: string; // #about, #skills...
};

const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("#about");

  // Smooth scroll + active link update
  const handleClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();

    const id = href.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(href);
      history.replaceState(null, "", href);
    }
  };

  // Scrollspy (auto highlight while scrolling)
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((i) => i.href.replace("#", ""));

    const onScroll = () => {
      const offset = 120; // navbar height buffer
      let current = "#about";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) current = `#${id}`;
      }

      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Background bar */}
      <div className="bg-gradient-to-r from-[#130a2a] via-[#1a0b3a] to-[#130a2a] shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
        <nav className="mx-auto flex h-[86px] max-w-6xl items-center px-6">
          {/* Logo */}
          <a
            href="#top"
            onClick={handleClick("#top")}
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-21 w-20 object-contain"

            />
          </a>

          {/* Menu */}
          <ul className="mx-auto hidden items-center gap-10 md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href} className="relative">
                  <a
                    href={item.href}
                    onClick={handleClick(item.href)}
                    className={[
                    "text-[18px] font-semibold tracking-wide transition-all duration-300",
                    isActive
                        ? "text-[#2e79ff]"
                        : "text-white/90 hover:text-[#2e79ff]",
                    ].join(" ")}

                  >
                    {item.label}
                  </a>

                  {/* underline like your design */}
                  <span
                    className={[
                      "absolute left-1/2 -bottom-3 h-[3px] w-10 -translate-x-1/2 rounded-full transition-all",
                      isActive ? "bg-[#2e79ff] opacity-100" : "bg-transparent opacity-0",
                    ].join(" ")}
                  />
                </li>
              );
            })}
          </ul>

          {/* Right spacer (keeps center alignment like your design) */}
          <div className="w-[44px]" />
        </nav>
      </div>
    </header>
  );
}
