import ClientLogos from "../components/ClientLogos";
import Creative from "../components/Creative";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HeroSecond from "../components/HeroSecond";
import OurCreativeWork from "../components/OurCreativeWork";
import { NavbarProvider } from "../contexts/NevbarContext";

function Home() {
  return (
    <NavbarProvider>
      <Header />
      <Hero />
      <HeroSecond />
      <Creative />
      <OurCreativeWork />
      <ClientLogos />
    </NavbarProvider>
  );
}

export default Home;
