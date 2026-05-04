import { useState } from "react";
import { FaGithub } from "react-icons/fa";

import carelinkImg from "../assets/images/projects/carelink.png";
import pawconnectImg from "../assets/images/projects/pawconnect.png";
import bookshopImg from "../assets/images/projects/bookshop.png";
import safepathImg from "../assets/images/projects/safepath.png";

type Category = "frontend" | "caseStudies" | "blogs";

type WorkItem = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  caseStudyLink?: string;
  repoLink?: string;
  layout: "text-left" | "image-left";
};

const categories: { id: Category; label: string }[] = [
  { id: "caseStudies", label: "UI/UX Case Studies" },
  { id: "frontend", label: "Frontend Websites" },
  { id: "blogs", label: "Blogs" },
];

const frontendProjects: WorkItem[] = [
  {
    title: "Pet Adoption Website",
    description:
      "PawConnect is a pet rescue and adoption platform designed to connect rescued animals with loving homes across Sri Lanka. The website enables users to adopt pets, report stray or injured animals through a live rescue map, volunteer for rescue activities, and support shelters through donations — creating a transparent, community-driven rescue ecosystem.",
    image: pawconnectImg,
    imageAlt: "PawConnect project",
    caseStudyLink:
      "https://www.behance.net/gallery/243304167/PawConnect-Pet-Adoption-Rescue-UXUI-Case-Study",
    repoLink: "https://github.com/Lakni2002/PawConnect-Website",
    layout: "text-left",
  },
  {
    title: "Book Shop Management System",
    description:
      "Developed a dynamic full-stack book shop web application with a responsive front-end interface that allows users to browse and view book details. Implemented an admin panel to manage books and inventory using CRUD operations. Integrated PHP and MySQL to handle database-driven content, form validation, and data storage, focusing on usability, clean UI, and efficient data management.",
    image: bookshopImg,
    imageAlt: "Book Shop project",
    repoLink: "https://github.com/Lakni2002/book-shop-website",
    layout: "image-left",
  },
  {
    title: "SafePath – Public Safety Emergency Website",
    description:
      "SafePath is a concept emergency assistance website designed to support users during urgent situations. The project emphasizes intuitive navigation, minimal cognitive load, and clear visual hierarchy to ensure fast access to critical information and emergency contacts across all devices.",
    image: safepathImg,
    imageAlt: "SafePath project",
    repoLink: "https://github.com/Lakni2002/SafePath-website",
    layout: "text-left",
  },
];

const caseStudies: WorkItem[] = [
  {
    title: "CareLink Telemedicine App UX Case Study",
    description:
      "CareLink is a telemedicine mobile app that enables users to consult doctors online, manage appointments, and receive medicine reminders through an AI-powered health assistant, improving access to healthcare in Sri Lanka.",
    image: carelinkImg,
    imageAlt: "CareLink case study",
    caseStudyLink:
      "https://www.behance.net/gallery/242921189/CareLink-Telemedicine-App-UX-Case-Study",
    layout: "text-left",
  },
  {
    title: "PawConnect Pet Adoption & Rescue UX/UI Case Study",
    description:
      "A UX/UI case study focused on creating a pet adoption and rescue platform with clear user flows, accessible layouts, rescue reporting, donation support, and a community-driven adoption experience.",
    image: pawconnectImg,
    imageAlt: "PawConnect case study",
    caseStudyLink:
      "https://www.behance.net/gallery/243304167/PawConnect-Pet-Adoption-Rescue-UXUI-Case-Study",
    layout: "image-left",
  },
];

