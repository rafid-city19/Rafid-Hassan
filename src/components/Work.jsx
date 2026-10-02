import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { projects } from "../data/projects";

function Work() {
  const carouselProjects = [...projects, ...projects];

  return (
    <section
      id="work"
      className="relative overflow-hidden py-32"
    >
      {/* =========================
          SECTION HEADER
      ========================== */}
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

      {/* =========================
          PROJECT CAROUSEL
      ========================== */}
      <div className="relative mt-16 overflow-hidden">

        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-30 h-full w-20 bg-gradient-to-r from-[#08090b] via-[#08090b]/80 to-transparent md:w-40" />

        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-30 h-full w-20 bg-gradient-to-l from-[#08090b] via-[#08090b]/80 to-transparent md:w-40" />

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
              className="group relative block h-[320px] w-[82vw] max-w-[850px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-[#0d0f13] transition-all duration-500 hover:-translate-y-2 hover:border-[#ff6542]/40 hover:shadow-[0_25px_80px_rgba(0,0,0,0.55)] sm:h-[370px] sm:w-[70vw] md:h-[450px] md:w-[58vw]"
            >

              {/* =========================
                  PROJECT SCREENSHOT
              ========================== */}
              <img
                src={project.image}
                alt={`${project.title} project screenshot`}
                className="absolute inset-0 h-full w-full object-cover object-center opacity-75 transition-all duration-1000 ease-out group-hover:scale-105 group-hover:opacity-95"
              />

              {/* Clean dark overlay */}
              <div className="absolute inset-0 bg-black/20 transition duration-700 group-hover:bg-black/10" />

              {/* Bottom readability gradient */}
              <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#08090b] via-[#08090b]/60 to-transparent" />

              {/* Top subtle gradient */}
              <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-[#08090b]/50 to-transparent" />

              {/* =========================
                  SUBTLE ORANGE EDGE LIGHT
              ========================== */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                <div className="absolute left-0 top-1/2 h-32 w-1 -translate-y-1/2 bg-[#ff6542] blur-[3px]" />

                <div className="absolute right-0 top-1/2 h-32 w-1 -translate-y-1/2 bg-[#ff6542] blur-[3px]" />
              </div>

              {/* =========================
                  INNER BORDER
              ========================== */}
              <div className="pointer-events-none absolute inset-3 rounded-xl border border-white/10 transition duration-500 group-hover:border-[#ff6542]/25" />

              {/* =========================
                  LARGE NUMBER
              ========================== */}
              <span className="absolute right-7 top-5 z-10 select-none font-mono-custom text-[90px] font-bold leading-none tracking-[-0.08em] text-white/[0.035] transition duration-700 group-hover:text-[#ff6542]/[0.06] md:text-[130px]">
                {project.number}
              </span>

              {/* Small number */}
              <span className="absolute left-7 top-7 z-20 font-mono-custom text-[10px] tracking-[0.2em] text-[#ff6542]">
                {project.number}
              </span>

              {/* Category */}
              <span className="absolute right-7 top-7 z-20 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 font-mono-custom text-[8px] tracking-[0.18em] text-zinc-300 backdrop-blur-md transition duration-500 group-hover:border-[#ff6542]/30 group-hover:text-white">
                {project.category}
              </span>

              {/* Arrow */}
              <span className="absolute right-7 top-16 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/35 text-[#ff6542] backdrop-blur-md transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-[#ff6542] group-hover:bg-[#ff6542] group-hover:text-black">
                ↗
              </span>

              {/* =========================
                  CENTER CONTENT
              ========================== */}
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="relative max-w-[90%] px-8 text-center">

                  <span className="font-mono-custom text-[9px] tracking-[0.3em] text-zinc-300/80">
                    {project.category}
                  </span>

                  <h3 className="mt-4 text-4xl font-extrabold tracking-[-0.06em] text-white drop-shadow-2xl transition-all duration-500 group-hover:scale-[1.04] sm:text-5xl md:text-7xl">
                    {project.title}
                  </h3>

                  {/* Orange line */}
                  <div className="mx-auto mt-7 h-px w-10 bg-[#ff6542] shadow-[0_0_12px_rgba(255,101,66,0.5)] transition-all duration-500 group-hover:w-24" />

                  {/* View project */}
                  <div className="mt-5 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span>View project</span>
                    <span className="text-[#ff6542]">↗</span>
                  </div>
                </div>
              </div>

              {/* =========================
                  DESCRIPTION
              ========================== */}
              <div className="absolute bottom-7 left-7 z-20 max-w-[320px]">
                <p className="text-[10px] leading-5 text-zinc-400 transition duration-500 group-hover:text-zinc-300">
                  {project.description}
                </p>
              </div>

              {/* =========================
                  TECHNOLOGIES
              ========================== */}
              <div className="absolute bottom-7 right-7 z-20 hidden max-w-[45%] flex-wrap justify-end gap-2 md:flex">
                {project.technologies.slice(0, 3).map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[8px] text-zinc-400 backdrop-blur-md transition duration-500 group-hover:border-[#ff6542]/30 group-hover:text-zinc-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* =========================
                  BOTTOM ORANGE LINE
              ========================== */}
              <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-[#ff6542] shadow-[0_0_18px_rgba(255,101,66,0.7)] transition-all duration-700 group-hover:w-full" />

            </a>
          ))}
        </motion.div>
      </div>

      {/* =========================
          BOTTOM INFO
      ========================== */}
      <div className="mx-auto mt-8 flex max-w-7xl items-center justify-between px-6 md:px-10">

        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#ff6542]" />

          <p className="font-mono-custom text-[9px] uppercase tracking-[0.2em] text-zinc-700">
            Selected projects
          </p>
        </div>

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