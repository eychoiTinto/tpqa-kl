import "../styles/OurCreativeWork.scss";
import "aos/dist/aos.css";
import { motion, useAnimation } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import processData from "../data/process";

function OurCreativeWork({scrollY, standard}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stepsRef = useRef([]);
  const [activeSteps, setActiveSteps] = useState([]);

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
    const observer = new IntersectionObserver(
      (entries) => {
        setActiveSteps((prev) =>
          entries.reduce((acc, entry) => {
            const index = stepsRef.current.indexOf(entry.target);
            if (index !== -1) {
              acc[index] = entry.intersectionRatio > 0.5;
            }
            return acc;
          }, [...prev])
        );
      },
      { threshold: [0.5] } // 50% 이상 보이면 감지
    );

    stepsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
          {processData.map((step, index) => (
            <div
              key={`step_${index}`}
              ref={(el) => (stepsRef.current[index] = el)}
              className={`step-ocr ${activeSteps[index] ? "active" : ""}`}
            >
              <h4 dangerouslySetInnerHTML={{ __html: step.title }} />
              <div className="step-content-ocr">
                <p className="step-number-ocr" dangerouslySetInnerHTML={{ __html: step.number }} />
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
