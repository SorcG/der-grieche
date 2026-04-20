import Hero from "@/components/sections/Hero";
import Willkommen from "@/components/sections/Willkommen";
import SignatureDishes from "@/components/sections/SignatureDishes";
import QualitaetsStatement from "@/components/sections/QualitaetsStatement";
import Atmosphaere from "@/components/sections/Atmosphaere";
import Standort from "@/components/sections/Standort";

export default function Home() {
  return (
    <main>
      <Hero />
      <Willkommen />
      <SignatureDishes />
      <QualitaetsStatement />
      <Atmosphaere />
      <Standort />
    </main>
  );
}
