

import ClientSection from "./components/container/ClientSection";
import ContactFormSection from "./components/container/ContactFormSection";
import FaqSection from "./components/container/FaqSection";
import Hero from "./components/container/HeroSection";
import IndustrySection from "./components/container/IndustrySection/IndustrySection";
import ProcessSection from "./components/container/ProcessSection";
import ProjectSection from "./components/container/ProjectSection";
import ResultSection from "./components/container/ResultSection";
import ServiceSection from "./components/container/ServiceSection";
import TestimoniSection from "./components/container/TestimoniSection";
import Footer from "./components/ui/Footer";
import { Navbar } from "./components/ui/Navbar";



function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero/>
        <ClientSection />
        <ResultSection />
        <ProcessSection />
        <ServiceSection />
        <IndustrySection />
        <ProjectSection />
        <TestimoniSection />
        <FaqSection />
        <ContactFormSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
