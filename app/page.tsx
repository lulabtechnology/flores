import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Occasions from "@/components/Occasions";
import Gallery from "@/components/Gallery";
import PremiumExperience from "@/components/PremiumExperience";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-ivory">
      {/* Header fijo con logo, menú y botón de WhatsApp */}
      <Header />

      {/* Sección principal que recibe al visitante */}
      <Hero />

      {/* Texto editorial que explica el concepto de la marca */}
      <Concept />

      {/* Tarjetas con las ocasiones para las que se crean arreglos */}
      <Occasions />

      {/* Galería con fotografías reales de AMORNFLOR */}
      <Gallery />

      {/* Pilares que explican la experiencia premium */}
      <PremiumExperience />

      {/* Formulario que convierte la información en un mensaje de WhatsApp */}
      <ContactForm />

      {/* Cierre elegante de la página */}
      <Footer />
    </main>
  );
}
