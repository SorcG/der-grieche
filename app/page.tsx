import Meander from "@/components/Meander";
import Hero from "@/components/sections/Hero";
import Willkommen from "@/components/sections/Willkommen";
import QualitaetsAnspruch from "@/components/sections/QualitaetsAnspruch";
import DreieBildreihe from "@/components/sections/DreieBildreihe";
import Atmosphaere from "@/components/sections/Atmosphaere";
import ReviewsCarousel from "@/components/sections/ReviewsCarousel";
import TextFillStatement from "@/components/sections/TextFillStatement";
import SignatureCard from "@/components/sections/SignatureCard";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* White breather after the dark Hero */}
      <Meander variant="band" background="surface" />
      <Willkommen />
      {/* Warm creme band into the quality statement */}
      <Meander variant="band" background="warm" />
      <QualitaetsAnspruch />
      <DreieBildreihe />
      <Atmosphaere />
      {/* Brand blue band — energetic contrast before the bright reviews */}
      <Meander variant="band" background="brand" />
      <ReviewsCarousel />
      <TextFillStatement />
      <SignatureCard />
      {/* Dark ink band flowing into the Footer */}
      <Meander variant="band" background="ink" />
    </main>
  );
}
