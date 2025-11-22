"use client";

import { faqs } from "@/lib/data";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export function FAQ() {
  return (
    <section className="mx-auto mt-28 max-w-4xl px-6">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-accent-300">
          Preguntas frecuentes
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          Todo lo que necesitas saber antes de subirte al tatami digital.
        </h2>
      </div>

      <div className="mt-10 space-y-4">
        {faqs.map((faq) => (
          <Disclosure key={faq.question}>
            {({ open }) => (
              <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-4 backdrop-blur">
                <Disclosure.Button className="flex w-full items-center justify-between gap-6 px-2 py-3 text-left text-sm font-semibold text-white">
                  {faq.question}
                  <ChevronDownIcon
                    className={`h-5 w-5 text-accent-300 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-200 ease-out"
                  enterFrom="transform scale-y-75 opacity-0"
                  enterTo="transform scale-y-100 opacity-100"
                  leave="transition duration-150 ease-in"
                  leaveFrom="transform scale-y-100 opacity-100"
                  leaveTo="transform scale-y-75 opacity-0"
                >
                  <Disclosure.Panel className="px-2 pb-3 text-sm leading-relaxed text-white/70">
                    {faq.answer}
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
}
