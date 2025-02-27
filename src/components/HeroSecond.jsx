"use client";
import React, { forwardRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import img from "../assets/img-1.png";
import "../styles/SecondHero.scss";

const HeroSecond = forwardRef((props, ref) => {
  const { scrollY } = useScroll();

  const scale = useTransform(
    scrollY,
    [-70, 600],
    [0.797619, 1]
  );

  const imgScale = useTransform(
    scrollY,
    [-70, 600],
    [1, 1.5]
  );

  return (
    <section className="hero-second" ref={ref}>
      <motion.div className="hero-image-second" style={{ scale }}>
        <motion.img src={img} alt="Hero" style={{ scale: imgScale }} />
      </motion.div>
      <div className="hero-content-second">
        <p>
          우리는 모든 것을 영상으로 표현하는 시대에 살고 있습니다. 정보의
          전달, 감정의 공유, 브랜드의 스토리텔링까지, <br />
          영상은 이제 단순한 매체를 넘어 사람들과 소통하는 가장 강력한
          수단으로 자리 잡았습니다. <br />
          이런 변화의 중심에서, 키너지랩은 단순히 영상을 제작하는 것에 그치지
          않습니다. 우리는 한 차원 높은 경험을 창조합니다.
        </p>
      </div>
    </section>
  );
});

export default HeroSecond;
