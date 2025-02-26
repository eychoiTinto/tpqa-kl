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
  const [heroOpacity, setHeroOpacity] = useState(1);

  // 선형 보간 함수 (lerp)
  const lerp = (start, end, t) => start + (end - start) * t;

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        if (!HeroSecondRef.current) return;

        const heroSecondTop = HeroSecondRef.current.getBoundingClientRect().top;
        const startOpacityThreshold = window.innerHeight * 0.7; // 변화 시작 지점
        const endOpacityThreshold = window.innerHeight * 0.2; // 변화 완료 지점

        if (heroSecondTop <= startOpacityThreshold) {
          // progress: 0 (변화 시작) ~ 1 (완전히 사라짐)
          const progress = Math.min(
            Math.max((startOpacityThreshold - heroSecondTop) / (startOpacityThreshold - endOpacityThreshold), 0),
            1
          );

          setHeroOpacity(lerp(1, 0, progress)); // opacity 보간 적용
        } else {
          setHeroOpacity(1);
        }

        if (!CreativeRef.current) return;

        const creativeRect = CreativeRef.current.getBoundingClientRect();
        const startThreshold = window.innerHeight * 0.8; // 배경색 변경 시작 시점
        const endThreshold = window.innerHeight * 0.3; // 배경색 변경 완료 시점

        if (creativeRect.top <= startThreshold) {
          // progress: 0 (변화 시작) ~ 1 (완전히 어두워짐)
          const progress = Math.min(
            Math.max((startThreshold - creativeRect.top) / (startThreshold - endThreshold), 0),
            1
          );

          // 배경색 보간 적용
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

          // 최신 배경색을 즉시 적용
          document.body.style.backgroundColor = newBgColor;
        } else {
          setBgColor("rgb(240, 240, 240)");
          setRevertBgColor("rgb(15, 15, 15)");

          // 기본 배경색 설정
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
      <Hero style={{ opacity: heroOpacity, zIndex: heroOpacity < 1 ? '-10' : '0' }} />
      <HeroSecond ref={HeroSecondRef} />
      <Creative ref={CreativeRef} data-section="Creative" />
      <OurCreativeWork />
      <ClientLogos />
    </>
  );
}

export default Home;
