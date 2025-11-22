"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo } from "react";
import { SparklesIcon, PlayCircleIcon } from "@heroicons/react/24/solid";
import { Icon } from "./Icon";
import { features } from "@/lib/data";

const heroFeatureIndex = [0, 1, 3];

export function Hero() {
  const spotlightFeatures = useMemo(
    () => heroFeatureIndex.map((index) => features[index]),
    []
  );

  return (
    <section className="relative pt-28 md:pt-32">
      <div className="absolute inset-x-0 top-0 -z-10 flex justify-center">
        <div className="h-[680px] w-[680px] rounded-full bg-gradient-to-b from-primary-500/30 via-primary-500/5 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-[1fr,0.75fr] lg:items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white/60 shadow-lg shadow-primary-500/20 backdrop-blur"
          >
            <SparklesIcon className="h-5 w-5 text-accent-400" />
            <span>CRM hiperfocado en dojos reais — 100% español</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl font-semibold leading-tight md:text-6xl"
          >
            Control total de tu escuela de artes marciales en una sola pantalla.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-xl text-lg leading-relaxed text-white/70"
          >
            Shogun CRM te entrega cobros automáticos, torneos, exámenes, tienda y
            analítica predictiva en un tablero vibrante. Menos hojas de cálculo,
            más tiempo en el tatami.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="#demo"
              className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-500 via-primary-400 to-accent-400 px-8 py-3 text-base font-semibold text-black shadow-xl shadow-primary-500/40 transition duration-300 hover:-translate-y-0.5"
            >
              Reservar demo personalizada
              <span className="inline-flex h-6 items-center rounded-full bg-black/80 px-2 text-xs font-bold uppercase text-accent-400">
                7 días gratis
              </span>
            </Link>
            <Link
              href="#tour"
              className="group flex items-center justify-center gap-3 rounded-full border border-white/10 px-7 py-3 text-base font-semibold text-white/80 backdrop-blur transition hover:border-white/30 hover:text-white"
            >
              <PlayCircleIcon className="h-6 w-6 text-accent-400 transition group-hover:scale-110" />
              Ver tour interactivo
            </Link>
          </motion.div>

          <motion.dl
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } }
            }}
            id="modulos"
            className="grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {spotlightFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-primary-500/10 backdrop-blur"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/10 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative z-10 space-y-3">
                  <Icon
                    name={feature.icon as never}
                    className="h-6 w-6 text-primary-300"
                  />
                  <dt className="text-sm font-semibold text-white">{feature.highlight}</dt>
                  <dd className="text-xs text-white/60">{feature.description}</dd>
                </div>
                <motion.span
                  className="glow-line"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                />
              </motion.div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-black/30 p-6 shadow-2xl shadow-primary-500/30 backdrop-blur-xl">
            <motion.div
              className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary-500/30 blur-[120px]"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-16 left-0 right-0 h-56 w-72 rounded-full bg-accent-400/20 blur-[80px]"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="relative z-10 w-full space-y-4 rounded-2xl bg-white/5 p-6 backdrop-blur"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-white/50">
                    Panel Sensei Pro
                  </span>
                  <h3 className="text-xl font-semibold text-white">
                    Flujo financiero en tiempo real
                  </h3>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-accent-400">
                  Live
                </span>
              </div>
              <div className="grid gap-3 text-sm text-white/70">
                <div className="blurred-border rounded-xl bg-black/30 p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-white">Cobros hoy</p>
                    <p className="text-accent-400">+$1,980 USD</p>
                  </div>
                  <p className="text-xs text-white/50">
                    32 mensualidades | 12 inscripciones a torneo
                  </p>
                  <motion.div
                    className="mt-3 h-2 rounded-full bg-white/10"
                    initial={{ width: "0%" }}
                    animate={{ width: "86%" }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                  >
                    <div className="h-full rounded-full bg-gradient-to-r from-primary-400 to-accent-400" />
                  </motion.div>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white/5 p-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/40">
                      Alumnos en riesgo
                    </p>
                    <p className="text-base font-semibold text-white">5 alumnos</p>
                  </div>
                  <motion.div
                    animate={{ rotate: [0, -2, 2, 0] }}
                    transition={{ repeat: Infinity, duration: 6 }}
                    className="rounded-full border border-accent-400/40 bg-accent-400/20 px-4 py-2 text-xs font-semibold text-accent-200 shadow shadow-accent-500/20"
                  >
                    Intervenir hoy
                  </motion.div>
                </div>
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    Próximo examen
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Cinturón naranja junior
                      </p>
                      <p className="text-xs text-white/50">24 alumnos confirmados</p>
                    </div>
                    <motion.span
                      animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.05, 0.95] }}
                      transition={{ repeat: Infinity, duration: 4 }}
                      className="rounded-full bg-primary-500/40 px-3 py-1 text-xs font-semibold text-white"
                    >
                      Faltan 3 días
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
