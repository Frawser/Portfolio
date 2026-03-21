"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Background() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <section
      id="background"
      className={`max-w-[60%] mx-auto py-20 flex flex-col md:flex-row items-center gap-12 transition-colors duration-500`}
    >
      <div className="flex-1 space-y-4 text-center md:text-left">
        <h4
          className={`${isDark ? "text-cyan-300" : "text-black"} text-3xl font-semibold`}
        >
          My Story
        </h4>
        <p
          className={`${isDark ? "text-white/80" : "text-black/80"} leading-relaxed text-lg`}
        >
          Hi, I&apos;m{" "}
          <span className="font-semibold">Mikael Fernandez Olsson</span>.
          Computers have had me hooked since I was old enough to use a mouse. I
          just always wanted to know what was going on behind the screen. That
          turned into building my own PCs, a two-year frontend YH program, a
          3-month internship at Fieldstream where I got hands-on with modern
          tech and AI in real workflows, a 6-month internship and a bootcamp at
          Lexicon. I&apos;m now ready for my first real step into tech and
          genuinely excited to build things, learn fast, and contribute to a
          team that cares about good work.
        </p>

        <Link href="#contact">
          <button
            className={`mt-6 px-6 py-3 rounded-full border transition-all duration-300 font-semibold shadow-sm
              ${
                isDark
                  ? "border-cyan-300 text-cyan-300 hover:bg-cyan-400/10"
                  : "border-black text-black hover:bg-black hover:text-white"
              }`}
          >
            Contact Me
          </button>
        </Link>
      </div>

      <div className="flex-1 flex justify-end">
        <Image
          src="/mikael.jpg"
          alt="Portrait of Mikael Fernandez Olsson"
          width={350}
          height={350}
          className={`rounded-2xl shadow-lg object-cover border transition-transform duration-500 hover:scale-105
            ${isDark ? "border-cyan-900" : "border-black-100"}`}
        />
      </div>
    </section>
  );
}
