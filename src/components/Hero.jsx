import "../styles/hero.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import img from "../assets/img-1.png";
import "../styles/SecondHero.scss";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const ref = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // const yImage = useTransform(
  //   scrollYProgress,
  //   [0, 0.5, 1],
  //   ["0%", "10%", "0%"]
  // );
  // const scaleImage = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

  useEffect(() => {
    const handleClick = (event) => {
      const heroSection = ref.current;
      if (!heroSection) return;

      const isInteractive = event.target.closest(
        "button, a, input, textarea, select"
      );
      if (isInteractive) return;

      const nextSection = heroSection.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    // document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroSecond = document.querySelector(".hero-second");
      if (heroSecond) {
        const rect = heroSecond.getBoundingClientRect();
        if (rect.top <= 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="hero" ref={ref}>
        <motion.div className="hero-nav" style={{ opacity }}>
          <h2 className="contents">CONTENTS</h2>
          <a href="mailto:hello@keynergylab.com">
            <motion.button
              className="contact-button"
              initial={false}
              whileHover="hover"
              animate="initial"
            >
              {/* Initial Button Content */}
              <motion.div
                className="button-content"
                variants={{
                  initial: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.7,
                      ease: "easeInOut",
                    },
                  },
                  hover: {
                    opacity: 0,
                    x: -40,
                    transition: {
                      duration: 0.7,
                      ease: "easeInOut",
                    },
                  },
                }}
              >
                <span className="button-text">contact</span>
                <motion.span
                  className="arrow"
                  variants={{
                    initial: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.7,
                        ease: "easeInOut",
                      },
                    },
                    hover: {
                      opacity: 0,
                      x: -40,
                      transition: {
                        duration: 0.7,
                        ease: "easeInOut",
                      },
                    },
                  }}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.8281 16.875H0V13.125H22.8281L12.3281 2.625L15 0L30 15L15 30L12.3281 27.375L22.8281 16.875Z"
                      fill="#0F0F0F"
                    />
                  </svg>
                </motion.span>
              </motion.div>

              {/* Hover Button Content */}
              <motion.div
                className="button-content hover-content"
                variants={{
                  initial: {
                    opacity: 0,
                    x: 40,
                    transition: {
                      duration: 0.7,
                      ease: "easeInOut",
                    },
                  },
                  hover: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.7,
                      ease: "easeInOut",
                    },
                  },
                }}
              >
                <motion.span
                  className="mail"
                  variants={{
                    initial: {
                      opacity: 0,
                      x: 40,
                      transition: {
                        duration: 0.7,
                        ease: "easeInOut",
                      },
                    },
                    hover: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.7,
                        ease: "easeInOut",
                      },
                    },
                  }}
                >
                  <svg
                    width="36"
                    height="33"
                    viewBox="0 0 36 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 15.6665L3.66671 7.33317V23.9998H18.6667V27.3332H0.333374V0.666504H33.6667V15.6665H30.3334V7.33317L17 15.6665ZM17 12.3332L30.3334 3.99984H3.66671L17 12.3332ZM28.6667 32.3332L26.3334 29.9998L28.9584 27.3332H22V23.9998H28.9584L26.2917 21.3332L28.6667 18.9998L35.3334 25.6665L28.6667 32.3332ZM3.66671 7.33317V25.6665V15.6665V15.7915V3.99984V7.33317Z"
                      fill="#0F0F0F"
                    />
                  </svg>
                </motion.span>
                <span className="button-text gradient-text">keynergy</span>
              </motion.div>
            </motion.button>
          </a>
        </motion.div>

        <motion.div className="hero-content" style={{ opacity }}>
          <p className="subtitle">
            SMART VIDEO PRODUCTION MAKES IT
            <br />A KEY TO CUSTOMER SUCCESS
          </p>
          <h1 className="main-heading">MAKE YOUR</h1>
        </motion.div>

        <motion.h1 className="main-heading-2" style={{ opacity }}>
          WORK BETTER
        </motion.h1>

        <motion.div
          className="scroll-down"
          style={{ opacity }}
          onClick={() => {
            const heroSection = ref.current;
            if (heroSection && heroSection.nextElementSibling) {
              heroSection.nextElementSibling.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <h1>SCROLL DOWN</h1>
          <svg
            width="12"
            height="16"
            viewBox="0 0 12 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3076 10.0963L5.99989 15.4038L0.692138 10.0963L1.41139 9.38856L5.49989 13.4771L5.49989 0.596307L6.49989 0.596307L6.49989 13.4771L10.5884 9.38856L11.3076 10.0963Z"
              fill="#0F0F0F"
            />
          </svg>
        </motion.div>
      </section>

      <section className={`hero-second ${isScrolled ? "scrolled" : ""}`}>
        <div className="hero-image-second">
          <img src={img} alt="" />
        </div>
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
    </>
  );
}
