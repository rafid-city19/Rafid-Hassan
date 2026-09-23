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
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#101216] to-transparent md:w-40" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#101216] to-transparent md:w-40" />

        <motion.div
          className="flex w-max gap-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {carouselProjects.map((project, index) => (
            <Link
              key={`${project.id}-${index}`}
              to="/projects"
              className="group relative block h-[300px] w-[75vw] max-w-[850px] shrink-0 overflow-hidden border border-white/10 bg-[#101216] transition duration-500 hover:border-[#ff6542]/50 sm:h-[350px] sm:w-[65vw] md:h-[430px] md:w-[55vw]"
            >

              {/* ========================================
                  PROJECT SCREENSHOT
              ======================================== */}

              <img
                src={project.image}
                alt={`${project.title} project screenshot`}
                className="absolute inset-0 h-full w-full object-cover opacity-40 transition duration-700 group-hover:scale-105 group-hover:opacity-50"
              />

              {/* ========================================
                  DARK OVERLAY
              ======================================== */}

              <div className="absolute inset-0 bg-[#101216]/65 transition duration-700 group-hover:bg-[#101216]/55" />

              {/* ========================================
                  ORANGE CENTER GLOW
              ======================================== */}

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,101,66,0.12),transparent_45%)] transition duration-700 group-hover:bg-[radial-gradient(circle_at_center,rgba(255,101,66,0.18),transparent_50%)]" />

              {/* ========================================
                  LARGE PROJECT NUMBER
              ======================================== */}

              <span className="absolute right-6 top-5 z-10 font-mono-custom text-[80px] font-bold leading-none text-white/[0.025] md:text-[120px]">
                {project.number}
              </span>

              {/* ========================================
                  SMALL PROJECT NUMBER
              ======================================== */}

              <span className="absolute left-6 top-6 z-10 font-mono-custom text-xs text-[#ff6542]">
                {project.number}
              </span>

              {/* ========================================
                  ARROW BUTTON
              ======================================== */}

              <span className="absolute right-6 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[#ff6542] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-[#ff6542] group-hover:bg-[#ff6542] group-hover:text-black">
                ↗
              </span>

              {/* ========================================
                  PROJECT TITLE
              ======================================== */}

              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="relative px-8 text-center">

                  <span className="font-mono-custom text-[9px] tracking-[0.25em] text-zinc-400">
                    {project.category}
                  </span>

                  <h3 className="mt-4 text-4xl font-extrabold tracking-[-0.05em] text-white transition duration-500 group-hover:scale-[1.03] sm:text-5xl md:text-7xl">
                    {project.title}
                  </h3>

                  <div className="mx-auto mt-7 h-px w-12 bg-[#ff6542] transition-all duration-500 group-hover:w-24" />

                </div>
              </div>

              {/* ========================================
                  PROJECT DESCRIPTION
              ======================================== */}

              <div className="absolute bottom-6 left-6 z-10 max-w-sm">
                <p className="text-[10px] leading-5 text-zinc-400">
                  {project.description}
                </p>
              </div>

              {/* ========================================
                  TECHNOLOGIES
              ======================================== */}

              <div className="absolute bottom-6 right-6 z-10 hidden max-w-[45%] flex-wrap justify-end gap-2 md:flex">
                {project.technologies
                  .slice(0, 3)
                  .map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[8px] text-zinc-400 backdrop-blur-sm transition group-hover:border-[#ff6542]/30 group-hover:text-zinc-300"
                    >
                      {technology}
                    </span>
                  ))}
              </div>

            </Link>
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