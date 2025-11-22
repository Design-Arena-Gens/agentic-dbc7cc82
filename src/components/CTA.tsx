"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTA() {
  return (
    <section
      id="demo"
      className="mx-auto mt-28 max-w-5xl overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-primary-500/20 via-black/60 to-black/80 p-10 shadow-2xl shadow-primary-500/30 backdrop-blur-xl"
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-accent-200">
            Demo inmersiva
          </p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Reserva tu sesión y vive el movimiento en directo.
          </h2>
          <p className="text-base text-white/70">
            Te acompañamos durante 45 minutos para configurar cobros, torneos y
            exámenes reales con tus propios datos. Cierra con un plan de acción en PDF
            personalizado para tu escuela.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
              Onboarding VIP
            </span>
            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
              Migración incluida
            </span>
          </div>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.5 }}
          className="space-y-4 rounded-3xl border border-white/10 bg-black/40 p-6 shadow shadow-primary-500/10 backdrop-blur"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                Nombre
              </span>
              <input
                type="text"
                placeholder="Sensei Carlos"
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-primary-400 focus:outline-none"
              />
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                Email
              </span>
              <input
                type="email"
                placeholder="sensei@dojo.com"
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-primary-400 focus:outline-none"
              />
            </label>
          </div>
          <label className="space-y-2 text-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              Número de alumnos
            </span>
            <select className="w-full appearance-none rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white focus:border-primary-400 focus:outline-none">
              <option value="">&lt; 50</option>
              <option value="">50 - 150</option>
              <option value="">150 - 300</option>
              <option value="">300+</option>
            </select>
          </label>
          <label className="space-y-2 text-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              En qué te ayudamos
            </span>
            <textarea
              placeholder="Quiero automatizar mis cobros y lanzar torneos virtuales..."
              rows={4}
              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-primary-400 focus:outline-none"
            />
          </label>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-500 via-primary-300 to-accent-300 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-primary-500/40 transition hover:-translate-y-0.5"
          >
            Agendar demo ahora
          </button>
          <p className="text-center text-xs text-white/40">
            Nos pondremos en contacto en menos de 12 horas. Sin tarjetas, sin compromiso.
          </p>
        </motion.form>
      </div>
      <div className="mt-6 text-center text-sm text-white/50">
        ¿Prefieres conversar por WhatsApp?{" "}
        <Link
          href="https://wa.me/5215555555555"
          target="_blank"
          className="text-accent-300 transition hover:text-accent-200"
        >
          Escríbenos aquí
        </Link>
      </div>
    </section>
  );
}
