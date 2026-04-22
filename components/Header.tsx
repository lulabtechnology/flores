"use client";

import Image from "next/image";
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
    <header className="fixed left-0 top-0 z-50 w-full px-3 py-3 sm:px-6 sm:py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-[1.8rem] border border-white/70 bg-white/88 px-3 py-3 shadow-soft backdrop-blur-xl sm:px-6">
        <a
          href="#inicio"
          className="flex min-w-0 max-w-[calc(100%-112px)] items-center gap-3 sm:max-w-none"
          aria-label="Ir al inicio"
        >
          <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-goldSoft/40 bg-white shadow-sm sm:h-14 sm:w-14">
            <Image
              src="/images/logo/amornflor-logo.jpg"
              alt="Logo AMORNFLOR"
              fill
              className="object-cover"
              priority
            />
          </span>

          <span className="min-w-0 leading-tight">
            <span className="block font-editorial text-[0.95rem] tracking-[0.16em] text-wine sm:text-xl">
              AMORNFLOR
            </span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-cocoa/55 sm:text-xs sm:tracking-[0.22em]">
              Floristería boutique
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-cocoa/75 lg:flex">
          {menuItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-wine">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-wine px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-cocoa lg:inline-flex"
        >
          Cotizar por WhatsApp
        </a>

        <button
          onClick={() => setOpen((value) => !value)}
          className="shrink-0 rounded-full border border-goldSoft/30 px-4 py-2 text-sm font-semibold text-wine sm:px-5"
          aria-label="Abrir menú"
        >
          Menú
        </button>
      </div>

      {open ? (
        <div className="fade-in-section mx-auto mt-3 max-w-7xl rounded-3xl border border-white/70 bg-white/95 p-4 shadow-floral backdrop-blur-xl lg:hidden">
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
        </div>
      ) : null}
    </header>
  );
}
