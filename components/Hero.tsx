"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { createWhatsAppLink } from "@/lib/whatsapp";

export default function Hero() {
  const whatsappLink = createWhatsAppLink(
    "Hola AMORNFLOR, me gustaría cotizar un arreglo floral o una decoración para un evento."
  );

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-premium-glow px-4 pb-20 pt-32 sm:px-6 lg:pt-40">
      {/* Brillos suaves del fondo para que el hero se sienta premium. */}
      <div className="absolute left-[-10rem] top-20 h-72 w-72 rounded-full bg-blush/40 blur-3xl" />
      <div className="absolute bottom-20 right-[-8rem] h-80 w-80 rounded-full bg-goldSoft/20 blur-3xl" />

      {/* Pétalos decorativos con movimiento suave. */}
      <motion.span
        className="petal absolute left-[12%] top-44"
        animate={{ y: [0, 18, 0], rotate: [8, 22, 8] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="petal absolute right-[12%] top-36 hidden sm:block"
        animate={{ y: [0, -18, 0], rotate: [-20, -4, -20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="petal absolute bottom-28 left-[40%] hidden bg-roseDust/70 md:block"
        animate={{ y: [0, 14, 0], rotate: [40, 58, 40] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          {/* Esta etiqueta pequeña presenta la marca como boutique. */}
          <p className="mb-5 inline-flex rounded-full border border-goldSoft/30 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-wine shadow-sm">
            Floristería boutique
          </p>

          {/* Título principal de la página. */}
          <h1 className="font-editorial text-6xl leading-[0.92] tracking-tight text-wine sm:text-7xl lg:text-8xl">
            AMORNFLOR
          </h1>

          <p className="mt-5 font-editorial text-2xl italic text-roseDust sm:text-3xl">
            Inspiración floral para momentos inolvidables
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-cocoa/75 sm:text-lg lg:mx-0">
            Somos inspiración floral que satisface el gusto más exigente y exclusivo.
          </p>

          {/* Botones principales del hero. */}
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <motion.a
              whileHover={{ y: -3 }}
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-wine px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white shadow-floral transition hover:bg-cocoa"
            >
              Cotizar arreglo floral
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="#ocasiones"
              className="rounded-full border border-goldSoft/40 bg-white/80 px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-wine shadow-soft transition hover:border-wine/40 hover:bg-white"
            >
              Ver ocasiones
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          {/* La imagen principal muestra uno de los arreglos más fuertes de AMORNFLOR. */}
          <div className="relative mx-auto h-[520px] max-w-[610px] overflow-hidden rounded-[2.5rem] border border-white/80 bg-white p-3 shadow-floral sm:h-[650px] lg:ml-auto">
            <Image
              src="/images/hero/rosas-rosadas-premium.jpg"
              alt="Arreglo de rosas rosadas premium de AMORNFLOR"
              fill
              priority
              className="image-soft rounded-[2rem] object-cover"
            />
            <div className="absolute inset-x-3 bottom-3 rounded-b-[2rem] bg-gradient-to-t from-wine/50 to-transparent p-8 text-left text-white">
              <p className="font-editorial text-3xl italic">Diseño floral con intención</p>
              <p className="mt-2 max-w-sm text-sm leading-6 text-white/80">
                Cada arreglo se crea para transformar una fecha especial en un recuerdo delicado y memorable.
              </p>
            </div>
          </div>

          {/* Tarjeta pequeña flotante con la frase de la marca. */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 left-2 max-w-[260px] rounded-3xl border border-goldSoft/30 bg-white/90 p-5 shadow-floral backdrop-blur md:left-10"
          >
            <p className="font-editorial text-xl italic text-wine">“La arquitectura de lo efímero”</p>
            <div className="gold-line mt-4 h-px w-full" />
            <p className="mt-3 text-xs uppercase tracking-[0.26em] text-cocoa/55">AMORNFLOR</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
