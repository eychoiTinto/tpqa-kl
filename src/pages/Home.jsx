import { useEffect, useRef, useState } from "react";
import ClientLogos from "../components/ClientLogos";
import Creative from "../components/Creative";
import Hero from "../components/Hero";
import HeroSecond from "../components/HeroSecond";
import OurCreativeWork from "../components/OurCreativeWork";

function Home({ scrollY, pageRef }) {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [mainPosY, setMainPosY] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const HeroSecondRef = useRef(null);
  const CreativeRef = useRef(null);
  const [creativeClass, setCreativeClass] = useState("");

  useEffect(() => {
    const updatewindowHeight = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", updatewindowHeight);
    updatewindowHeight();

    return () => {
      window.removeEventListener("resize", updatewindowHeight);
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
      newTransformY = -windowHeight;
      newMainPosY = windowHeight;

      if (scrollY >= windowHeight * 1) {
        newTransformY = -windowHeight * 2;
        newCreativeClass = "active1";
      }
      if (scrollY >= windowHeight * 2) {
        newCreativeClass = "active2";
      }
    }

    // 최대 이동값 제한 (음수 값으로 설정)
    const maxTransformY = -(mainElement.scrollHeight - windowHeight * 13);
    // 일반 스크롤 구간
    const scrollThreshold = windowHeight * 3.5;
    if (scrollY >= scrollThreshold) {
      newTransformY = -windowHeight * 2 - (scrollY - scrollThreshold);
      transitionEnabled = false;
    }

    console.log(mainElement)

    // 최소값 적용 (newTransformY가 maxTransformY보다 작아지지 않도록 제한)
    if (newTransformY < maxTransformY) newTransformY = maxTransformY;

    mainElement.style.transition = transitionEnabled ? "0.8s" : "none";
    mainElement.style.transform = `translateY(${newTransformY}px)`;

    setMainPosY(newMainPosY);
    setCreativeClass(newCreativeClass);
    setTranslateY(newTransformY);
  }, [scrollY, windowHeight]);

  // ✅ 스크롤 이벤트에서 clickCount 업데이트
  useEffect(() => {
    const handleScroll = () => {
      if (!pageRef.current) return;
  
      const scrollPos = pageRef.current.scrollTop;
      let newClickCount = clickCount;
  
      if (scrollPos >= windowHeight * 3) {
        newClickCount = 4; // 일반 스크롤 구간
      } else if (scrollPos >= windowHeight * 2) {
        newClickCount = 3;
      } else if (scrollPos >= windowHeight * 1) {
        newClickCount = 2;
      } else if (scrollPos >= windowHeight) {
        newClickCount = 1;
      } else {
        newClickCount = 0;
      }
  
      setClickCount(newClickCount);
    };
  
    pageRef.current?.addEventListener("scroll", handleScroll);
    return () => pageRef.current?.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <div>
      <Hero
        style={{
          transform: `translateY(${mainPosY}px)`,
          opacity: `${mainPosY !== 0 ? "0" : "1"}`,
        }}
      />
      <HeroSecond
        ref={HeroSecondRef}
        className={mainPosY !== 0 ? "active" : ""}
      />
      <Creative
        ref={CreativeRef}
        className={`creative-container ${creativeClass}`}
      />
      <OurCreativeWork scrollY={translateY} standard={windowHeight * 3} />
      <ClientLogos scrollY={translateY} standard={windowHeight * 3} />
    </div>
  );
}

export default Home;
