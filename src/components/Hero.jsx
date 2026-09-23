import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pb-20 pt-32 md:px-10 md:pt-36"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(#ffffff 1px, transparent 1px),
            linear-gradient(90deg, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#ff6542] opacity-[0.06] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Small Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <span className="h-2 w-2 rounded-full bg-[#ff6542]" />

          <p className="font-mono-custom text-[10px] uppercase tracking-[0.25em] text-zinc-500">
            MERN Stack Developer
          </p>
        </motion.div>

        {/* Main Hero Grid */}
        <div className="mt-10 grid items-center gap-14 lg:grid-cols-[1fr_390px] xl:grid-cols-[1fr_430px]">
          {/* LEFT SIDE */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[17vw] font-extrabold leading-[0.78] tracking-[-0.075em] sm:text-8xl md:text-[9rem] lg:text-[8rem] xl:text-[10rem]"
            >
              RAFID 
              <br />

              <span className="text-transparent [-webkit-text-stroke:1px_#f5f5f5]">
                Hassan.
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-12 max-w-xl"
            >
              <p className="text-lg font-medium leading-8 text-zinc-300 md:text-xl">
                I build digital products, modern web experiences and
                technology that turns ideas into something real.
              </p>

              <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-600">
                Developer, builder and the person behind Rivon. Currently
                focused on the MERN stack while continuously exploring new
                technologies.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="#work"
                className="rounded-full bg-[#ff6542] px-6 py-3.5 text-xs font-bold text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(255,101,66,0.15)]"
              >
                Explore Work
                <span className="ml-2">↗</span>
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/10 px-6 py-3.5 text-xs font-bold text-white transition duration-300 hover:border-white/30 hover:bg-white/[0.03]"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE — IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[430px]"
          >
            {/* Decorative Number */}
            <div className="absolute -right-3 -top-8 z-10 font-mono-custom text-[10px] tracking-[0.2em] text-zinc-700">
              001 / RAFID
            </div>

            {/* Image Frame */}
            <div className="group relative aspect-[4/5] overflow-hidden border border-white/10 bg-[#0d0f12]">
              {/* YOUR PHOTO */}
              <img
                src="/rafid.jpg"
                alt="Rafid Hassan"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-black/10 transition duration-500 group-hover:bg-black/0" />

              {/* Corner Decorations */}
              <span className="absolute left-0 top-0 h-8 w-px bg-[#ff6542]" />
              <span className="absolute left-0 top-0 h-px w-8 bg-[#ff6542]" />

              <span className="absolute bottom-0 right-0 h-8 w-px bg-[#ff6542]" />
              <span className="absolute bottom-0 right-0 h-px w-8 bg-[#ff6542]" />
            </div>

            {/* Image Caption */}
            <div className="mt-4 flex items-center justify-between">
              <span className="font-mono-custom text-[9px] uppercase tracking-[0.2em] text-zinc-700">
                Developer / Builder
              </span>

              <span className="font-mono-custom text-[9px] text-[#ff6542]">
                2026
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-6 hidden items-center gap-3 font-mono-custom text-[9px] tracking-widest text-zinc-700 md:left-10 md:flex"
      >
        SCROLL TO EXPLORE
        <span className="h-px w-12 bg-zinc-800" />
      </motion.div>
    </section>
  );
}

export default Hero;