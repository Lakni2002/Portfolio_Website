import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { Menu, X } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
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
  const [open, setOpen] = useState(false);

  const handleClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();

    const id = href.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(href);
      history.replaceState(null, "", href);
    }

    // close menu on mobile after clicking
    setOpen(false);
  };

  // Scrollspy
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((i) => i.href.replace("#", ""));

    const onScroll = () => {
      const offset = 120;
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

  // Prevent background scroll when menu open (mobile)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white/5 backdrop-blur-md border-b border-white/10">
        <nav className="mx-auto flex h-[86px] max-w-6xl items-center px-6">
          {/* Logo */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActive("#about");
            }}
            className="flex items-center gap-3"
          >
            <img src={logo} alt="Logo" className="h-20 w-20 object-contain" />
          </a>

          {/* Desktop Menu */}
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

                  <span
                    className={[
                      "absolute left-1/2 -bottom-3 h-[3px] w-10 -translate-x-1/2 rounded-full transition-all",
                      isActive
                        ? "bg-[#2e79ff] opacity-100"
                        : "bg-transparent opacity-0",
                    ].join(" ")}
                  />
                </li>
              );
            })}
          </ul>

          {/* Mobile button */}
          <div className="ml-auto md:hidden">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 backdrop-blur-md transition hover:bg-white/10"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Right spacer for desktop alignment */}
          <div className="hidden md:block w-[44px]" />
        </nav>

        {/* Mobile dropdown panel */}
        {open && (
          <div className="md:hidden border-t border-white/10 bg-black/40 backdrop-blur-md">
            <ul className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.href;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={handleClick(item.href)}
                      className={[
                        "block rounded-xl px-4 py-3 text-[16px] font-semibold transition",
                        isActive
                          ? "bg-white/10 text-[#2e79ff]"
                          : "text-white/90 hover:bg-white/5 hover:text-[#2e79ff]",
                      ].join(" ")}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
