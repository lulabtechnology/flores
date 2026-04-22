"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const introItems = [
  {
    src: "/images/intro/opulencia-floral.jpg",
    label: "Colección destacada",
    title: "Opulencia Floral",
  },
  {
    src: "/images/intro/brillo-dorado.jpg",
    label: "Selección boutique",
    title: "Brillo Dorado",
  },
  {
    src: "/images/intro/elegancia-lila.jpg",
    label: "Diseño exclusivo",
    title: "Elegancia Lila",
  },
];

export default function IntroShowcase() {
  return (
    <section className="bg-white px-4 pb-8 pt-4 sm:px-6 sm:pb-12 lg:pb-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.34em] text-goldSoft">Introducción</p>
            <h2 className="mt-4 font-editorial text-4xl leading-tight text-wine sm:text-5xl">
              Una primera mirada a la delicadeza y el estilo de AMORNFLOR.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-cocoa/70">
            Estas composiciones abren la experiencia floral con una selección cuidada de arreglos que reflejan romanticismo, sofisticación y sello boutique.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {introItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="overflow-hidden rounded-[2rem] border border-goldSoft/15 bg-ivory shadow-soft"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="image-soft object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="space-y-3 p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-goldSoft">{item.label}</p>
                <h3 className="font-script text-[2.2rem] leading-none text-wine sm:text-[2.6rem]">{item.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
