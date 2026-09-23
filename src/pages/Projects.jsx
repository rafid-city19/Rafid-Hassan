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

        <section className="mt-24 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group overflow-hidden border border-white/10 bg-[#101216] transition duration-500 hover:-translate-y-1 hover:border-[#ff6542]/40"
            >

              {/* ========================================
                  PROJECT IMAGE
              ======================================== */}

              <div className="relative h-72 overflow-hidden">

                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/45 transition duration-500 group-hover:bg-black/30" />

                {/* Orange gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,101,66,0.15),transparent_55%)]" />

                {/* Project number */}
                <span className="absolute left-6 top-6 z-10 font-mono-custom text-xs text-[#ff6542]">
                  {project.number}
                </span>

                {/* Arrow */}
                <span className="absolute right-6 top-5 z-10 text-2xl text-zinc-300 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#ff6542]">
                  ↗
                </span>

              </div>

              {/* ========================================
                  PROJECT INFORMATION
              ======================================== */}

              <div className="p-7">

                {/* Category */}
                <p className="font-mono-custom text-[10px] uppercase tracking-widest text-[#ff6542]">
                  {project.category}
                </p>

                {/* Title */}
                <h2 className="mt-3 text-2xl font-bold transition duration-300 group-hover:text-[#ff6542]">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-zinc-500">
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