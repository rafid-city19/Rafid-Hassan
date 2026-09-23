import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-32 md:px-10"
    >
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono-custom text-[11px] tracking-[0.2em] text-zinc-600"
      >
        <span className="mr-3 text-[#ff6542]">01</span>
        ABOUT
      </motion.div>

      {/* Main Heading */}
      <div className="mt-16">
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-6xl text-5xl font-extrabold leading-[0.92] tracking-[-0.055em] sm:text-6xl md:text-8xl"
        >
          Developer by curiosity.
          <br />
          <span className="text-zinc-600">Builder by choice.</span>
        </motion.h2>

        {/* Content */}
        <div className="mt-20 grid gap-14 md:grid-cols-[220px_1fr] md:gap-20">
          {/* Identity Mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex h-36 w-36 items-center justify-center rounded-full border border-white/10"
          >
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-full bg-[#ff6542]/5 blur-2xl" />

            {/* Dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute flex h-28 w-28 items-center justify-center rounded-full border border-dashed border-[#ff6542]/40"
            />

            {/* Initials */}
            <span className="relative text-3xl font-extrabold tracking-[-0.05em]">
              RH
            </span>

            {/* Small accent */}
            <span className="absolute right-2 top-7 h-2 w-2 rounded-full bg-[#ff6542]" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-2xl"
          >
            <p className="text-base leading-8 text-zinc-300 md:text-lg">
              I'm Rafid, a developer from Bangladesh focused on the MERN stack
              and modern web development.
            </p>

            <p className="mt-6 text-base leading-8 text-zinc-500 md:text-lg">
              I enjoy understanding how technology works, experimenting with
              new ideas, and turning those ideas into real, useful projects.
            </p>

            <p className="mt-6 text-base leading-8 text-zinc-500 md:text-lg">
              Alongside development, I'm building{" "}
              <a
                href="https://rivon.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 font-semibold text-white transition-colors duration-300 hover:text-[#ff6542]"
              >
                Rivon
                <span className="inline-block text-xs text-[#ff6542] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>{" "}
              — a long-term technology vision that goes beyond a single
              website or application.
            </p>

            {/* Small bottom detail */}
            <div className="mt-10 flex items-center gap-3 font-mono-custom text-[9px] uppercase tracking-[0.2em] text-zinc-700">
              <span className="h-px w-10 bg-[#ff6542]" />
              <span>Always building</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;