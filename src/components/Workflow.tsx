"use client";

import { workflow } from "@/lib/data";
import { motion } from "framer-motion";

export function Workflow() {
  return (
    <section className="relative mx-auto mt-28 max-w-6xl px-6">
      <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-10 shadow-2xl shadow-primary-500/20 backdrop-blur-xl">
        <motion.div
          className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary-500/20 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ repeat: Infinity, duration: 8 }}
        />
        <motion.div
          className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.8, 0.6] }}
          transition={{ repeat: Infinity, duration: 7 }}
        />
        <div className="relative z-10 grid gap-10 lg:grid-cols-[0.8fr,1fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.25em] text-accent-300">
              Tu dojo en piloto automático
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Flujo asistido que guía a tus senseis hacia la excelencia operativa.
            </h2>
            <p className="text-base text-white/70">
              Configura tu academia, automatiza recordatorios y activa nuevas experiencias
              con unos cuantos clics. Cada paso vibra con animaciones y asistentes que te
              llevan de la mano.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-10 top-5 h-[calc(100%-40px)] w-px bg-gradient-to-b from-white/10 via-primary-500/40 to-transparent" />
            <div className="space-y-6">
              {workflow.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 120 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-6 shadow-lg shadow-primary-500/10"
                >
                  <div className="absolute -left-3 top-6 h-6 w-6 rounded-full border border-white/20 bg-gradient-to-br from-primary-400 to-accent-400 shadow shadow-primary-500/40" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="relative z-10 space-y-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-accent-200">
                      {item.badge}
                    </span>
                    <h3 className="text-xl font-semibold text-white">{item.step}</h3>
                    <p className="text-sm leading-relaxed text-white/70">{item.action}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
