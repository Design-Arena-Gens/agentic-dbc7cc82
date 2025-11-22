"use client";

import { features } from "@/lib/data";
import { Icon } from "./Icon";
import { motion } from "framer-motion";

export function FeatureMatrix() {
  return (
    <section className="mx-auto mt-28 max-w-6xl px-6">
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-accent-400">
            Super poderes para tu dojo
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Cada módulo está diseñado con movimientos fluidos, como tu kata favorita.
          </h2>
        </div>
        <p className="max-w-xl text-base text-white/70">
          Visuales dinámicos, workflows guiados y automatizaciones que reducen la
          fricción. Personaliza todo sin romper tu ritmo de enseñanza.
        </p>
      </div>

      <div
        className="mt-12 grid gap-6 lg:grid-cols-3"
        id="tour"
      >
        {features.map((feature, index) => (
          <motion.article
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.08, type: "spring", stiffness: 80 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-primary-500/10 backdrop-blur"
          >
            <motion.div
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 3 }}
              className="absolute -left-24 top-1/2 hidden h-48 w-48 -translate-y-1/2 rounded-full bg-primary-500/10 blur-3xl transition group-hover:scale-125 lg:block"
            />
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Icon name={feature.icon as never} className="h-6 w-6 text-white" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-200">
                    {feature.highlight}
                  </p>
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-white/70">
                {feature.description}
              </p>
              <motion.div
                className="relative h-1 w-full overflow-hidden rounded-full bg-white/10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                style={{ originX: 0 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-primary-300 to-accent-300" />
              </motion.div>
              <div className="mt-2 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
                <span>Live dashboards</span>
                <span className="h-px w-8 bg-white/20" />
                <span>Flujos guiados</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
