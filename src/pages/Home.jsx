import Navbar from "../components/layout/Navbar";

import Hero3D from "../components/sections/Hero3D";
import About from "../components/sections/About";
import Workflow from "../components/sections/Workflow";
import ProductCatalog from "../components/sections/ProductCatalog";
import Statistics from "../components/sections/Statistics";
import Services from "../components/sections/Services";

import ParticleBackground from "../components/three/ParticleBackground";

export default function Home() {
  return (
    <>
      <ParticleBackground />

      <Navbar />

      <Hero3D />

      <Statistics />

      <Services />

      <About />

      <Workflow />

      <ProductCatalog />
    </>
  );
}
