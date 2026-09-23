import { motion } from "framer-motion";

import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaNpm,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiVite,
  SiReactrouter,
} from "react-icons/si";

import { FiCode, FiDatabase, FiTool, FiArrowUpRight } from "react-icons/fi";

// ========================================
// SKILL GROUPS
// ========================================

const groups = [
  {
    number: "01",
    title: "Frontend",
    description: "Interfaces & experiences",
    icon: <FaReact />,
    skills: [
      {
        name: "React",
        icon: <FaReact />,
      },
      {
        name: "JavaScript",
        icon: <FaJsSquare />,
      },
      {
        name: "HTML",
        icon: <FaHtml5 />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
      },
    ],
  },

  {
    number: "02",
    title: "Backend",
    description: "Logic & APIs",
    icon: <FaNodeJs />,
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs />,
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
      },
      {
        name: "REST APIs",
        icon: <FiCode />,
      },
    ],
  },

  {
    number: "03",
    title: "Database",
    description: "Data & persistence",
    icon: <FiDatabase />,
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb />,
      },
      {
        name: "Mongoose",
        icon: <SiMongoose />,
      },
      {
        name: "CRUD",
        icon: <FiDatabase />,
      },
    ],
  },

  {
    number: "04",
    title: "Tools",
    description: "Development workflow",
    icon: <FiTool />,
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt />,
      },
      {
        name: "GitHub",
        icon: <FaGithub />,
      },
      {
        name: "Vite",
        icon: <SiVite />,
      },
      {
        name: "NPM",
        icon: <FaNpm />,
      },
      {
        name: "React Router",
        icon: <SiReactrouter />,
      },
    ],
  },
];

// ========================================
// SKILLS
// ========================================

function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-7xl overflow-hidden px-6 py-32 md:px-10"
    >
      {/* ========================================
          BACKGROUND DETAILS
      ======================================== */}

      <div className="pointer-events-none absolute right-[-180px] top-32 h-[400px] w-[400px] rounded-full bg-[#ff6542] opacity-[0.025] blur-[120px]" />

      <div className="pointer-events-none absolute left-[-200px] bottom-20 h-[350px] w-[350px] rounded-full bg-[#ff6542] opacity-[0.015] blur-[120px]" />

      {/* ========================================
          SECTION LABEL
      ======================================== */}

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative font-mono-custom text-[11px] tracking-[0.2em] text-zinc-600"
      >
        <span className="mr-3 text-[#ff6542]">02</span>
        SKILLS
      </motion.div>

      {/* ========================================
          HEADING
      ======================================== */}

      <div className="relative mt-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold leading-[0.9] tracking-[-0.05em] sm:text-6xl md:text-8xl"
        >
          My current
          <br />

          <span className="text-zinc-600">
            toolbox.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-sm text-sm leading-7 text-zinc-500"
        >
          The technologies I use to learn, experiment and
          build digital products.
        </motion.p>
      </div>

      {/* ========================================
          DECORATIVE DIVIDER
      ======================================== */}

      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative mt-14 h-px bg-white/10"
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "12%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute left-0 top-0 h-px bg-[#ff6542]"
        />
      </motion.div>

      {/* ========================================
          SKILL GRID
      ======================================== */}

      <div className="relative mt-12 grid overflow-hidden border border-white/10 md:grid-cols-2 lg:grid-cols-4">
        {groups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            className="group relative min-h-[350px] overflow-hidden border-b border-white/10 p-7 transition duration-500 hover:bg-white/[0.025] md:border-r md:last:border-r-0 lg:border-b-0"
          >
            {/* ========================================
                LARGE BACKGROUND ICON
            ======================================== */}

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 0.035, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1 + 0.2,
              }}
              className="pointer-events-none absolute -right-8 bottom-[-15px] text-[170px] text-[#ff6542] transition duration-700 group-hover:scale-110 group-hover:rotate-6 group-hover:opacity-[0.07]"
            >
              {group.icon}
            </motion.div>

            {/* ========================================
                BACKGROUND GLOW
            ======================================== */}

            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#ff6542] opacity-0 blur-[80px] transition duration-700 group-hover:opacity-10" />

            {/* ========================================
                TOP META
            ======================================== */}

            <div className="relative flex items-start justify-between">
              <div>
                <span className="font-mono-custom text-[10px] text-[#ff6542]">
                  {group.number}
                </span>

                <p className="mt-2 font-mono-custom text-[8px] uppercase tracking-[0.18em] text-zinc-800">
                  STACK {group.number}
                </p>
              </div>

              {/* ========================================
                  CATEGORY ICON
              ======================================== */}

              <div className="relative flex h-14 w-14 items-center justify-center">
                {/* Orbit */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full border border-dashed border-white/10"
                />

                {/* Small orange dot */}
                <span className="absolute right-0 top-1 h-1.5 w-1.5 rounded-full bg-[#ff6542] opacity-40 transition duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-xl text-zinc-600 transition duration-500 group-hover:border-[#ff6542]/40 group-hover:bg-[#ff6542]/10 group-hover:text-[#ff6542]">
                  {group.icon}
                </div>
              </div>
            </div>

            {/* ========================================
                CATEGORY
            ======================================== */}

            <div className="relative mt-12">
              <h3 className="text-xl font-bold text-zinc-200 transition duration-300 group-hover:text-white">
                {group.title}
              </h3>

              <p className="mt-2 font-mono-custom text-[9px] uppercase tracking-[0.15em] text-zinc-700">
                {group.description}
              </p>
            </div>

            {/* ========================================
                SKILLS
            ======================================== */}

            <div className="relative mt-8 space-y-2">
              {group.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08 + skillIndex * 0.05,
                  }}
                  className="group/skill flex items-center gap-3 rounded-lg border border-white/[0.07] bg-white/[0.015] px-3 py-2.5 transition duration-300 hover:translate-x-1 hover:border-[#ff6542]/30 hover:bg-[#ff6542]/[0.04]"
                >
                  {/* Skill Icon */}

                  <span className="flex w-5 items-center justify-center text-sm text-zinc-600 transition duration-300 group-hover/skill:text-[#ff6542]">
                    {skill.icon}
                  </span>

                  {/* Skill Name */}

                  <span className="text-xs font-medium text-zinc-500 transition duration-300 group-hover/skill:text-zinc-200">
                    {skill.name}
                  </span>

                  {/* Arrow */}

                  <span className="ml-auto text-[11px] text-zinc-800 opacity-0 transition duration-300 group-hover/skill:translate-x-0.5 group-hover/skill:text-[#ff6542] group-hover/skill:opacity-100">
                    <FiArrowUpRight />
                  </span>
                </motion.div>
              ))}
            </div>

            {/* ========================================
                CARD CORNER DETAIL
            ======================================== */}

            <div className="absolute bottom-4 left-7 flex items-center gap-2 opacity-30 transition duration-500 group-hover:opacity-70">
              <span className="h-1 w-1 rounded-full bg-[#ff6542]" />

              <span className="font-mono-custom text-[7px] uppercase tracking-[0.2em] text-zinc-600">
                Active stack
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ========================================
          BOTTOM NOTE
      ======================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative mt-8 flex items-center gap-3"
      >
        <span className="h-px w-8 bg-[#ff6542]" />

        <p className="font-mono-custom text-[9px] uppercase tracking-[0.2em] text-zinc-700">
          Always learning · Always building
        </p>

        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-xs text-[#ff6542]"
        >
          →
        </motion.span>
      </motion.div>
    </section>
  );
}

export default Skills;