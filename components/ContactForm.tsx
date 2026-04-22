"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { createWhatsAppLink } from "@/lib/whatsapp";

type FormData = {
  name: string;
  phone: string;
  eventType: string;
  date: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  phone: "",
  eventType: "",
  date: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);

  function updateField(field: keyof FormData, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Este mensaje se arma automáticamente con lo que escribió la persona.
    const whatsappMessage = `Hola AMORNFLOR, me gustaría solicitar información.\n\nNombre: ${form.name}\nTeléfono: ${form.phone}\nTipo de evento: ${form.eventType}\nFecha estimada: ${form.date}\nMensaje: ${form.message}`;

    // Abre WhatsApp con el mensaje listo para enviar.
    window.open(createWhatsAppLink(whatsappMessage), "_blank");
  }

  return (
    <section id="contacto" className="relative bg-white px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="relative min-h-[360px] overflow-hidden rounded-[2rem] shadow-floral sm:min-h-[460px] lg:min-h-[540px]"
        >
          {/* Imagen de apoyo para que la sección de contacto no se vea vacía. */}
          <Image
            src="/images/gallery/bouquet-fucsia-dorado.jpg"
            alt="Bouquet AMORNFLOR para cotización por WhatsApp"
            fill
            className="image-soft object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wine/75 via-wine/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
            <p className="font-editorial text-3xl leading-tight sm:text-4xl">Diseños para regalar, celebrar y emocionar.</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/80">
              Completa tus datos y el formulario abrirá WhatsApp con tu solicitud lista.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="rounded-[2rem] border border-goldSoft/20 bg-ivory p-6 shadow-soft sm:p-9"
        >
          {/* Este formulario envía la información por WhatsApp. */}
          <p className="text-sm font-semibold uppercase tracking-[0.34em] text-goldSoft">Contacto</p>
          <h2 className="mt-5 font-editorial text-4xl leading-tight text-wine sm:text-5xl">
            Cotiza tu arreglo floral
          </h2>
          <p className="mt-5 text-base leading-8 text-cocoa/70">
            Cuéntanos qué quieres celebrar y prepararemos una propuesta floral con el cuidado de AMORNFLOR.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
            <label className="grid gap-2 text-sm font-semibold text-cocoa/70">
              Nombre
              <input
                required
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                className="rounded-2xl border border-goldSoft/20 bg-white px-4 py-4 text-cocoa outline-none transition focus:border-wine/50"
                placeholder="Tu nombre"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-cocoa/70">
              Teléfono
              <input
                required
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                className="rounded-2xl border border-goldSoft/20 bg-white px-4 py-4 text-cocoa outline-none transition focus:border-wine/50"
                placeholder="Ejemplo: +507 6000-0000"
              />
            </label>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-cocoa/70">
                Tipo de evento
                <select
                  required
                  value={form.eventType}
                  onChange={(event) => updateField("eventType", event.target.value)}
                  className="rounded-2xl border border-goldSoft/20 bg-white px-4 py-4 text-cocoa outline-none transition focus:border-wine/50"
                >
                  <option value="">Seleccionar</option>
                  <option>Cumpleaños</option>
                  <option>Aniversario</option>
                  <option>Graduación</option>
                  <option>Evento corporativo</option>
                  <option>Boda</option>
                  <option>Celebración de nacimiento</option>
                  <option>Evento especial</option>
                </select>
              </label>

              <label className="grid gap-2 text-sm font-semibold text-cocoa/70">
                Fecha estimada
                <input
                  type="date"
                  value={form.date}
                  onChange={(event) => updateField("date", event.target.value)}
                  className="rounded-2xl border border-goldSoft/20 bg-white px-4 py-4 text-cocoa outline-none transition focus:border-wine/50"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-semibold text-cocoa/70">
              Mensaje
              <textarea
                required
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                rows={5}
                className="resize-none rounded-2xl border border-goldSoft/20 bg-white px-4 py-4 text-cocoa outline-none transition focus:border-wine/50"
                placeholder="Cuéntanos qué tipo de arreglo o decoración deseas."
              />
            </label>

            <motion.button
              whileHover={{ y: -3 }}
              type="submit"
              className="rounded-full bg-wine px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-floral transition hover:bg-cocoa"
            >
              Enviar por WhatsApp
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
