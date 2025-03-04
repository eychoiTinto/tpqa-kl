import { useEffect, useRef, useState } from "react";
import ClientLogos from "../components/ClientLogos";
import Creative from "../components/Creative";
import Hero from "../components/Hero";
import HeroSecond from "../components/HeroSecond";
import OurCreativeWork from "../components/OurCreativeWork";

function Home({ scrollY, pageRef }) {
  const [scrollingHeight, setScrollingHeight] = useState(window.innerHeight);
  const [mainPosY, setMainPosY] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [clickCount, setClickCount] = useState(0);

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
    const maxTransformY = -(mainElement.scrollHeight - scrollingHeight * 13);
    // 일반 스크롤 구간
    const scrollThreshold = scrollingHeight * 5;
    if (scrollY >= scrollThreshold) {
      newTransformY = -scrollingHeight * 2 - (scrollY - scrollThreshold);
      transitionEnabled = false;
    }

    // 최소값 적용 (newTransformY가 maxTransformY보다 작아지지 않도록 제한)
    if (newTransformY < maxTransformY) newTransformY = maxTransformY;

    mainElement.style.transition = transitionEnabled ? "0.8s" : "none";
    mainElement.style.transform = `translateY(${newTransformY}px)`;

    setMainPosY(newMainPosY);
    setCreativeClass(newCreativeClass);
    setTranslateY(newTransformY);
  }, [scrollY, scrollingHeight]);

  const handleClick = () => {
    if (!pageRef.current || clickCount >= 4) return; // 일반 스크롤 영역이면 클릭 막기
  
    let newClickCount = clickCount + 1;
    let newScrollY = 0;
  
    if (newClickCount === 1) newScrollY = scrollingHeight;
    else if (newClickCount === 2) newScrollY = scrollingHeight * 2;
    else if (newClickCount === 3) newScrollY = scrollingHeight * 3.5;
    else if (newClickCount === 4) newScrollY = scrollingHeight * 5; // 일반 스크롤 진입
  
    // 🔥 실제 스크롤 이동
    pageRef.current.scrollTo({ top: newScrollY, behavior: "smooth" });
  
    // ✅ clickCount 업데이트 (단, 일반 스크롤 이후로는 변경 X)
    setClickCount(newClickCount);
  };
  
  // ✅ 스크롤 이벤트에서 clickCount 업데이트
  useEffect(() => {
    const handleScroll = () => {
      if (!pageRef.current) return;
  
      const scrollPos = pageRef.current.scrollTop;
      let newClickCount = clickCount;
  
      if (scrollPos >= scrollingHeight * 5) {
        newClickCount = 4; // 일반 스크롤 구간
      } else if (scrollPos >= scrollingHeight * 3.5) {
        newClickCount = 3;
      } else if (scrollPos >= scrollingHeight * 2) {
        newClickCount = 2;
      } else if (scrollPos >= scrollingHeight) {
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
    <div onClick={handleClick}>
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
      <OurCreativeWork scrollY={translateY} standard={scrollingHeight * 3} />
      <ClientLogos scrollY={translateY} standard={scrollingHeight * 3} />
    </div>
  );
}

export default Home;
