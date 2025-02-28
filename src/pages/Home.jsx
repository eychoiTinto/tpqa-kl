import { useEffect, useRef, useState } from "react";
import ClientLogos from "../components/ClientLogos";
import Creative from "../components/Creative";
import Hero from "../components/Hero";
import HeroSecond from "../components/HeroSecond";
import OurCreativeWork from "../components/OurCreativeWork";

function Home({scrollY}) {
  const [scrollingHeight, setScrollingHeight] = useState(window.innerHeight);
  const [mainPosY, setMainPosY] = useState(0);

  const HeroSecondRef = useRef(null);
  const CreativeRef = useRef(null);
  const [creativeClass, setCreativeClass] = useState("");

  useEffect(() => {
    const updateScrollingHeight = () => {
      setScrollingHeight(window.innerHeight);
    };

    window.addEventListener("resize", updateScrollingHeight);
    updateScrollingHeight();

    return () => {
      window.removeEventListener("resize", updateScrollingHeight);
      document.body.style.backgroundColor = "";
    };
  }, []);

  useEffect(() => {
    const mainElement = document.querySelector("main");
    if (!mainElement) return;

    let newTransformY = 0;
    let newCreativeClass = "";
    let newMainPosY = 0;
    let transitionEnabled = true;

    if (scrollY > 0) {
      newTransformY = -scrollingHeight;
      newMainPosY = scrollingHeight;

      if (scrollY >= scrollingHeight * 2) {
        newTransformY = -scrollingHeight * 2;
        newCreativeClass = "active1";
      }
      if (scrollY >= scrollingHeight * 3.5) {
        newCreativeClass = "active2";
      }
      if (scrollY >= scrollingHeight * 5) {
        newTransformY = -scrollingHeight * 3;
        newCreativeClass = "fadeout";
      }
    }

    // 일반 스크롤 구간
    const scrollThreshold = scrollingHeight * 6.5;
    if (scrollY >= scrollThreshold) {
      newTransformY = -scrollingHeight * 3 - (scrollY - scrollThreshold);
      transitionEnabled = false;
    }

    mainElement.style.transition = transitionEnabled ? "0.8s" : "none";
    mainElement.style.transform = `translateY(${newTransformY}px)`;

    mainElement.style.transform = `translateY(${newTransformY}px)`;
    setMainPosY(newMainPosY);
    setCreativeClass(newCreativeClass);
  }, [scrollY, scrollingHeight]);

  return (
    <>
      <Hero style={{ transform: `translateY(${mainPosY}px)`, opacity: `${mainPosY !== 0 ? '0' : '1'}`}} />
      <HeroSecond ref={HeroSecondRef} className={mainPosY !== 0 ? "active" : ""} />
      <Creative ref={CreativeRef} className={`creative-container ${creativeClass}`} />
      <OurCreativeWork />
      <ClientLogos />
    </>
  );
}

export default Home;
