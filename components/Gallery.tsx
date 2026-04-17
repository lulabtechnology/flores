"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const gallery = [
  {
    src: "/images/gallery/corazon-rosas-fucsia.jpg",
    title: "Rosas premium",
    text: "Diseño en forma de corazón para una entrega profundamente romántica.",
    featured: true,
  },
  {
    src: "/images/gallery/rosas-rosadas-caja.jpg",
    title: "Caja floral rosada",
    text: "Una composición delicada, femenina y elegante.",
    featured: true,
  },
  {
    src: "/images/gallery/rosas-rojas-premium.jpg",
    title: "Rosas rojas premium",
    text: "Clásico, intenso y atemporal para ocasiones especiales.",
    featured: false,
  },
  {
    src: "/images/gallery/ramo-rojas-elegante.jpg",
    title: "Bouquet elegante",
    text: "Rosas rojas con follaje y presentación sobria.",
    featured: false,
  },
  {
    src: "/images/gallery/bouquet-fucsia-dorado.jpg",
    title: "Detalle boutique",
    text: "Papel dorado, tonos vino y flores de alto impacto visual.",
    featured: false,
  },
  {
    src: "/images/gallery/arreglo-delicado-rosa.jpg",
    title: "Arreglo delicado",
    text: "Flores suaves para un gesto tierno y luminoso.",
    featured: false,
  },
  {
    src: "/images/gallery/ramo-lirios-rojos-amarillos.jpg",
    title: "Ocasión especial",
    text: "Rosas, lirios y tonos vibrantes para celebrar con presencia.",
    featured: false,
  },
  {
    src: "/images/gallery/bouquet-rosas-eucalipto.jpg",
    title: "Bouquet romántico",
    text: "Rosas rosadas y follaje para un acabado editorial.",
    featured: false,
  },
  {
    src: "/images/gallery/arreglo-maceta-boutique.jpg",
    title: "Diseño personalizado",
    text: "Una propuesta diferente para regalar flores con encanto.",
    featured: false,
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-white px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Título de la galería con fotografías reales. */}
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.34em] text-goldSoft">Galería</p>
            <h2 className="mt-5 font-editorial text-4xl leading-tight text-wine sm:text-5xl lg:text-6xl">
              Arreglos reales, diseñados con intención.
            </h2>
          </div>
          <p className="max-w-md text-base leading-8 text-cocoa/70">
            Fotografías reales de AMORNFLOR para mostrar la delicadeza, el color y la presencia de cada entrega.
          </p>
        </div>

        {/* Las fotos más grandes y potentes aparecen primero. */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item, index) => (
            <motion.article
              key={item.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              className={
                item.featured
                  ? "group relative h-[520px] overflow-hidden rounded-[2.2rem] shadow-floral md:col-span-1 lg:col-span-2"
                  : "group relative h-[390px] overflow-hidden rounded-[2rem] shadow-soft"
              }
            >
              <Image
                src={item.src}
                alt={`${item.title} de AMORNFLOR`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="image-soft object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine/70 via-wine/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="mb-3 inline-flex rounded-full border border-white/35 bg-white/20 px-3 py-1 text-xs uppercase tracking-[0.24em] backdrop-blur">
                  AMORNFLOR
                </span>
                <h3 className="font-editorial text-3xl">{item.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-white/80">{item.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
