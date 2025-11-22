"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import clsx from "clsx";

const links = [
  { label: "Módulos", href: "#modulos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Precios", href: "#precios" },
  { label: "Demo", href: "#demo" }
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [open, setOpen] = useState(false);

  const backgroundColor = useTransform(scrollY, [0, 120, 240], [
    "rgba(12,12,25,0.05)",
    "rgba(12,12,25,0.6)",
    "rgba(12,12,25,0.85)"
  ]);
  const blurAmount = useTransform(scrollY, [0, 200], ["blur(0px)", "blur(12px)"]);
  const shadow = useTransform(scrollY, [0, 200], [
    "0 0 0 rgba(0,0,0,0)",
    "0 12px 35px rgba(0,0,0,0.3)"
  ]);

  const navItems = useMemo(
    () =>
      links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="relative px-3 py-2 text-sm font-medium text-white/80 transition hover:text-white"
          onClick={() => setOpen(false)}
        >
          <span className="relative z-10">{link.label}</span>
          <motion.span
            layoutId="nav-underline"
            className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-gradient-to-r from-primary-400 to-accent-400"
            whileHover={{ scaleX: 1.1 }}
          />
        </Link>
      )),
    []
  );

  return (
    <motion.header
      style={{
        backgroundColor,
        backdropFilter: blurAmount,
        boxShadow: shadow
      }}
      className="fixed inset-x-0 top-0 z-30"
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="group flex items-center gap-2">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-lg font-bold text-white shadow-lg shadow-primary-500/40 transition duration-300 group-hover:scale-105">
            涙
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-semibold tracking-wide text-white">
              Shogun CRM
            </span>
            <span className="text-xs font-medium uppercase text-white/60">
              Dojos Inteligentes
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">{navItems}</div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="#"
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
          >
            Ver video
          </Link>
          <Link
            href="#demo"
            className="rounded-full bg-gradient-to-r from-primary-500 via-primary-400 to-accent-400 px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-primary-500/40 transition hover:-translate-y-0.5 hover:shadow-primary-400/40"
          >
            Reservar demo
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-white/40 hover:text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Abrir menú"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0 }}
        className="md:hidden"
      >
        <div
          className={clsx(
            "space-y-2 border-t border-white/10 px-6 pb-6 pt-4",
            open ? "block" : "hidden"
          )}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#demo"
            className="block rounded-xl bg-gradient-to-r from-primary-500 via-primary-400 to-accent-400 px-4 py-3 text-center text-sm font-semibold text-black shadow-lg shadow-primary-500/30 transition hover:-translate-y-0.5"
            onClick={() => setOpen(false)}
          >
            Reservar demo
          </Link>
        </div>
      </motion.div>
    </motion.header>
  );
}
