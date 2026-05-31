import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Program from "@/components/Program";
import ForWhom from "@/components/ForWhom";
import Founders from "@/components/Founders";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { HomeScrollMemory } from "@/components/HomeScrollMemory";
import { HashCleaner } from "@/components/HashCleaner";

export default function Home() {
  return (
    <main>
      <HomeScrollMemory />
      <HashCleaner />
      <Header />
      <Hero />
      <PainPoints />
      <Program />
      <ForWhom />
      <Founders />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
}
