"use client";
import { forwardRef } from "react";
import img from "../assets/img-1.png";
import "../styles/SecondHero.scss";

const HeroSecond = forwardRef((props, ref) => {

  return (
    <section className={`hero-second ${props.className}`} ref={ref}>
      <div className="hero-image-second">
        <img src={img} alt="Hero" />
      </div>
      <div className="hero-content-second">
        <p>
          우리는 모든 것을 영상으로 표현하는 시대에 살고 있습니다. 정보의 전달, 감정의 공유, 브랜드의 스토리텔링까지, <br />
          영상은 이제 단순한 매체를 넘어 사람들과 소통하는 가장 강력한 수단으로 자리 잡았습니다. <br />
          이런 변화의 중심에서, 키너지랩은 단순히 영상을 제작하는 것에 그치지 않습니다. 우리는 한 차원 높은 경험을 창조합니다.
        </p>
      </div>
    </section>
  );
});

HeroSecond.displayName = "HeroSecond";

export default HeroSecond;
