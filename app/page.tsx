import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroShowcase from "@/components/IntroShowcase";
import Concept from "@/components/Concept";
import Occasions from "@/components/Occasions";
import Gallery from "@/components/Gallery";
import PremiumExperience from "@/components/PremiumExperience";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-ivory">
      <Header />
      <Hero />
      <IntroShowcase />
      <Concept />
      <Occasions />
      <Gallery />
      <PremiumExperience />
      <ContactForm />
      <Footer />
    </main>
  );
}
