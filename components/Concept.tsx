"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Concept() {
  return (
    <section id="experiencia" className="relative bg-white px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Imagen editorial para acompañar el concepto de marca. */}
          <div className="relative h-[560px] overflow-hidden rounded-[2.2rem] shadow-floral">
            <Image
              src="/images/gallery/bouquet-rosado-babys-breath.jpg"
              alt="Bouquet rosado AMORNFLOR con diseño romántico"
              fill
              className="image-soft object-cover"
            />
          </div>
          <div className="absolute -right-5 -top-5 hidden rounded-full border border-goldSoft/40 bg-ivory px-7 py-5 text-center shadow-soft md:block">
            <p className="font-editorial text-3xl text-wine">Boutique</p>
            <p className="text-xs uppercase tracking-[0.24em] text-cocoa/50">floral</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
        >
          {/* Esta sección explica la filosofía de AMORNFLOR. */}
          <p className="text-sm font-semibold uppercase tracking-[0.34em] text-goldSoft">Concepto floral</p>
          <h2 className="mt-5 font-editorial text-4xl leading-tight text-wine sm:text-5xl lg:text-6xl">
            Flores que no solo decoran, también cuentan una historia.
          </h2>
          <p className="mt-8 text-lg leading-9 text-cocoa/75">
            Entendemos que la belleza no se mide en días, sino en la profundidad de un recuerdo. No creamos arreglos florales, diseñamos experiencias donde cada pétalo es seleccionado bajo una curaduría rigurosa.
          </p>
          <div className="mt-10 rounded-[2rem] border border-goldSoft/25 bg-ivory p-8 shadow-soft">
            <p className="font-editorial text-3xl italic text-wine">
              “Amornflor… la arquitectura de lo efímero”.
            </p>
            <p className="mt-4 text-sm leading-7 text-cocoa/65">
              Una forma delicada de diseñar momentos que se sienten personales, exclusivos y profundamente memorables.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
