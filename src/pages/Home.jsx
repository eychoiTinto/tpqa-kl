import ClientLogos from "../components/ClientLogos";
import Creative from "../components/Creative";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HeroSecond from "../components/HeroSecond";
import OurCreativeWork from "../components/OurCreativeWork";
import { motion } from "framer-motion";
import { useNavbarContext } from "../contexts/NevbarContext";

function Home() {
  const { setNavbarColor } = useNavbarContext();

  return (
    <>
      <Header />
      <Hero />
      <HeroSecond />
      <Creative />
      <motion.div
        onViewportEnter={() => setNavbarColor("#0F0F0F")} // Change navbar color
        onViewportLeave={() => setNavbarColor("#F0F0F0")} // Reset navbar color
      >
        <OurCreativeWork />
        <ClientLogos />
      </motion.div>
    </>
  );
}

export default Home;
