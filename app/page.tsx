import Hero from "@/components/sections/hero";
import Willkommen from "@/components/sections/willkommen";
import Qualitaet from "@/components/sections/qualitaet";
import DreierReihe from "@/components/sections/dreier-reihe";
import Atmosphaere from "@/components/sections/atmosphaere";
import Meander from "@/components/ui/meander";

export default function Home() {
  return (
    <main>
      <Hero />
      <Meander background="surface" height={48} />
      <Willkommen />
      <Meander background="warm" height={48} />
      <Qualitaet />
      <Meander background="ink" height={48} />
      <DreierReihe />
      <Atmosphaere />
      <Meander background="brand" height={48} />
    </main>
  );
}
