import ClientSection from "./components/container/ClientSection/ClientSection";
import Hero from "./components/container/HeroSection";
import ProcessSection from "./components/container/ProcessSection/ProcessSection";
import ResultSection from "./components/container/ResultSection/ResultSection";
import Navbar from "./components/ui/Navbar/Navbar";



function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientSection />
        <ResultSection />
        <ProcessSection />
      </main>
    </>
  );
}

export default App;
