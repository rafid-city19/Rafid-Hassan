
import { motion } from "framer-motion";
import { useForm } from "@formspree/react";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  // ========================================
  // FORMSPREE
  // Replace YOUR_FORM_ID with your real
  // Formspree form ID
  // ========================================

  const [state, handleSubmit] = useForm("YOUR_FORM_ID");

  // ========================================
  // SOCIAL LINKS
  // Replace these with your real profiles
  // ========================================

  const socialLinks = [
    {
      name: "GitHub",
      username: "@rafid-city19",
      href: "https://github.com/rafid-city19",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      username: "Rafid Hassan",
      href: "https://www.linkedin.com/in/rafid-hassan-54a23932a/",
      icon: <FaLinkedinIn />,
    },
    {
      name: "Instagram",
      username: "@rafid_hass_an",
      href: "https://www.instagram.com/rafid_hass_an/",
      icon: <FaInstagram />,
    },
  ];

  // ========================================
  // SUCCESS STATE
  // ========================================

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="relative overflow-hidden bg-[#101216] px-6 py-32 md:px-10 md:py-40"
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-[#ff6542] opacity-[0.04] blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* Label */}
          <div className="font-mono-custom text-[11px] tracking-[0.2em] text-zinc-600">
            <span className="mr-3 text-[#ff6542]">04</span>
            CONTACT
          </div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-20 max-w-3xl border border-white/10 bg-[#0b0d10] p-10 md:p-16"
          >
            <span className="font-mono-custom text-[10px] tracking-[0.2em] text-[#ff6542]">
              MESSAGE SENT
            </span>

            <h2 className="mt-8 text-5xl font-extrabold tracking-[-0.05em] text-white md:text-7xl">
              Thanks for
              <br />
              reaching out.
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-7 text-zinc-500">
              Your message has been received successfully.
              I'll get back to you as soon as I can.
            </p>

            <div className="mt-10 flex items-center gap-3 text-xs text-zinc-600">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff6542]" />
              Message received
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // ========================================
  // CONTACT SECTION
  // ========================================

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#101216] px-6 py-32 md:px-10 md:py-40"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-[#ff6542] opacity-[0.04] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ========================================
            SECTION LABEL
        ======================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono-custom text-[11px] tracking-[0.2em] text-zinc-600"
        >
          <span className="mr-3 text-[#ff6542]">04</span>
          CONTACT
        </motion.div>

        {/* ========================================
            HEADING
        ======================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-14"
        >
          <h2 className="max-w-5xl text-6xl font-extrabold leading-[0.88] tracking-[-0.06em] sm:text-7xl md:text-[8.5rem]">
            Have an idea?
            <br />

            <span className="text-transparent [-webkit-text-stroke:1px_#f5f5f5]">
              Let's talk.
            </span>
          </h2>

          <p className="mt-10 max-w-xl text-sm leading-8 text-zinc-500 md:text-base">
            Whether you want to talk about a project,
            technology, collaboration, an idea, or simply
            want to say hello — feel free to reach out.
          </p>
        </motion.div>

        {/* ========================================
            CONTACT GRID
        ======================================== */}

        <div className="mt-20 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">

          {/* ========================================
              CONTACT FORM
          ======================================== */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="border border-white/10 bg-[#0b0d10] p-7 md:p-10"
          >
            <div className="mb-10">
              <p className="font-mono-custom text-[10px] tracking-[0.2em] text-[#ff6542]">
                SEND A MESSAGE
              </p>

              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Tell me a little about what you have in mind.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* NAME */}

              <div>
                <label
                  htmlFor="name"
                  className="font-mono-custom text-[9px] uppercase tracking-[0.2em] text-zinc-600"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="mt-3 w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none placeholder:text-zinc-700 transition focus:border-[#ff6542]"
                />
              </div>

              {/* EMAIL */}

              <div>
                <label
                  htmlFor="email"
                  className="font-mono-custom text-[9px] uppercase tracking-[0.2em] text-zinc-600"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-3 w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none placeholder:text-zinc-700 transition focus:border-[#ff6542]"
                />
              </div>

              {/* MESSAGE */}

              <div>
                <label
                  htmlFor="message"
                  className="font-mono-custom text-[9px] uppercase tracking-[0.2em] text-zinc-600"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your idea..."
                  className="mt-3 w-full resize-none border-b border-white/10 bg-transparent py-3 text-sm leading-7 text-white outline-none placeholder:text-zinc-700 transition focus:border-[#ff6542]"
                />
              </div>

              {/* ERROR */}

              {state.errors && (
                <div className="border border-red-500/20 bg-red-500/5 px-4 py-3 text-xs leading-5 text-red-400">
                  Something went wrong while sending your message.
                  Please check your connection and try again.
                </div>
              )}

              {/* BUTTON */}

              <button
                type="submit"
                disabled={state.submitting}
                className="group mt-3 flex items-center gap-3 rounded-full bg-[#ff6542] px-7 py-4 text-xs font-bold text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(255,101,66,0.15)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {state.submitting ? "Sending..." : "Send Message"}

                {!state.submitting && (
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                )}
              </button>

            </form>
          </motion.div>

          {/* ========================================
              DIRECT EMAIL
          ======================================== */}

          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rafidhasaan19@gmail.com"
            target="_blank"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="group relative flex min-h-[420px] flex-col justify-center overflow-hidden border border-white/10 bg-[#0b0d10] p-7 transition duration-500 hover:border-[#ff6542]/40 md:p-10"
          >

            {/* Glow */}

            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#ff6542] opacity-0 blur-[80px] transition duration-700 group-hover:opacity-20" />

            <div className="relative">

              {/* Top */}

              <div className="flex items-start justify-between">
                <span className="font-mono-custom text-[10px] tracking-[0.2em] text-[#ff6542]">
                  DIRECT EMAIL
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition duration-300 group-hover:border-[#ff6542] group-hover:bg-[#ff6542] group-hover:text-black">
                  ↗
                </span>
              </div>

              {/* Email Content */}

              <div className="mt-16">

                <p className="font-mono-custom text-[9px] uppercase tracking-[0.2em] text-zinc-700">
                  Email me at
                </p>

                <h3 className="mt-4 break-all text-2xl font-bold tracking-tight text-white md:text-3xl">
                  rafidhasaan19@gmail.com
                </h3>

                <p className="mt-4 max-w-sm text-xs leading-6 text-zinc-600">
                  Prefer email? Click anywhere on this card
                  and your default email application will
                  open.
                </p>

              </div>

            </div>
          </motion.a>

        </div>

        {/* ========================================
            SOCIAL LINKS
        ======================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-5 border border-white/10 bg-[#0b0d10]"
        >

          <div className="border-b border-white/10 px-7 py-5">
            <p className="font-mono-custom text-[10px] tracking-[0.2em] text-zinc-600">
              FIND ME ONLINE
            </p>
          </div>

          <div className="grid md:grid-cols-3">

            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between p-7 transition duration-300 hover:bg-white/[0.025] ${
                  index !== socialLinks.length - 1
                    ? "border-b border-white/10 md:border-b-0 md:border-r"
                    : ""
                }`}
              >

                <div className="flex items-center gap-4">

                  {/* ICON */}

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-lg text-zinc-500 transition duration-300 group-hover:border-[#ff6542] group-hover:bg-[#ff6542] group-hover:text-black">
                    {social.icon}
                  </div>

                  {/* INFO */}

                  <div>
                    <p className="text-sm font-bold text-zinc-300 transition group-hover:text-white">
                      {social.name}
                    </p>

                    <p className="mt-1 text-[10px] text-zinc-700">
                      {social.username}
                    </p>
                  </div>

                </div>

                {/* ARROW */}

                <span className="text-zinc-700 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#ff6542]">
                  ↗
                </span>

              </a>
            ))}

          </div>
        </motion.div>

        {/* ========================================
            BOTTOM
        ======================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="mt-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-center"
        >

          <p className="max-w-md text-xs leading-6 text-zinc-700">
            No complicated process. Just send a message
            and let's start a conversation.
          </p>

          <div className="flex items-center gap-3 font-mono-custom text-[9px] uppercase tracking-widest text-zinc-700">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff6542]" />
            Open to conversations
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;
