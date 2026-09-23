import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Work", "work"],
  ["Skills", "skills"],
  ["Contact", "contact"],
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.06] bg-[#08090b]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 md:px-10">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="text-xl font-extrabold tracking-[-0.06em]"
        >
          RH<span className="text-[#ff6542]">.</span>
        </Link>

        <nav
          className={`absolute left-0 top-[72px] w-full border-b border-white/10 bg-[#08090b] px-6 py-7 md:static md:flex md:w-auto md:border-0 md:bg-transparent md:p-0 ${
            open ? "block" : "hidden"
          } md:block`}
        >
          <div className="flex flex-col gap-6 md:flex-row md:gap-9">
            {links.map(([label, id]) => (
              <a
                key={id}
                href={`/#${id}`}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-zinc-500 transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>

        <a
          href="/#contact"
          className="hidden rounded-full border border-white/10 px-4 py-2.5 text-xs font-bold transition hover:border-[#ff6542] hover:bg-[#ff6542] hover:text-black md:block"
        >
          Let's Talk <span className="ml-1">↗</span>
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 md:hidden"
          aria-label="Toggle navigation"
        >
          <span className="h-px w-4 bg-white" />
          <span className="h-px w-4 bg-white" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;