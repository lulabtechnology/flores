"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { INSTAGRAM_HANDLE, createWhatsAppLink } from "@/lib/whatsapp";

export default function Footer() {
  const whatsappLink = createWhatsAppLink(
    "Hola AMORNFLOR, me gustaría cotizar un arreglo floral o una decoración para un evento."
  );

  return (
    <footer className="relative overflow-hidden bg-wine px-4 py-20 text-white sm:px-6">
      <div className="absolute right-[-8rem] top-[-8rem] h-72 w-72 rounded-full bg-blush/20 blur-3xl" />
      <div className="absolute bottom-[-10rem] left-[-8rem] h-72 w-72 rounded-full bg-goldSoft/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* CTA final para llevar al usuario a WhatsApp. */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="mb-16 rounded-[2.5rem] border border-white/20 bg-white/10 p-8 text-center shadow-floral backdrop-blur sm:p-12"
        >
          <p className="mx-auto max-w-4xl font-editorial text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Diseñemos juntos un recuerdo que florezca para siempre.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-wine shadow-soft transition hover:-translate-y-0.5 hover:bg-ivory"
          >
            Contactar por WhatsApp
          </a>
        </motion.div>

        <div className="grid gap-10 border-t border-white/20 pt-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            {/* Logo de AMORNFLOR en el footer. */}
            <div className="flex items-center gap-4">
              <span className="relative h-14 w-14 overflow-hidden rounded-full border border-white/25 bg-white">
                <Image src="/images/logo/amornflor-logo.jpg" alt="Logo AMORNFLOR" fill className="object-cover" />
              </span>
              <div>
                <p className="font-editorial text-2xl tracking-[0.18em]">AMORNFLOR</p>
                <p className="font-script text-3xl leading-none text-blush">Floristería boutique</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
              Inspiración floral para momentos inolvidables.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/65">Contacto</p>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-4 block text-white/80 transition hover:text-white">
              WhatsApp: (507) 6059 8292
            </a>
            <p className="mt-3 text-white/80">Instagram: {INSTAGRAM_HANDLE}</p>
            <p className="mt-3 text-white/80">Sitio web: xxxxxxxxxxx</p>
            <p className="mt-3 text-white/80">Colón, República de Panamá</p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/65">Ocasiones</p>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Cumpleaños, bodas, aniversarios, graduaciones, nacimientos y eventos especiales.
            </p>
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-white/50">© AMORNFLOR. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
