import "../styles/OurCreativeWork.scss";
import "aos/dist/aos.css";
import { motion, useAnimation } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

function useScrollFade(ref) {
  const [isVisible, setIsVisible] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    if (!ref.current) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > prevScrollY.current;

      const rect = ref.current.getBoundingClientRect();
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const windowHeight = window.innerHeight;

      const visibleHeight =
        Math.min(elementBottom, windowHeight) - Math.max(elementTop, 0);
      const elementVisibleRatio = visibleHeight / rect.height;

      if (scrollingDown) {
        if (elementVisibleRatio > 0.5) {
          setIsVisible(true);
        }
      } else {
        if (elementTop > windowHeight * 0.5) {
          setIsVisible(false);
        }
      }

      prevScrollY.current = currentScrollY;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return isVisible;
}

function FadeInSection({ children, className }) {
  const ref = useRef(null);
  const isVisible = useScrollFade(ref);

  return (
    <div
      ref={ref}
      className={`fade-section ${className} ${
        isVisible ? "fade-in" : "fade-out"
      }`}
    >
      {children}
    </div>
  );
}

function OurCreativeWork() {
  const controls = useAnimation();
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true); // 한 번만 실행하도록 상태 변경
      controls.start({
        x: ["100%", "-100%"],
        transition: { duration: 8.5, repeat: Infinity, ease: "linear" },
      });
    }
  }, [isInView, hasAnimated, controls]);

  return (
    <section className="creative-work-ocr">
      <div className="content-ocr-wrapper" ref={ref}>
        <motion.div className="content-ocr" style={{transform: 'translateX(100%)'}} animate={controls}>
          <h2>OUR CREATIVE WORKFLOW</h2>
        </motion.div>
      </div>

      <div className="process-section-ocr">
        <div className="process-header-ocr">
          <h3>PROCESS</h3>
          <div className="process-intro-ocr">
            <p className="en-ocr">
              For us, the entire process of<br className="br-pc"/> creating content is a
              delightful journey.
            </p>

            <p className="ko-ocr">
              키너지랩의 콘텐츠를 만드는 모든 과정은 즐거운 여정입니다. <br className="br-pc"/>
              우리는 각 단계를 통해 얻는 열정과 성취감을 소중하게 여기며 자랑합니다.
            </p>
          </div>
        </div>

        <div className="process-steps-ocr">
          <FadeInSection className="step-ocr">
            <h4>Contents Request</h4>
            <div className="step-content-ocr">
              <p className="step-number-ocr">01. 콘텐츠 의뢰</p>
              <div className="step-description-ocr">
                <p className="ko-ocr">
                  필요한 영상의 방향성과 목적을 논의하는 단계입니다. <br className="br-pc"/>
                  고객의 니즈를 깊이 이해하고, 구체적인 요구사항을 정리하여 <br className="br-pc"/>
                  맞춤형 영상 제작의 기초를 탄탄히 다집니다.
                </p>
                <p className="en-ocr">
                  This Stage Defines The Video&apos;s Direction And Aligns{" "} 
                  <br className="br-pc"/>
                  With The Client&apos;s Needs For Tailored Production.
                </p>
              </div>
            </div>
          </FadeInSection>

          <div className="border-top"></div>
          <FadeInSection className="step-ocr">
            <h4>Consulting & Proposal</h4>
            <div className="step-content-ocr">
              <p className="step-number-ocr">02. 전략 컨설팅 및 제안</p>
              <div className="step-description-ocr">
                <p className="ko-ocr">
                  브랜드와 메시지에 가장 적합한 컨셉을 분석합니다. <br className="br-pc"/>
                  창의적인 아이디어를 바탕으로, 고객의 비전을 실현할 <br className="br-pc"/> 효과적이고 독창적인 방향을 제안합니다.
                </p>
                <p className="en-ocr">
                  We Craft Concepts That Align With The Brand, Offering <br className="br-pc"/>
                  Creative And Effective Solutions To Realize The Client&apos;s
                  Vision.
                </p>
              </div>
            </div>
          </FadeInSection>

          <div className="border-top"></div>
          <FadeInSection className="step-ocr">
            <h4>Content Planning</h4>
            <div className="step-content-ocr">
              <p className="step-number-ocr">03. 영상 콘텐츠 기획</p>
              <div className="step-description-ocr">
                <p className="ko-ocr">
                  고객의 메시지를 시청자에게 가장 효과적으로 전달할 수 있도록 <br className="br-pc"/>
                  치밀한 콘텐츠 기획을 진행합니다. 이를 통해 목표와 목적을 달성하는 동시에 <br className="br-pc"/>
                  시청자의 관심을 끌어모을 수 있는 기획안을 완성합니다.
                </p>
                <p className="en-ocr">
                  We carefully plan content to effectively deliver <br className="br-pc"/>
                  the client’s message and capture the audience’s attention.
                </p>
              </div>
            </div>
          </FadeInSection>

          <div className="border-top"></div>
          <FadeInSection className="step-ocr">
            <h4>
              Storyboard & <br /> Conti Production
            </h4>
            <div className="step-content-ocr">
              <p className="step-number-ocr">04. 스토리보드 & 콘티 제작</p>
              <div className="step-description-ocr">
                <p className="ko-ocr">
                  기획된 내용을 구체적으로 시각화하여 영상의 흐름을 정리합니다. <br className="br-pc"/>
                  명확한 구성과 디테일한 설명으로 제작 과정을 <br className="br-pc"/>
                  효율적이고 체계적으로 진행할 수 있도록 합니다.
                </p>
                <p className="en-ocr">
                  We visualize the plan and organize the video flow, <br className="br-pc"/>
                  ensuring clear structure and efficient production.
                </p>
              </div>
            </div>
          </FadeInSection>

          <div className="border-top"></div>
          <FadeInSection className="step-ocr">
            <h4>
              Visual Story <br /> Architecture
            </h4>
            <div className="step-content-ocr">
              <p className="step-number-ocr">05. 영상 디자인</p>
              <div className="step-description-ocr">
                <p className="ko-ocr">
                  영상의 시각적 톤과 스타일을 설계해 브랜드 정체성을 강화합니다. <br className="br-pc"/>
                  메시지를 효과적으로 전달하면서도 시청자의 시선을 사로잡는 <br className="br-pc"/>
                  매력적인 디자인을 구현합니다.
                </p>
                <p className="en-ocr">
                  We craft visual styles that strengthen brand identity <br className="br-pc"/>
                  and captivate audiences while delivering the message
                  effectively.
                </p>
              </div>
            </div>
          </FadeInSection>

          <div className="border-top"></div>
          <FadeInSection className="step-ocr">
            <h4>Filming</h4>
            <div className="step-content-ocr">
              <p className="step-number-ocr">06. 촬영</p>
              <div className="step-description-ocr">
                <p className="ko-ocr">
                  촬영 단계에서는 기획과 디자인을 바탕으로 고퀄리티의 영상을 <br className="br-pc"/>
                  만듭니다. 최신 장비와 전문가의 기술로 세부적인 디테일까지 <br className="br-pc"/>
                  완벽하게 담아낸 영상을 제작합니다.
                </p>
                <p className="en-ocr">
                  We create high-quality videos using expert technique <br className="br-pc"/>
                  and advanced equipment, capturing every detail with precision.
                </p>
              </div>
            </div>
          </FadeInSection>

          <div className="border-b"></div>
        </div>
      </div>
    </section>
  );
}

export default OurCreativeWork;
