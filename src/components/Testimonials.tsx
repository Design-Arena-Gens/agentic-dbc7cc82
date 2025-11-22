"use client";

/* eslint-disable react/no-unknown-property */
import { testimonials } from "@/lib/data";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";

export function Testimonials() {
  return (
    <section className="mx-auto mt-28 max-w-6xl px-6">
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-accent-200">
            Comunidad dojo elite
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Historias reales de senseis que recuperaron tiempo y foco.
          </h2>
        </div>
        <p className="max-w-xl text-base text-white/70">
          Cientos de escuelas de karate, taekwondo, jiujitsu, muay thai y más usan Shogun
          para dirigir operaciones impecables. Esto dicen quienes ya viven el cambio.
        </p>
      </div>

      <div className="mt-12">
        <Swiper
          modules={[Autoplay, EffectCreative]}
          autoplay={{ delay: 4800 }}
          grabCursor
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-25%", 0, -200]
            },
            next: {
              translate: ["25%", 0, -200]
            }
          }}
          slidesPerView={1}
          spaceBetween={40}
          breakpoints={{
            1024: { slidesPerView: 2 }
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.name}>
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black/70 via-black/50 to-transparent p-7 shadow-xl shadow-primary-500/20"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary-500/30 blur-3xl" />
                <div className="relative z-10 flex h-full flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                        {testimonial.role}
                      </p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-200">
                      {testimonial.achievement}
                    </span>
                  </div>
                  <p className="text-base leading-relaxed text-white/70">
                    “{testimonial.quote}”
                  </p>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
