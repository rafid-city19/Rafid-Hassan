import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { projects } from "../data/projects";

function Work() {
  // Duplicate projects so the carousel can loop continuously
  const carouselProjects = [...projects, ...projects];

  return (
    <section
      id="work"
      className="relative overflow-hidden py-32"
    >
      {/* ========================================
          SECTION HEADER
      ======================================== */}

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono-custom text-[11px] tracking-[0.2em] text-zinc-600"
        >
          <span className="mr-3 text-[#ff6542]">03</span>
          WORK
        </motion.div>

        <div className="mt-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold leading-[0.9] tracking-[-0.05em] sm:text-6xl md:text-8xl"
          >
            Selected
            <br />
            <span className="text-zinc-600">work.</span>
          </motion.h2>

          <Link
            to="/projects"
            className="text-sm font-bold text-[#ff6542] transition hover:text-white"
          >
            See More <span className="ml-2">↗</span>
          </Link>
        </div>
      </div>

      {/* ========================================
          PROJECT CAROUSEL
      ======================================== */}

      <div className="relative mt-16 overflow-hidden">

        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-30 h-full w-20 bg-gradient-to-r from-[#08090b] via-[#08090b]/70 to-transparent md:w-40" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-30 h-full w-20 bg-gradient-to-l from-[#08090b] via-[#08090b]/70 to-transparent md:w-40" />

        <motion.div
          className="flex w-max gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {carouselProjects.map((project, index) => (
            <a
              key={`${project.id}-${index}`}
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block h-[320px] w-[82vw] max-w-[850px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-[#0d0f13] transition-all duration-500 hover:-translate-y-2 hover:border-[#ff6542]/40 hover:shadow-[0_25px_80px_rgba(0,0,0,0.5)] sm:h-[370px] sm:w-[70vw] md:h-[450px] md:w-[58vw]"
            >

              {/* ========================================
                  PROJECT IMAGE BACKGROUND
              ======================================== */}

              <img
                src={project.image}
                alt={`${project.title} project screenshot`}
                className="absolute inset-0 h-full w-full object-cover object-center opacity-70 transition-all duration-1000 ease-out group-hover:scale-105 group-hover:opacity-85"
              />

              {/* ========================================
                  IMAGE DARKENING
              ======================================== */}

              {/* Overall subtle dark layer */}
              <div className="absolute inset-0 bg-black/25 transition duration-700 group-hover:bg-black/15" />

              {/* Bottom readability gradient */}
              <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-[#08090b] via-[#08090b]/65 to-transparent" />

              {/* Top readability gradient */}
              <div className="absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-[#08090b]/55 to-transparent" />

              {/* ========================================
                  ORANGE AMBIENT GLOW
              ======================================== */}

              {/* Center glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(255,101,66,0.16),transparent_42%)] opacity-70 transition-all duration-700 group-hover:bg-[radial-gradient(circle_at_50%_55%,rgba(255,101,66,0.25),transparent_48%)] group-hover:opacity-100" />

              {/* Bottom orange glow */}
              <div className="absolute bottom-0 left-1/2 h-32 w-2/3 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#ff6542]/15 blur-3xl transition duration-700 group-hover:bg-[#ff6542]/25" />

              {/* ========================================
                  PREMIUM INNER BORDER
              ======================================== */}

              <div className="pointer-events-none absolute inset-3 rounded-xl border border-white/10 transition duration-500 group-hover:border-[#ff6542]/20" />

              {/* ========================================
                  PROJECT NUMBER
              ======================================== */}

              <span className="absolute right-7 top-5 z-10 select-none font-mono-custom text-[90px] font-bold leading-none tracking-[-0.08em] text-white/[0.035] transition duration-700 group-hover:text-[#ff6542]/[0.08] md:text-[130px]">
                {project.number}
              </span>

              {/* ========================================
                  SMALL PROJECT NUMBER
              ======================================== */}

              <span className="absolute left-7 top-7 z-20 font-mono-custom text-[10px] tracking-[0.2em] text-[#ff6542]">
                {project.number}
              </span>

              {/* ========================================
                  CATEGORY BADGE
              ======================================== */}

              <span className="absolute right-7 top-7 z-20 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 font-mono-custom text-[8px] tracking-[0.18em] text-zinc-300 backdrop-blur-md transition duration-500 group-hover:border-[#ff6542]/30 group-hover:text-white">
                {project.category}
              </span>

              {/* ========================================
                  ARROW BUTTON
              ======================================== */}

              <span className="absolute right-7 top-16 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/25 text-[#ff6542] backdrop-blur-md transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-[#ff6542] group-hover:bg-[#ff6542] group-hover:text-black">
                ↗
              </span>

              {/* ========================================
                  CENTER PROJECT TITLE
              ======================================== */}

              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="relative max-w-[90%] px-8 text-center">

                  {/* Category */}
                  <span className="font-mono-custom text-[9px] tracking-[0.3em] text-zinc-300/80">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="mt-4 text-4xl font-extrabold tracking-[-0.06em] text-white drop-shadow-2xl transition-all duration-500 group-hover:scale-[1.04] sm:text-5xl md:text-7xl">
                    {project.title}
                  </h3>

                  {/* Orange line */}
                  <div className="mx-auto mt-7 h-px w-10 bg-[#ff6542] shadow-[0_0_15px_rgba(255,101,66,0.8)] transition-all duration-500 group-hover:w-24" />

                  {/* View text */}
                  <div className="mt-5 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span>View project</span>
                    <span className="text-[#ff6542]">↗</span>
                  </div>

                </div>
              </div>

              {/* ========================================
                  PROJECT DESCRIPTION
              ======================================== */}

              <div className="absolute bottom-7 left-7 z-20 max-w-[320px]">
                <p className="text-[10px] leading-5 text-zinc-400 transition duration-500 group-hover:text-zinc-300">
                  {project.description}
                </p>
              </div>

              {/* ========================================
                  TECHNOLOGIES
              ======================================== */}

              <div className="absolute bottom-7 right-7 z-20 hidden max-w-[45%] flex-wrap justify-end gap-2 md:flex">
                {project.technologies.slice(0, 3).map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[8px] text-zinc-400 backdrop-blur-md transition duration-500 group-hover:border-[#ff6542]/30 group-hover:text-zinc-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* ========================================
                  HOVER CORNER GLOW
              ======================================== */}

              <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-[#ff6542] shadow-[0_0_20px_#ff6542] transition-all duration-700 group-hover:w-full" />

            </a>
          ))}
        </motion.div>
      </div>

      {/* ========================================
          BOTTOM INFO
      ======================================== */}

      <div className="mx-auto mt-8 flex max-w-7xl items-center justify-between px-6 md:px-10">

        {/* Selected Projects */}
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#ff6542]" />

          <p className="font-mono-custom text-[9px] uppercase tracking-[0.2em] text-zinc-700">
            Selected projects
          </p>
        </div>

        {/* Auto Scrolling */}
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ff6542]" />

          <span className="font-mono-custom text-[9px] uppercase tracking-[0.2em] text-zinc-700">
            Auto scrolling
          </span>
        </div>

      </div>
    </section>
  );
}

export default Work;