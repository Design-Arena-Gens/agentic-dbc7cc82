"use client";

import { pricingPlans } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";

export function Pricing() {
  return (
    <section id="precios" className="mx-auto mt-28 max-w-6xl px-6">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-accent-300">
          Planes flexibles
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          Elige la experiencia que mejor se adapta a tu clan.
        </h2>
        <p className="mt-4 text-base text-white/70">
          Todos los planes incluyen paneles interactivos, soporte experto y migración de
          datos inicial sin costo.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <motion.article
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className={`relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-primary-500/20 backdrop-blur ${
              plan.popular ? "scale-105 ring-2 ring-primary-400 lg:-mt-6" : ""
            }`}
          >
            {plan.popular ? (
              <span className="absolute right-6 top-6 inline-flex items-center rounded-full bg-gradient-to-r from-primary-500 to-accent-400 px-3 py-1 text-xs font-semibold text-black shadow shadow-primary-500/40">
                Más elegido
              </span>
            ) : null}
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
              <p className="text-sm text-white/70">{plan.description}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-white">
                  {plan.price === "Habla con nosotros" ? plan.price : `$${plan.price}`}
                </span>
                {plan.periodicity ? (
                  <span className="text-xs uppercase tracking-[0.35em] text-white/50">
                    {plan.periodicity}
                  </span>
                ) : null}
              </div>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-white/70">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 rounded-2xl border border-white/5 bg-black/30 px-4 py-3"
                >
                  <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-primary-400 to-accent-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#demo"
              className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                plan.popular
                  ? "bg-gradient-to-r from-primary-500 via-primary-400 to-accent-400 text-black shadow-lg shadow-primary-500/40 hover:-translate-y-0.5"
                  : "border border-white/20 text-white/80 backdrop-blur hover:border-white/40 hover:text-white"
              }`}
            >
              {plan.popular ? "Quiero Sensei Pro" : "Hablar con un especialista"}
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
