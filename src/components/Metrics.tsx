"use client";

import { metricHighlights } from "@/lib/data";
import { motion } from "framer-motion";

export function Metrics() {
  return (
    <section
      id="resultados"
      className="relative mx-auto mt-24 max-w-5xl rounded-3xl border border-white/10 bg-white/5 px-8 py-12 shadow-2xl shadow-primary-500/20 backdrop-blur"
    >
      <motion.div
        className="absolute -top-12 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-gradient-to-br from-primary-500/70 to-accent-400/70 blur-xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <div className="relative z-10 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-accent-400">
            Resultados reales
          </p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Tus métricas favoritas, ahora vivas y accionables.
          </h2>
          <p className="text-base text-white/70">
            Dashboards fabricados para senseis: pagos al día, retención por cinturón,
            alumnos en riesgo y potencial de torneos. Todo llega directo a tu móvil a
            través de notificaciones inteligentes.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/70">
              Reportes 3D
            </span>
            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/70">
              IA predictiva
            </span>
            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/70">
              Multisedes
            </span>
          </div>
        </div>
        <div className="grid gap-4">
          {metricHighlights.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent px-6 py-5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-400/5 opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative z-10 flex items-baseline justify-between gap-4">
                <p className="text-4xl font-semibold text-white">{metric.value}</p>
                <div className="text-right">
                  <p className="text-sm font-semibold text-white/80">
                    {metric.label}
                  </p>
                  <p className="text-xs text-white/50">{metric.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
