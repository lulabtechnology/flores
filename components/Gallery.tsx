"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type GalleryItem = {
  src: string;
  label: string;
  name?: string;
  text: string;
  featured?: boolean;
};

const gallery: GalleryItem[] = [
  {
    src: "/images/gallery/corazon-rosas-fucsia.jpg",
    label: "Corazón de rosas XL",
    name: "Amándote más",
    text: "Este imponente corazón XL, compuesto por una selección premium de rosas en tonos rosa, captura la esencia de la devoción y la ternura. Es la máxima expresión de un sentimiento que no deja de crecer.",
    featured: true,
  },
  {
    src: "/images/gallery/rosas-rosadas-caja.jpg",
    label: "Caja floral XL",
    name: "La reina de mi corazón",
    text: "Esta majestuosa caja floral está diseñada para rendir tributo a esa persona especial. El regalo perfecto para transformar un momento importante en un recuerdo eterno, celebrando la vida con la distinción que ella merece.",
    featured: true,
  },
  {
    src: "/images/gallery/rosas-rojas-premium.jpg",
    label: "Rosas rojas premium",
    name: "Lady in red",
    text: "El rojo intenso de nuestras rosas premium revela una historia de pasión, romance e intensidad absoluta. Ideal para quienes no temen expresar la fuerza de su amor con audacia y estilo.",
    featured: true,
  },
  {
    src: "/images/gallery/bouquet-fucsia-dorado.jpg",
    label: "Detalle boutique",
    name: "Suspiro",
    text: "Una creación delicada que añade un aire de ensueño y exclusividad.",
  },
  {
    src: "/images/gallery/arreglo-delicado-rosa.jpg",
    label: "Arreglo delicado",
    name: "Celebrate",
    text: "La pureza del amor hecha arte floral. Este delicado bouquet de rosas seleccionadas irradia frescura y ternura. Una caricia visual que comunica lo que las palabras no alcanzan a decir.",
  },
  {
    src: "/images/gallery/ramo-lirios-rojos-amarillos.jpg",
    label: "Ocasión especial",
    name: "Destello",
    text: "La elegancia vertical de las calas blancas se encuentra con la intensidad de las rosas fucsia en una composición luminosa, fresca y memorable. Un arreglo que destaca al instante y deja una impresión radiante.",
  },
  {
    src: "/images/gallery/bouquet-rosas-eucalipto.jpg",
    label: "Bouquet romántico",
    name: "Crónicas de un romance",
    text: "Como una historia de amor escrita entre líneas, este arreglo fusiona la calidez de las rosas color salmón con la frescura etérea del follaje parcifoglia.",
  },
  {
    src: "/images/gallery/opulencia-floral.jpg",
    label: "Diseño de lujo",
    name: "Opulencia Floral",
    text: "Una composición exuberante y sofisticada que une flores premium con un gesto de celebración inolvidable. Ideal para sorprender con presencia, distinción y un aire de auténtico lujo.",
    featured: true,
  },
  {
    src: "/images/gallery/arreglo-maceta-boutique.jpg",
    label: "Diseño personalizado",
    text: "Una propuesta diferente para regalar flores con encanto, ideal para quien busca una composición floral original y muy personal.",
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-white px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.34em] text-goldSoft">Galería</p>
            <h2 className="mt-5 font-editorial text-4xl leading-tight text-wine sm:text-5xl lg:text-6xl">
              Arreglos reales, presentados con más detalle.
            </h2>
          </div>
          <p className="max-w-md text-base leading-8 text-cocoa/70">
            Las piezas más impactantes aparecen primero, con nombres propios y descripciones más cuidadas para reflejar la identidad boutique de AMORNFLOR.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {gallery.map((item, index) => (
            <motion.article
              key={`${item.src}-${item.name ?? item.label}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              className="overflow-hidden rounded-[2rem] border border-goldSoft/15 bg-ivory shadow-soft"
            >
              <div className={`relative w-full overflow-hidden ${item.featured ? "aspect-[4/5]" : "aspect-[4/4.3]"}`}>
                <Image
                  src={item.src}
                  alt={`${item.label} de AMORNFLOR`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="image-soft object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="space-y-4 p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-goldSoft">{item.label}</p>

                {item.name ? (
                  <h3 className="font-script text-[2.2rem] leading-none text-wine sm:text-[2.6rem]">{item.name}</h3>
                ) : null}

                <p className="text-sm leading-7 text-cocoa/75 sm:text-[15px]">{item.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
