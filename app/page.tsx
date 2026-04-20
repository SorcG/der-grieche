import Meander from "@/components/Meander";
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
      {/* Creme band: transitions dark Hero into warm Willkommen */}
      <Meander variant="band" background="warm" />
      <Willkommen />
      {/* Brand band: bold separator before the white Dishes section */}
      <Meander variant="band" background="brand" />
      <SignatureDishes />
      {/* No band here — QualitaetsStatement opens with its own brand-blue drama */}
      <QualitaetsStatement />
      {/* Warm band: softens the exit from intense blue into the gallery */}
      <Meander variant="band" background="warm" />
      <Atmosphaere />
      {/* Brand band: energises the transition into the info/contact section */}
      <Meander variant="band" background="brand" />
      <Standort />
    </main>
  );
}
