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
      <div style={{ padding: "24px 0" }}><Meander variant="divider" /></div>
      <Willkommen />
      <div style={{ padding: "24px 0" }}><Meander variant="divider" /></div>
      <TextFill />
      <div style={{ padding: "24px 0" }}><Meander variant="divider" /></div>
      <DreierReihe />
      <div style={{ padding: "24px 0" }}><Meander variant="divider" /></div>
      <Reviews />
      <div style={{ padding: "24px 0" }}><Meander variant="divider" /></div>
      <SignatureCard />
    </main>
  );
}
