import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { Impact } from "@/components/sections/Impact";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Testimonials />
      <Impact />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
