function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 pb-7 pt-16 md:px-10">
      <div className="flex flex-col justify-between gap-10 md:flex-row">
        <div>
          <div className="text-3xl font-extrabold tracking-[-0.06em]">
            RH<span className="text-[#ff6542]">.</span>
          </div>

          <p className="mt-4 text-xs leading-6 text-zinc-600">
            Developer. Builder.
            <br />
            Always learning.
          </p>
        </div>

        <div className="flex flex-wrap gap-7">
          <a href="/#home" className="text-xs text-zinc-600 hover:text-white">
            Home
          </a>

          <a href="/#about" className="text-xs text-zinc-600 hover:text-white">
            About
          </a>

          <a href="/#work" className="text-xs text-zinc-600 hover:text-white">
            Work
          </a>

          <a href="/#skills" className="text-xs text-zinc-600 hover:text-white">
            Skills
          </a>

          <a
            href="/#contact"
            className="text-xs text-zinc-600 hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="mt-16 flex flex-col justify-between gap-3 border-t border-white/[0.07] pt-5 font-mono-custom text-[9px] text-zinc-700 sm:flex-row">
        <span>© 2026 Rafid Hassan</span>
        <span>Building with Rivon.</span>
      </div>
    </footer>
  );
}

export default Footer;