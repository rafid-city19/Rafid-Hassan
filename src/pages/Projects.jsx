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
              className="group overflow-hidden border border-white/10 bg-[#101216] transition hover:-translate-y-1 hover:border-[#ff6542]/40"
            >
              <div className="flex h-72 items-start justify-between bg-[radial-gradient(circle_at_center,rgba(255,101,66,0.13),transparent_45%),#0c0d10] p-6">
                <span className="font-mono-custom text-xs text-[#ff6542]">
                  {project.number}
                </span>

                <span className="text-2xl text-zinc-600 transition group-hover:text-[#ff6542]">
                  ↗
                </span>
              </div>

              <div className="p-7">
                <p className="font-mono-custom text-[10px] uppercase tracking-widest text-[#ff6542]">
                  {project.category}
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  {project.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-500">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-zinc-500"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </section>

        <Link
          to="/"
          className="mt-16 inline-block text-sm font-semibold text-[#ff6542]"
        >
          ← Back Home
        </Link>
      </main>

      <Footer />
    </div>
  );
}

export default Projects;