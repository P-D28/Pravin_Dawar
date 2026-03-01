import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Tools } from './components/Tools';
import { Process } from './components/Process';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { MyWork } from './components/MyWork';
import { WhyChooseMe } from './components/WhyChooseMe';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { NoiseOverlay } from './components/NoiseOverlay';
import { CustomCursor } from './components/CustomCursor';
import { DesignElements } from './components/DesignElements';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-white/20">
      <CustomCursor />
      <DesignElements />
      <NoiseOverlay />
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Tools />
        <Process />
        <Services />
        <Portfolio />
        <MyWork />
        <WhyChooseMe />
        <Testimonials />
        <FAQ />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
