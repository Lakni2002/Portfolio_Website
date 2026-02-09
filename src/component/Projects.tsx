import { useState } from "react";
import { FaGithub } from "react-icons/fa";

import carelinkImg from "../assets/images/projects/carelink.png";
import pawconnectImg from "../assets/images/projects/pawconnect.png";
import bookshopImg from "../assets/images/projects/bookshop.png";
import safepathImg from "../assets/images/projects/safepath.png";


// ✅ Add 2 more images (MAKE SURE these files exist)
// import project3Img from "../assets/images/projects/project3.png";
// import project4Img from "../assets/images/projects/project4.png";

export default function Projects() {
  const [showMore, setShowMore] = useState(false);

  // ✅ Update these links to your real links
  
  const pawconnectRepo = "https://github.com/Lakni2002/PawConnect-Website";
  const project3Repo = "https://github.com/Lakni2002/book-shop-website";
  const project4Repo = "https://github.com/Lakni2002/safepath";

  // (Optional) If you have case study pages/links, put them here
  const carelinkCaseStudy = "https://www.behance.net/gallery/242921189/CareLink-Telemedicine-App-UX-Case-Study";
  const pawconnectCaseStudy = "https://www.behance.net/gallery/243304167/PawConnect-Pet-Adoption-Rescue-UXUI-Case-Study";
  
  const project4CaseStudy = "#";

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-transparent py-24 text-white"
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

        <div className="mt-16 space-y-16">
          {/* =================== CARD 01 =================== */}
          <div className="project-card group relative rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <div className="grid items-center gap-10 p-10 md:grid-cols-2">
              {/* left text */}
              <div>
                <h3 className="text-2xl font-semibold text-white/95">
                  Telemedicine Mobile App
                </h3>

                <p className="mt-5 max-w-md text-sm leading-6 text-white/70">
                  CareLink is a telemedicine mobile app that enables users to
                  consult doctors online, manage appointments, and receive
                  medicine reminders through an AI-powered health assistant,
                  improving access to healthcare in Sri Lanka.
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <a
                    href={carelinkCaseStudy}
                    className="rounded-full bg-white/10 px-10 py-3 text-sm text-white/85 ring-1 ring-white/15 backdrop-blur-md transition group-hover:bg-white/20"
                  >
                    View Case study
                  </a>

                  
                </div>
              </div>

              {/* right image */}
              <div className="flex justify-center md:justify-end">
                <div className="project-img w-full max-w-[500px] overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
                  <img
                    src={carelinkImg}
                    alt="CareLink project"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="project-glow pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
          </div>

          {/* =================== CARD 02 =================== */}
          <div className="project-card group relative rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <div className="grid items-center gap-10 p-10 md:grid-cols-2">
              {/* left image */}
              <div className="order-2 flex justify-center md:order-1 md:justify-start">
                <div className="project-img w-full max-w-[500px] overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
                  <img
                    src={pawconnectImg}
                    alt="PawConnect project"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>

              {/* right text */}
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-semibold text-white/95">
                  Pet adoption website
                </h3>

                <p className="mt-5 max-w-md text-sm leading-6 text-white/70">
                  PawConnect is a pet rescue and adoption platform designed to
                  connect rescued animals with loving homes across Sri Lanka.
                  The website enables users to adopt pets, report stray or
                  injured animals through a live rescue map, volunteer for
                  rescue activities, and support shelters through donations —
                  creating a transparent, community-driven rescue ecosystem.
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <a
                    href={pawconnectCaseStudy}
                    className="rounded-full bg-white/10 px-10 py-3 text-sm text-white/85 ring-1 ring-white/15 backdrop-blur-md transition group-hover:bg-white/20"
                  >
                    View Case study
                  </a>

                  <a
                    href={pawconnectRepo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open PawConnect GitHub repository"
                    className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white/10 text-white/85 ring-1 ring-white/15 backdrop-blur-md transition hover:bg-white/20 hover:scale-105"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="project-glow pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
          </div>

          {/* ✅ Show extra projects only after clicking View More */}
          {showMore && (
            <>
              {/* =================== CARD 03 =================== */}
              <div className="project-card group relative rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                <div className="grid items-center gap-10 p-10 md:grid-cols-2">
                  {/* left text */}
                  <div>
                    <h3 className="text-2xl font-semibold text-white/95">
                      Book Shop Management System
                    </h3>

                    <p className="mt-5 max-w-md text-sm leading-6 text-white/70">
                      Developed a dynamic full-stack book shop web application with a 
                      responsive front-end interface that allows users to browse and 
                      view book details. Implemented an admin panel to manage books and 
                      inventory using CRUD operations. Integrated PHP and MySQL to handle 
                      database-driven content, form validation, and data storage, focusing 
                      on usability, clean UI, and efficient data management.
                    </p>

                    <div className="mt-8 ">
                      

                      <a
                        href={project3Repo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open Project 3 GitHub repository"
                        className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white/10 text-white/85 ring-1 ring-white/15 backdrop-blur-md transition hover:bg-white/20 hover:scale-105"
                      >
                        <FaGithub size={20} />
                      </a>
                    </div>
                  </div>

                  {/* right image */}
                  <div className="flex justify-center md:justify-end">
                    <div className="project-img w-full max-w-[500px] overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
                      <img
                        src={bookshopImg}
                        alt="Book Shop project"
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="project-glow pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              </div>

              {/* =================== CARD 04 =================== */}
              <div className="project-card group relative rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                <div className="grid items-center gap-10 p-10 md:grid-cols-2">
                  {/* left image */}
                  <div className="order-2 flex justify-center md:order-1 md:justify-start">
                    <div className="project-img w-full max-w-[500px] overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
                      <img
                        src={safepathImg}
                        alt="Portfolio UI project"
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>

                  {/* right text */}
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-semibold text-white/95">
                      SafePath–Public Safety Emergency Website
                    </h3>

                    <p className="mt-5 max-w-md text-sm leading-6 text-white/70">
                      SafePath is a concept emergency assistance website designed to support 
                      users during urgent situations. The project emphasizes intuitive navigation, 
                      minimal cognitive load, and clear visual hierarchy to ensure fast access to 
                      critical information and emergency contacts across all devices.
                    </p>

                    <div className="mt-8 flex items-center gap-3">
                      <a
                        href={project4CaseStudy}
                        className="rounded-full bg-white/10 px-10 py-3 text-sm text-white/85 ring-1 ring-white/15 backdrop-blur-md transition group-hover:bg-white/20"
                      >
                        View Case study
                      </a>

                      <a
                        href={project4Repo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open Project 4 GitHub repository"
                        className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white/10 text-white/85 ring-1 ring-white/15 backdrop-blur-md transition hover:bg-white/20 hover:scale-105"
                      >
                        <FaGithub size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-glow pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              </div>
            </>
          )}
        </div>

        {/* ✅ View More button: show ONLY when showMore is false */}
        {!showMore && (
          <div className="mt-20 flex justify-center">
            <button
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
