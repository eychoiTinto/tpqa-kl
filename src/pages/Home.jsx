import { useEffect, useRef, useState } from "react";
import ClientLogos from "../components/ClientLogos";
import Creative from "../components/Creative";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HeroSecond from "../components/HeroSecond";
import OurCreativeWork from "../components/OurCreativeWork";

function Home() {
  const HeroSecondRef = useRef(null);
  const CreativeRef = useRef(null);
  const [bgColor, setBgColor] = useState("rgb(240, 240, 240)");
  const [revertBgColor, setRevertBgColor] = useState("rgb(15, 15, 15)");
  const [isHeroFaded, setIsHeroFaded] = useState(false);

  // 선형 보간 함수 (lerp)
  const lerp = (start, end, t) => start + (end - start) * t;

  useEffect(() => {
    const handleScroll = () => {
      // 메인텍스트 페이드아웃
      if (!HeroSecondRef.current) return;

      const heroSecondTop = HeroSecondRef.current.getBoundingClientRect().top;
      const fadeThreshold = window.innerHeight * 0.7;

      if (heroSecondTop <= fadeThreshold) {
        setIsHeroFaded(true);
      } else {
        setIsHeroFaded(false);
      }

      requestAnimationFrame(() => {
        // 배경색 변경
        if (!CreativeRef.current) return;

        const creativeRect = CreativeRef.current.getBoundingClientRect();
        const startThreshold = window.innerHeight * 0.8;
        const endThreshold = window.innerHeight * 0.3;

        if (creativeRect.top <= startThreshold) {
          const progress = Math.min(
            Math.max((startThreshold - creativeRect.top) / (startThreshold - endThreshold), 0),
            1
          );

          const r = Math.round(lerp(240, 15, progress));
          const g = Math.round(lerp(240, 15, progress));
          const b = Math.round(lerp(240, 15, progress));
          const revertR = Math.round(lerp(15, 240, progress));
          const revertG = Math.round(lerp(15, 240, progress));
          const revertB = Math.round(lerp(15, 240, progress));

          const newBgColor = `rgb(${r}, ${g}, ${b})`;
          const newRevertBgColor = `rgb(${revertR}, ${revertG}, ${revertB})`;

          setBgColor(newBgColor);
          setRevertBgColor(newRevertBgColor);

          document.body.style.backgroundColor = newBgColor;
        } else {
          setBgColor("rgb(240, 240, 240)");
          setRevertBgColor("rgb(15, 15, 15)");

          document.body.style.backgroundColor = "rgb(240, 240, 240)";
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 실행 (페이지 로드시 확인)

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.backgroundColor = ""; // 언마운트 시 초기화
    };
  }, []);

  return (
    <>
      <Header bgColor={bgColor} revertBgColor={revertBgColor} />
      <Hero className={isHeroFaded ? "fadeout" : ""} />
      <HeroSecond ref={HeroSecondRef} />
      <Creative ref={CreativeRef} data-section="Creative" />
      <OurCreativeWork />
      <ClientLogos />
    </>
  );
}

export default Home;
