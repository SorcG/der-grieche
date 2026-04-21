import Hero from "@/components/sections/hero";
import Willkommen from "@/components/sections/willkommen";
import Meander from "@/components/ui/meander";

export default function Home() {
  return (
    <main>
      <Hero />
      <Meander background="surface" height={48} />
      <Willkommen />
      <Meander background="warm" height={48} />
    </main>
  );
}
