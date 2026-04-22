const pillars = [
  {
    title: "Curaduría floral",
    text: "Cada flor es seleccionada con intención para lograr armonía, frescura y belleza.",
  },
  {
    title: "Diseño personalizado",
    text: "Cada arreglo se adapta al momento, la emoción y el estilo de quien lo recibe.",
  },
  {
    title: "Momentos memorables",
    text: "Creamos detalles que permanecen en la memoria mucho después de haber sido entregados.",
  },
];

export default function PremiumExperience() {
  return (
    <section className="relative overflow-hidden bg-ivory px-4 py-24 sm:px-6 lg:py-32">
      <div className="absolute left-[-12rem] top-1/2 h-96 w-96 rounded-full bg-blush/35 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.34em] text-goldSoft">Experiencia premium</p>
          <h2 className="mt-5 font-editorial text-4xl leading-tight text-wine sm:text-5xl lg:text-6xl">
            No vendemos flores. Diseñamos recuerdos.
          </h2>
          <p className="mt-6 text-lg leading-8 text-cocoa/70">
            Cada entrega se piensa como una experiencia: desde la selección floral hasta la emoción que despierta al llegar.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`fade-in-section rounded-[2rem] border border-white/80 bg-white/80 p-8 shadow-soft backdrop-blur ${index === 1 ? "delay-1" : index === 2 ? "delay-2" : ""}`}
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-blush/35 font-editorial text-4xl text-wine">
                ✦
              </div>
              <h3 className="font-editorial text-3xl text-wine">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-7 text-cocoa/70">{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
