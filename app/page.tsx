import Hero from "@/components/sections/hero";
import Willkommen from "@/components/sections/willkommen";
import TextFill from "@/components/sections/text-fill";
import DreierReihe from "@/components/sections/dreier-reihe";
import Reviews from "@/components/sections/reviews";
import SignatureCard from "@/components/sections/signature-card";
import Meander from "@/components/ui/meander";

export default function Home() {
  return (
    <main>
      <Hero />
      <Meander background="brand" height={48} />
      <Willkommen />
      <Meander background="brand" height={48} />
      <TextFill />
      <Meander background="brand" height={48} />
      <DreierReihe />
      <Meander background="brand" height={48} />
      <Reviews />
      <Meander background="brand" height={48} />
      <SignatureCard />
    </main>
  );
}



