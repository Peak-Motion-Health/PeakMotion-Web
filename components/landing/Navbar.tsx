"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Providers",
    href: "#providers",
  },
  {
    label: "Patients",
    href: "#patients",
  },
  {
    label: "Demo",
    href: "#demo",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#DED6C8]/70 bg-[#F7F3EC]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-6">
        {/* Logo */}
        <Link
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm md:h-12 md:w-12">
            <img
              src="/peakmotion-logo.png"
              alt="PeakMotion logo"
              className="h-full w-full object-contain p-1"
            />
          </div>

          <div className="leading-tight">
            <p className="text-lg font-bold tracking-tight text-[#1F2A24] md:text-xl">
              PeakMotion
            </p>
            <p className="hidden text-xs font-medium text-[#6F7F67] sm:block">
              PT software for better clinical flow
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-[#4F5C50] transition hover:text-[#1F2A24]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/early-access"
            className="rounded-full bg-[#1F2A24] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#334238]"
          >
            Join Early Access
          </Link>
        </div>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DED6C8] bg-white shadow-sm transition hover:bg-[#F7F3EC] lg:hidden"
        >
          <span className="relative h-5 w-5">
            <span
              className={`absolute left-0 top-1 block h-0.5 w-5 rounded-full bg-[#1F2A24] transition-all duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2.5 block h-0.5 w-5 rounded-full bg-[#1F2A24] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-4 block h-0.5 w-5 rounded-full bg-[#1F2A24] transition-all duration-300 ${
                menuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-[#DED6C8] bg-[#F7F3EC] transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 py-5">
          <div className="rounded-[1.5rem] border border-[#DED6C8] bg-white p-3 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl px-4 py-3 text-base font-semibold text-[#1F2A24] transition hover:bg-[#F7F3EC]"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-3 border-t border-[#DED6C8] pt-3">
              <Link
                href="/early-access"
                onClick={() => setMenuOpen(false)}
                className="block rounded-full bg-[#1F2A24] px-6 py-4 text-center font-semibold text-white shadow-sm transition hover:bg-[#334238]"
              >
                Join Early Access
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}