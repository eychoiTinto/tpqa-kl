import "../styles/Creative.scss";
import img from "../assets/c-img.png";
import img2 from "../assets/c-img2.png";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const contentVariants = {
  enter: (direction) => ({
    y: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    y: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

function Creative() {
  const [activeContent, setActiveContent] = useState("creative");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionTop =
        document.getElementById("creative-section")?.offsetTop || 0;
      const sectionHeight =
        document.getElementById("creative-section")?.offsetHeight || 0;

      const triggerPoint = sectionTop + sectionHeight * 0.1;

      setActiveContent(scrollPosition >= triggerPoint ? "bold" : "creative");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="creative-section" className="creative-cr">
      <AnimatePresence
        initial={false}
        custom={activeContent === "creative" ? -1 : 1}
      >
        {activeContent === "creative" ? (
          <motion.div
            key="creative"
            className="creative-content-cr"
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: "easeInOut" }}
            custom={-1}
          >
            <div className="text-content-cr">
              <h2>CREATIVE</h2>
              <div className="description-cr">
                <div className="highlight">
                  <p className="highlight-cr">스마트한 영상제작으로</p>
                  <span className="hyfen">
                    <svg
                      width="26"
                      height="2"
                      viewBox="0 0 26 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="26" height="2" fill="#FFCC00" />
                    </svg>
                  </span>{" "}
                  <p className="highlight-cr">고객 성공의 KEY가 되다.</p>
                </div>
                <p>
                  우리는 기업의 핵심 메시지를 효과적이고 스마트한 영상 콘텐츠로
                  구현하여
                </p>
                <p>
                  고객의 가치를 극대화하는 혁신적 미디어 솔루션을 제공합니다.
                </p>
                <p>
                  고객 성공의 KEY로서 고객이 최고의 위치에 오를 수 있도록 함께
                  성장합니다.
                </p>
              </div>
            </div>

            <div className="image-container-cr">
              <img src={img || "/placeholder.svg"} alt="Creative visual" />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="bold"
            className="creative-content-cr-bold"
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: "easeInOut" }}
            custom={1}
          >
            <div className="text-content-cr">
              <h2>BOLD</h2>
              <div className="description-cr">
                <div className="highlight">
                  <p className="highlight-cr">모든 기업이 신뢰할 수 있는</p>
                  <span className="hyfen">
                    <svg
                      width="26"
                      height="2"
                      viewBox="0 0 26 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="26" height="2" fill="#FFCC00" />
                    </svg>
                  </span>{" "}
                  <p className="highlight-cr">영상 콘텐츠 파트너.</p>
                </div>
                <p>
                  빛나는 아이디어를 모아 고객의 성장을 도모하는 글로벌 리더가
                  되기 위해.
                </p>
                <p>
                  고객의 이야기를 전달하는 것을 넘어, 선명하고 강렬한 비전으로
                  재구성할 수 있도록
                </p>
                <p>
                  키너지랩은 오늘도 고민하고 직접 부딪히며 앞으로 나아갑니다.
                </p>
              </div>
            </div>

            <div className="image-container-cr">
              <img src={img2 || "/placeholder.svg"} alt="Bold visual" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Creative;
