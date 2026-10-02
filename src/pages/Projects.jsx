import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { projects } from "../data/projects";

function Projects() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#08090b] text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 pb-24 pt-40 md:px-10">

        {/* ========================================
            PAGE HEADER
        ======================================== */}

        <section className="max-w-4xl">
          <p className="font-mono-custom text-xs tracking-[0.2em] text-[#ff6542]">
            SELECTED WORK
          </p>

          <h1 className="mt-6 text-6xl font-extrabold leading-[0.88] tracking-[-0.06em] sm:text-7xl md:text-9xl">
            Things I've
            <br />
            <span className="text-transparent [-webkit-text-stroke:1px_#f5f5f5]">
              built.
            </span>
          </h1>

          <p className="mt-10 max-w-lg leading-8 text-zinc-500">
            A collection of projects I've built while learning,
            experimenting and turning ideas into real digital products.
          </p>
        </section>

        {/* ========================================
            PROJECT GRID
        ======================================== */}

        <section className="mt-24 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group overflow-hidden border border-white/10 bg-[#101216] transition-all duration-500 hover:-translate-y-2 hover:border-[#ff6542]/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            >

              {/* ========================================
                  PROJECT IMAGE
              ======================================== */}

              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                aria-label={`View ${project.title}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0c0d10]">

                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/35 transition duration-500 group-hover:bg-black/20" />

                  {/* Bottom Gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Orange Glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,101,66,0.15),transparent_60%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Project Number */}
                  <span className="absolute left-6 top-6 z-10 font-mono-custom text-xs tracking-wider text-[#ff6542]">
                    {project.number}
                  </span>

                  {/* Category */}
                  <span className="absolute right-6 top-6 z-10 border border-white/15 bg-black/30 px-3 py-1.5 font-mono-custom text-[9px] tracking-[0.15em] text-zinc-300 backdrop-blur-sm">
                    {project.category}
                  </span>

                  {/* View Project */}
                  <div className="absolute bottom-6 left-6 z-10 flex translate-y-3 items-center gap-2 text-xs font-medium text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-base backdrop-blur-sm">
                      ↗
                    </span>

                    <span>
                      View Project
                    </span>

                  </div>
                </div>
              </a>

              {/* ========================================
                  PROJECT INFORMATION
              ======================================== */}

              <div className="p-7">

                {/* Title + Arrow */}
                <div className="flex items-start justify-between gap-4">

                  <div>
                    <p className="font-mono-custom text-[10px] uppercase tracking-widest text-[#ff6542]">
                      {project.category}
                    </p>

                    <h2 className="mt-3 text-2xl font-bold transition duration-300 group-hover:text-[#ff6542]">
                      {project.title}
                    </h2>
                  </div>

                  {/* Project Arrow */}
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="mt-1 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-lg text-zinc-500 transition duration-300 hover:border-[#ff6542]/50 hover:bg-[#ff6542] hover:text-black"
                  >
                    ↗
                  </a>

                </div>

                {/* Description */}
                <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-zinc-500 transition duration-300 group-hover:border-[#ff6542]/30 group-hover:text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* ========================================
                    GITHUB
                ======================================== */}

                {project.githubUrl && (
                  <div className="mt-7 border-t border-white/10 pt-6">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-xs font-semibold text-zinc-300 transition duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white"
                    >
                      GitHub
                      <span>↗</span>
                    </a>
                  </div>
                )}

              </div>
            </motion.article>
          ))}
        </section>

        {/* ========================================
            BACK HOME
        ======================================== */}

        <Link
          to="/"
          className="mt-16 inline-block text-sm font-semibold text-[#ff6542] transition hover:text-white"
        >
          ← Back Home
        </Link>

      </main>

      <Footer />
    </div>
  );
}

export default Projects;