const blogs: WorkItem[] = [];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("frontend");
  const [showMore, setShowMore] = useState(false);

  const activeItems =
    activeCategory === "frontend"
      ? frontendProjects
      : activeCategory === "caseStudies"
        ? caseStudies
        : blogs;

  const visibleItems =
    activeCategory === "frontend" && !showMore
      ? activeItems.slice(0, 2)
      : activeItems;

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setShowMore(false);
  };

  return (
    <section
      id="projects"
      className="relative scroll-mt-28 overflow-hidden bg-transparent py-5 text-white md:scroll-mt-32"
    >
      {/* soft glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-240px] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#6b21a8]/18 blur-[160px]" />
        <div className="absolute right-[-120px] top-[20%] h-[520px] w-[520px] rounded-full bg-[#7c3aed]/12 blur-[170px]" />
        <div className="absolute left-[-120px] top-[60%] h-[520px] w-[520px] rounded-full bg-[#3b82f6]/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-center text-4xl font-semibold tracking-wide">
          Projects
        </h2>

        {/* ===== CATEGORY BAR ===== */}
        <div className="mt-10 flex justify-center">
          <div className="flex w-full max-w-[720px] flex-col gap-3 rounded-3xl border border-white/10 bg-white/[0.06] p-2 backdrop-blur-xl sm:flex-row">
            {categories.map((category) => {
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => handleCategoryChange(category.id)}
                  className={[
                    "w-full rounded-2xl px-5 py-3 text-sm font-medium transition-all duration-300",
                    "ring-1 ring-transparent",
                    isActive
                      ? "bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] text-white shadow-[0_16px_45px_rgba(124,58,237,0.35)]"
                      : "bg-white/[0.04] text-white/70 hover:bg-white/[0.1] hover:text-white",
                  ].join(" ")}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-16 space-y-16">
          {visibleItems.length > 0 ? (
            visibleItems.map((item) => {
              const isImageLeft = item.layout === "image-left";

              return (
                <div
                  key={`${activeCategory}-${item.title}`}
                  className="project-card group relative rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
                >
                  <div className="grid items-center gap-10 p-6 sm:p-8 md:grid-cols-2 md:p-10">
                    {/* image left layout */}
                    {isImageLeft && (
                      <div className="order-2 flex justify-center md:order-1 md:justify-start">
                        <div className="project-img w-full max-w-[500px] overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
                          <img
                            src={item.image}
                            alt={item.imageAlt}
                            className="h-auto w-full object-cover"
                          />
                        </div>
                      </div>
                    )}

                    {/* text content */}
                    <div
                      className={
                        isImageLeft ? "order-1 md:order-2" : "order-1"
                      }
                    >
                      <h3 className="text-2xl font-semibold text-white/95">
                        {item.title}
                      </h3>

                      <p className="mt-5 max-w-md text-sm leading-6 text-white/70">
                        {item.description}
                      </p>

                      <div className="mt-8 flex flex-wrap items-center gap-3">
                        {item.caseStudyLink && (
                          <a
                            href={item.caseStudyLink}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full bg-white/10 px-8 py-3 text-sm text-white/85 ring-1 ring-white/15 backdrop-blur-md transition group-hover:bg-white/20 sm:px-10"
                          >
                            View Case study
                          </a>
                        )}

                        {item.repoLink && (
                          <a
                            href={item.repoLink}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Open ${item.title} GitHub repository`}
                            className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white/10 text-white/85 ring-1 ring-white/15 backdrop-blur-md transition hover:bg-white/20 hover:scale-105"
                          >
                            <FaGithub size={20} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* image right layout */}
                    {!isImageLeft && (
                      <div className="order-2 flex justify-center md:justify-end">
                        <div className="project-img w-full max-w-[500px] overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
                          <img
                            src={item.image}
                            alt={item.imageAlt}
                            className="h-auto w-full object-cover"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="project-glow pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                </div>
              );
            })
          ) : (
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] px-6 py-16 text-center backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
              <h3 className="text-2xl font-semibold text-white/95">
                Blogs Coming Soon
              </h3>

              <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-white/65">
                Blog posts will be added here soon. This section is ready to
                display articles, design thoughts, development notes, and case
                study breakdowns.
              </p>
            </div>
          )}
        </div>

        {/* ✅ View More button: only for frontend category when there are hidden items */}
        {activeCategory === "frontend" && !showMore && activeItems.length > 2 && (
          <div className="mt-20 flex justify-center">
            <button
              type="button"
              onClick={() => setShowMore(true)}
              className="rounded-full bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] px-14 py-3 text-sm font-medium shadow-[0_20px_60px_rgba(124,58,237,0.35)] transition hover:brightness-110"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}