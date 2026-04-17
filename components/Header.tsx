"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { createWhatsAppLink } from "@/lib/whatsapp";

const menuItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Ocasiones", href: "#ocasiones" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const whatsappLink = createWhatsAppLink(
    "Hola AMORNFLOR, me gustaría cotizar un arreglo floral o una decoración para un evento."
  );

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 sm:px-6">
      {/* Esta caja blanca hace que el menú se vea limpio sobre cualquier fondo. */}
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/80 px-4 py-3 shadow-soft backdrop-blur-xl sm:px-6">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Ir al inicio">
          {/* Este es el logo oficial de AMORNFLOR. */}
          <span className="relative h-12 w-12 overflow-hidden rounded-full border border-goldSoft/40 bg-white shadow-sm">
            <Image
              src="/images/logo/amornflor-logo.jpg"
              alt="Logo AMORNFLOR"
              fill
              className="object-cover"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="block font-editorial text-xl tracking-[0.18em] text-wine">AMORNFLOR</span>
            <span className="hidden text-xs uppercase tracking-[0.28em] text-cocoa/55 sm:block">by Janet</span>
          </span>
        </a>

        {/* Menú de escritorio. */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-cocoa/75 lg:flex">
          {menuItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-wine">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Botón principal de contacto para escritorio. */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-wine px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-cocoa lg:inline-flex"
        >
          Cotizar por WhatsApp
        </a>

        {/* Botón para abrir el menú en celular. */}
        <button
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-goldSoft/30 px-4 py-2 text-sm font-semibold text-wine lg:hidden"
          aria-label="Abrir menú"
        >
          Menú
        </button>
      </div>

      {/* Menú móvil. Aparece solo cuando la persona toca el botón Menú. */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/70 bg-white/95 p-4 shadow-floral backdrop-blur-xl lg:hidden"
          >
            <nav className="grid gap-2">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-cocoa transition hover:bg-blush/35 hover:text-wine"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-2 rounded-2xl bg-wine px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Cotizar por WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
