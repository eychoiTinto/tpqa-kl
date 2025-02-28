import { useEffect, useRef, useState } from "react";
import ClientLogos from "../components/ClientLogos";
import Creative from "../components/Creative";
import Hero from "../components/Hero";
import HeroSecond from "../components/HeroSecond";
import OurCreativeWork from "../components/OurCreativeWork";

function Home({scrollY}) {
  const [scrollingHeight, setScrollingHeight] = useState(window.innerHeight);
  const [mainPosY, setMainPosY] = useState(0);
  const [translateY, setTranslateY] = useState(0);

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
    }

    // 최대 이동값 제한 (음수 값으로 설정)
    console.log('mainElement.offsetHeight', mainElement.scrollHeight)
    console.log('window.innerHeight * 11', window.innerHeight * 11 - scrollingHeight * 3 + 215)
    const maxTransformY = -(window.innerHeight * 11 - scrollingHeight * 3 + 215);

    // 일반 스크롤 구간
    const scrollThreshold = scrollingHeight * 5;
    if (scrollY >= scrollThreshold) {
      newTransformY = -scrollingHeight * 2 - (scrollY - scrollThreshold);
      transitionEnabled = false;
    }

    // 최소값 적용 (newTransformY가 maxTransformY보다 작아지지 않도록 제한)
    newTransformY = Math.max(newTransformY, maxTransformY);

    mainElement.style.transition = transitionEnabled ? "0.8s" : "none";
    mainElement.style.transform = `translateY(${newTransformY}px)`;

    setMainPosY(newMainPosY);
    setCreativeClass(newCreativeClass);
    setTranslateY(newTransformY);
  }, [scrollY, scrollingHeight]);

  return (
    <>
      <Hero style={{ transform: `translateY(${mainPosY}px)`, opacity: `${mainPosY !== 0 ? '0' : '1'}`}} />
      <HeroSecond ref={HeroSecondRef} className={mainPosY !== 0 ? "active" : ""} />
      <Creative ref={CreativeRef} className={`creative-container ${creativeClass}`} />
      <OurCreativeWork scrollY={translateY} standard={scrollingHeight * 3} />
      <ClientLogos scrollY={translateY} standard={scrollingHeight * 3}/>
    </>
  );
}

export default Home;
