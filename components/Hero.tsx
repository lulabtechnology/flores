"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { createWhatsAppLink } from "@/lib/whatsapp";

const contactItems = [
  "(507) 6059 8292",
  "@amornflor",
  "Sitio web: xxxxxxxxxxx",
  "Colón, República de Panamá",
];

export default function Hero() {
  const whatsappLink = createWhatsAppLink(
    "Hola AMORNFLOR, me gustaría cotizar un arreglo floral o una decoración para un evento."
  );

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-premium-glow px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:pt-40"
    >
      {/* Brillos suaves del fondo para que el hero se sienta premium. */}
      <div className="absolute left-[-10rem] top-20 h-72 w-72 rounded-full bg-blush/40 blur-3xl" />
      <div className="absolute bottom-20 right-[-8rem] h-80 w-80 rounded-full bg-goldSoft/20 blur-3xl" />

      {/* Pétalos decorativos con movimiento suave. */}
      <motion.span
        className="petal absolute left-[8%] top-28"
        animate={{ y: [0, 18, 0], rotate: [8, 22, 8] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="petal absolute left-[16%] top-40 hidden sm:block"
        animate={{ y: [0, -12, 0], rotate: [-14, 8, -14] }}
        transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="petal absolute right-[10%] top-28"
        animate={{ y: [0, -18, 0], rotate: [-20, -4, -20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="petal absolute right-[18%] top-44 hidden sm:block"
        animate={{ y: [0, 14, 0], rotate: [18, 34, 18] }}
        transition={{ duration: 7.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="petal absolute bottom-28 left-[40%] hidden bg-roseDust/70 md:block"
        animate={{ y: [0, 14, 0], rotate: [40, 58, 40] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12">
        {/* En celular mostramos primero la imagen para conservar la sensación visual que gustó. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="relative order-1 lg:order-2"
        >
          {/* La imagen principal muestra uno de los arreglos más fuertes de AMORNFLOR. */}
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[620px] overflow-hidden rounded-[2rem] border border-white/80 bg-white p-3 shadow-floral sm:aspect-[5/6] sm:rounded-[2.5rem] lg:ml-auto">
            <Image
              src="/images/hero/rosas-rosadas-premium.jpg"
              alt="Arreglo de rosas rosadas premium de AMORNFLOR"
              fill
              priority
              className="image-soft rounded-[1.6rem] object-cover sm:rounded-[2rem]"
            />

            {/* Esta capa oscura ayuda a que el texto se lea bien en celular y escritorio. */}
            <div className="absolute inset-x-3 bottom-3 rounded-b-[1.6rem] bg-gradient-to-t from-wine/65 via-wine/25 to-transparent p-4 text-left text-white sm:rounded-b-[2rem] sm:p-8">
              <p className="font-script text-[2.2rem] leading-none sm:text-4xl">Amándote más</p>
              <p className="mt-3 max-w-md text-base leading-7 text-white/92 sm:text-base sm:leading-7">
                Un corazón XL de rosas premium en tonos rosados que convierte la ternura en una presencia inolvidable.
              </p>
            </div>
          </div>

          {/* Tarjeta pequeña con la frase de la marca. En celular queda debajo de la foto para que no se corte. */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="mt-5 rounded-[2rem] border border-goldSoft/30 bg-white/90 p-5 shadow-floral backdrop-blur md:absolute md:-bottom-8 md:left-8 md:mt-0 md:max-w-[300px]"
          >
            <p className="font-editorial text-2xl italic leading-tight text-wine sm:text-3xl md:text-2xl">
              “Amornflor… la arquitectura de lo efímero”.
            </p>
            <div className="gold-line mt-4 h-px w-full" />
            <p className="mt-3 text-xs uppercase tracking-[0.26em] text-cocoa/55">AMORNFLOR</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          {/* El nombre de la marca aparece como la primera palabra fuerte del contenido principal. */}
          <h1 className="font-editorial text-[2.7rem] leading-[0.95] tracking-[0.14em] text-wine sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            AMORNFLOR
          </h1>

          {/* Este subtítulo queda justo debajo del nombre de la marca. */}
          <p className="mt-2 font-script text-3xl text-roseDust sm:text-5xl">Floristería boutique</p>

          {/* Aquí se muestran los datos de contacto pedidos por la cliente. */}
          <div className="mx-auto mt-6 grid max-w-2xl gap-3 text-sm leading-7 text-cocoa/75 sm:grid-cols-2 lg:mx-0">
            {contactItems.map((item) => (
              <p
                key={item}
                className="rounded-2xl border border-white/70 bg-white/70 px-4 py-3 font-editorial text-[0.98rem] italic shadow-soft"
              >
                {item}
              </p>
            ))}
          </div>

          <p className="mt-8 font-editorial text-2xl italic text-roseDust sm:text-3xl">
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
      </div>
    </section>
  );
}
