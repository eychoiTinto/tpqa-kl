import "../styles/OurCreativeWork.scss";
import "aos/dist/aos.css";
import { motion, useAnimation } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

function OurCreativeWork({scrollY, standard}) {
  const [processData, setProcessData] = useState([]);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stepsRef = useRef([]);
  const [activeSteps, setActiveSteps] = useState([]);

  useEffect(() => {
    fetch("/data/process.json")
      .then((response) => response.json())
      .then((data) => {
        setProcessData(data);
        setActiveSteps(new Array(data.length).fill(false));
      })
      .catch((error) => console.error("데이터를 불러오는 중 오류 발생:", error));
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: ["100%", "-100%"],
        transition: { duration: 7.5, repeat: Infinity, ease: "linear" },
      });
    } else {
      controls.stop();
    }
  }, [isInView, controls]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const centerY = window.innerHeight / 2;

      const visibleEntries = entries.filter((entry) => entry.isIntersecting);

      if (visibleEntries.length === 0) return;

      let closestIndex = -1;
      let closestDistance = Infinity;

      visibleEntries.forEach((entry) => {
        const index = stepsRef.current.indexOf(entry.target);
        if (index !== -1) {
          const rect = entry.boundingClientRect;
          const elementCenter = rect.top + rect.height / 2;
          const distance = Math.abs(centerY - elementCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });

      const updated = new Array(processData.length).fill(false);
      if (closestIndex !== -1) updated[closestIndex] = true;

      setActiveSteps(updated);
    }, {
      threshold: 0.5, // 살짝이라도 보이면 감지
    });

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => {
      observer.disconnect();
    };
  }, [processData]);


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
              For us, the entire process of creating content is a
              delightful journey.
            </p>

            <p className="ko-ocr">
              키너지랩의 콘텐츠를 만드는 모든 과정은 즐거운 여정입니다. <br className="br-pc"/>
              우리는 각 단계를 통해 얻는 열정과 성취감을 소중하게 여기며 자랑합니다.
            </p>
          </div>
        </div>

        <div className="process-summary-area">
          <ul className="process-list">
            {/* 1 */}
            <li className="process-item">
              <div className="item-inner">
                <div className="line-area">
                  <span className="circle"></span>
                  <span className="line"></span>
                </div>
                <div className="text-area">
                  <div className="title-area">
                    <h4 className="title">콘텐츠 제작 컨설팅</h4>
                    <h5 className="subtitle">Consulting & Proposal</h5>
                  </div>
                  <div className="list">
                    Content Strategy ㅣ Creative Consulting
                  </div>
                </div>
              </div>
            </li>
            {/* 2 */}
            <li className="process-item">
              <div className="item-inner">
                <div className="line-area">
                  <span className="circle"></span>
                  <span className="line"></span>
                </div>
                <div className="text-area">
                  <div className="title-area">
                    <h4 className="title">영상콘텐츠 기획</h4>
                    <h5 className="subtitle">Content Planning</h5>
                  </div>
                  <div className="list">
                    Video Planning ㅣ Concept & Ideation
                  </div>
                </div>
              </div>
            </li>
            {/* 3 */}
            <li className="process-item">
              <div className="item-inner">
                <div className="line-area">
                  <span className="circle"></span>
                  <span className="line"></span>
                </div>
                <div className="text-area">
                  <div className="title-area">
                    <h4 className="title">스토리보드 & 콘티 구성</h4>
                    <h5 className="subtitle">Storyboard & Conti Production</h5>
                  </div>
                  <div className="list">
                    Storyboarding ㅣ Video Structure
                  </div>
                </div>
              </div>
            </li>
            {/* 4 */}
            <li className="process-item">
              <div className="item-inner">
                <div className="line-area">
                  <span className="circle"></span>
                  <span className="line"></span>
                </div>
                <div className="text-area">
                  <div className="title-area">
                    <h4 className="title">영상 디자인</h4>
                    <h5 className="subtitle">Visual Story Architecture</h5>
                  </div>
                  <div className="list">
                    Visual Design ㅣ Infographics <br />
                    Motion Graphic
                  </div>
                </div>
              </div>
            </li>
            {/* 5 */}
            <li className="process-item">
              <div className="item-inner">
                <div className="line-area">
                  <span className="circle"></span>
                  <span className="line"></span>
                </div>
                <div className="text-area">
                  <div className="title-area">
                    <h4 className="title">촬영</h4>
                    <h5 className="subtitle">Filming</h5>
                  </div>
                  <div className="list">
                    Video Shooting / Filming
                  </div>
                </div>
              </div>
            </li>
            {/* 6 */}
            <li className="process-item">
              <div className="item-inner">
                <div className="line-area">
                  <span className="circle"></span>
                  <span className="line"></span>
                </div>
                <div className="text-area">
                  <div className="title-area">
                    <h4 className="title">AI 종합 편집</h4>
                    <h5 className="subtitle">AI Integrated Editing</h5>
                  </div>
                  <div className="list">
                    Post Production ㅣ Video Editing <br />
                    AI-Powered Editi
                  </div>
                </div>
              </div>
            </li>
            {/* 7 */}
            <li className="process-item">
              <div className="item-inner">
                <div className="line-area">
                  <span className="circle"></span>
                  <span className="line"></span>
                </div>
                <div className="text-area">
                  <div className="title-area">
                    <h4 className="title">오디오 편집</h4>
                    <h5 className="subtitle">Audio Editing</h5>
                  </div>
                  <div className="list">
                    Sound Design ㅣ Audio Editing  <br />
                    Narrative Sound Crafting
                  </div>
                </div>
              </div>
            </li>
            {/* 8 */}
            <li className="process-item">
              <div className="item-inner">
                <div className="line-area">
                  <span className="circle"></span>
                  <span className="line"></span>
                </div>
                <div className="text-area">
                  <div className="title-area">
                    <h4 className="title">최종 납품</h4>
                    <h5 className="subtitle">Final Delivery</h5>
                  </div>
                  <div className="list">
                    Final Delivery ㅣ Video Export
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="process-steps-ocr">
          {processData.map((step, index) => (
            <div
              key={`step_${index}`}
              ref={(el) => (stepsRef.current[index] = el)}
              className={`step-ocr ${activeSteps[index] ? "active" : ""}`}
            >
              <h4 dangerouslySetInnerHTML={{ __html: step.enTitle }} />
              <div className="step-content-ocr">
                <p className="step-number-ocr" dangerouslySetInnerHTML={{ __html: step.koTitle }} />
                <div className="step-description-ocr">
                  <p className="ko-ocr" dangerouslySetInnerHTML={{ __html: step.ko }} />
                  <p className="en-ocr" dangerouslySetInnerHTML={{ __html: step.en }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurCreativeWork;
