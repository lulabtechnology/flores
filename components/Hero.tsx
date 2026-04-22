"use client";

import Image from "next/image";
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
      <div className="absolute left-[-10rem] top-20 h-72 w-72 rounded-full bg-blush/40 blur-3xl" />
      <div className="absolute bottom-20 right-[-8rem] h-80 w-80 rounded-full bg-goldSoft/20 blur-3xl" />

      <span className="petal petal-one absolute left-[8%] top-28" />
      <span className="petal petal-two absolute left-[16%] top-40 hidden sm:block" />
      <span className="petal petal-three absolute right-[10%] top-28" />
      <span className="petal petal-four absolute right-[18%] top-44 hidden sm:block" />
      <span className="petal petal-five absolute bottom-28 left-[40%] hidden bg-roseDust/70 md:block" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12">
        <div className="fade-in-section relative order-1 lg:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[620px] overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 p-3 shadow-floral sm:aspect-[5/6] sm:rounded-[2.5rem] lg:ml-auto">
            <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-[radial-gradient(circle_at_top,_rgba(247,205,216,0.75),_rgba(255,255,255,0.96)_50%,_rgba(255,250,243,1)_100%)] sm:rounded-[2rem]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.75),rgba(255,250,243,0.92),rgba(247,205,216,0.35))]" />
              <div className="absolute -left-8 top-12 h-36 w-36 rounded-full bg-blush/30 blur-3xl" />
              <div className="absolute -right-10 bottom-24 h-44 w-44 rounded-full bg-goldSoft/15 blur-3xl" />

              <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-10 md:p-12">
                <div className="relative h-full w-full max-h-[72%] max-w-[82%]">
                  <Image
                    src="/images/logo/amornflor-logo-transparent.png"
                    alt="Identidad visual de AMORNFLOR"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="absolute inset-x-4 bottom-4 rounded-[1.7rem] border border-white/60 bg-white/78 p-4 text-left shadow-soft backdrop-blur sm:inset-x-6 sm:bottom-6 sm:p-6">
                <p className="font-script text-[2rem] leading-none text-wine sm:text-[2.5rem]">Elegancia floral con alma romántica</p>
                <p className="mt-3 max-w-lg text-[15px] leading-7 text-cocoa/80 sm:text-base">
                  Una firma floral boutique donde cada detalle celebra la belleza, la delicadeza y el arte de regalar emociones con estilo.
                </p>
              </div>
            </div>
          </div>

          <div className="floating-card mt-5 rounded-[2rem] border border-goldSoft/30 bg-white/90 p-5 shadow-floral backdrop-blur md:absolute md:-bottom-8 md:left-8 md:mt-0 md:max-w-[300px]">
            <p className="font-editorial text-2xl italic leading-tight text-wine sm:text-3xl md:text-2xl">
              “Amornflor… la arquitectura de lo efímero”.
            </p>
            <div className="gold-line mt-4 h-px w-full" />
            <p className="mt-3 text-xs uppercase tracking-[0.26em] text-cocoa/55">AMORNFLOR</p>
          </div>
        </div>

        <div className="fade-in-section delay-1 order-2 text-center lg:order-1 lg:text-left">
          <h1 className="font-editorial text-[2.7rem] leading-[0.95] tracking-[0.14em] text-wine sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            AMORNFLOR
          </h1>

          <p className="mt-2 font-script text-3xl text-roseDust sm:text-5xl">Floristería boutique</p>

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
            Diseños florales que hablan por ti
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-cocoa/75 sm:text-lg lg:mx-0">
            Creamos arreglos con una estética delicada, femenina y memorable para acompañar celebraciones, agradecimientos y momentos que merecen quedarse en la memoria.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-wine px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white shadow-floral transition hover:-translate-y-0.5 hover:bg-cocoa"
            >
              Cotizar arreglo floral
            </a>
            <a
              href="#galeria"
              className="rounded-full border border-goldSoft/40 bg-white/80 px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-wine shadow-soft transition hover:-translate-y-0.5 hover:border-wine/40 hover:bg-white"
            >
              Ver galería
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
