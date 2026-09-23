import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// ========================================
// BUILD ITEMS
// ========================================

const things = [
  {
    title: "Websites",
    number: "01",
    image: "/images/build/websites.jpg",
  },
  {
    title: "Web Applications",
    number: "02",
    image: "/images/build/web-applications.jpg",
  },
  {
    title: "Mobile Applications",
    number: "03",
    image: "/images/build/mobile-applications.jpg",
  },
  {
    title: "Business Systems",
    number: "04",
    image: "/images/build/business-systems.jpg",
  },
  {
    title: "APIs & Backend",
    number: "05",
    image: "/images/build/backend.jpg",
  },
  {
    title: "Automation & AI",
    number: "06",
    image: "/images/build/automation-ai.jpg",
  },
];

// ========================================
// BUILD SLIDER
// ========================================

function BuildSlider() {
  const [active, setActive] = useState(0);

  // ========================================
  // AUTO SLIDE
  // ========================================

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % things.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const current = things[active];

  return (
    <section className="relative overflow-hidden border-y border-white/[0.07] px-6 py-24 md:px-10 md:py-28">

      {/* ========================================
          BACKGROUND
      ======================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-150px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#ff6542] opacity-[0.025] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* ========================================
            TOP BAR
        ======================================== */}

        <div className="flex items-center justify-between">

          <motion.p
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono-custom text-xs tracking-[0.2em] text-[#ff6542]"
          >
            WHAT I BUILD
          </motion.p>

          <div className="flex items-center gap-4">

            <span className="hidden font-mono-custom text-[9px] uppercase tracking-[0.2em] text-zinc-700 sm:block">
              Selected work
            </span>

            <span className="font-mono-custom text-[10px] text-zinc-600">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(things.length).padStart(2, "0")}
            </span>

          </div>
        </div>

        {/* ========================================
            MAIN SLIDER
        ======================================== */}

        <div className="relative flex min-h-[320px] items-center overflow-hidden md:min-h-[390px]">

          {/* ========================================
              IMAGE
          ======================================== */}

          <AnimatePresence mode="wait">

            <motion.div
              key={`image-${active}`}
              initial={{
                opacity: 0,
                scale: 1.08,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 1.03,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute right-0 top-1/2 h-[230px] w-[45%] -translate-y-1/2 overflow-hidden border border-white/10 md:h-[280px] md:w-[38%]"
            >

              {/* Image */}

              <img
                src={current.image}
                alt={current.title}
                className="h-full w-full object-cover grayscale transition duration-700"
              />

              {/* Dark overlay */}

              <div className="absolute inset-0 bg-black/50" />

              {/* Orange overlay */}

              <div className="absolute inset-0 bg-[#ff6542]/[0.06] mix-blend-screen" />

              {/* Left gradient */}

              <div className="absolute inset-0 bg-gradient-to-r from-[#101216] via-transparent to-transparent" />

              {/* Bottom gradient */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#101216]/80 via-transparent to-transparent" />

              {/* Image label */}

              <div className="absolute bottom-5 left-5 flex items-center gap-2">

                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ff6542]" />

                <span className="font-mono-custom text-[8px] uppercase tracking-[0.2em] text-white/50">
                  {current.title}
                </span>

              </div>

            </motion.div>

          </AnimatePresence>

          {/* ========================================
              LARGE BACKGROUND NUMBER
          ======================================== */}

          <AnimatePresence mode="wait">

            <motion.span
              key={`number-${active}`}
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -30,
              }}
              transition={{
                duration: 0.5,
              }}
              className="pointer-events-none absolute right-[25%] top-1/2 -translate-y-1/2 font-mono-custom text-[180px] font-bold leading-none text-white/[0.025] sm:text-[230px] md:text-[300px]"
            >
              {current.number}
            </motion.span>

          </AnimatePresence>

          {/* ========================================
              MAIN HEADING
          ======================================== */}

          <AnimatePresence mode="wait">

            <motion.div
              key={current.title}
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -60,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-10 max-w-5xl"
            >

              {/* Small label */}

              <div className="mb-6 flex items-center gap-3">

                <span className="h-px w-8 bg-[#ff6542]" />

                <span className="font-mono-custom text-[9px] uppercase tracking-[0.2em] text-zinc-700">
                  {current.number} / 06
                </span>

              </div>

              {/* Heading */}

              <h2 className="max-w-5xl text-5xl font-extrabold leading-[0.9] tracking-[-0.055em] text-white sm:text-7xl md:text-9xl">
                {current.title}
              </h2>

            </motion.div>

          </AnimatePresence>

        </div>

        {/* ========================================
            CONTROLS
        ======================================== */}

        <div className="flex items-center justify-between">

          {/* Progress */}

          <div className="flex items-center gap-2">

            {things.map((thing, index) => (
              <button
                key={thing.title}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show ${thing.title}`}
                className="group relative flex h-6 items-center"
              >

                <span
                  className={`h-[3px] transition-all duration-500 ${
                    active === index
                      ? "w-12 bg-[#ff6542]"
                      : "w-6 bg-zinc-800 group-hover:w-9 group-hover:bg-zinc-600"
                  }`}
                />

              </button>
            ))}

          </div>

          {/* Current Item */}

          <AnimatePresence mode="wait">

            <motion.div
              key={active}
              initial={{
                opacity: 0,
                y: 5,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -5,
              }}
              transition={{
                duration: 0.3,
              }}
              className="hidden items-center gap-2 sm:flex"
            >

              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ff6542]" />

              <span className="font-mono-custom text-[9px] uppercase tracking-[0.18em] text-zinc-700">
                {current.title}
              </span>

            </motion.div>

          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}

export default BuildSlider;