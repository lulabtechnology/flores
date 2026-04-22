const occasions = [
  {
    title: "Cumpleaños",
    text: "Arreglos florales diseñados para celebrar la vida con color, frescura y alegría.",
  },
  {
    title: "Aniversarios",
    text: "Detalles románticos que convierten una fecha especial en un recuerdo inolvidable.",
  },
  {
    title: "Graduaciones",
    text: "Flores para honrar logros, nuevos comienzos y momentos de orgullo.",
  },
  {
    title: "Eventos corporativos",
    text: "Diseños florales sobrios y elegantes para elevar la imagen de cada evento.",
  },
  {
    title: "Bodas",
    text: "Composiciones florales pensadas para crear ambientes románticos, memorables y profundamente personales.",
  },
  {
    title: "Celebración de nacimientos",
    text: "Arreglos delicados para dar la bienvenida a nuevas vidas con ternura y belleza.",
  },
  {
    title: "Eventos especiales",
    text: "Creaciones personalizadas para momentos únicos que merecen una presentación especial.",
  },
];

export default function Occasions() {
  return (
    <section id="ocasiones" className="relative bg-ivory px-4 py-24 sm:px-6 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.34em] text-goldSoft">Ocasiones</p>
          <h2 className="mt-5 font-editorial text-4xl leading-tight text-wine sm:text-5xl lg:text-6xl">
            Para cada momento que merece florecer.
          </h2>
          <p className="mt-6 text-lg leading-8 text-cocoa/70">
            AMORNFLOR crea diseños florales para celebrar, agradecer, sorprender y vestir eventos con delicadeza.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {occasions.map((occasion, index) => (
            <article
              key={occasion.title}
              className={`fade-in-section group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-7 shadow-soft transition hover:-translate-y-2 ${index % 3 === 1 ? "delay-1" : index % 3 === 2 ? "delay-2" : ""}`}
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blush/40 transition group-hover:scale-125" />
              <div className="relative">
                <span className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-goldSoft/30 bg-ivory font-editorial text-2xl text-wine">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-editorial text-3xl text-wine">{occasion.title}</h3>
                <p className="mt-4 text-sm leading-7 text-cocoa/70">{occasion.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
