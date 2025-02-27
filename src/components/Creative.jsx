
import { forwardRef, useRef, useState, useEffect  } from "react";
import "../styles/Creative.scss";
import img from "../assets/c-img.png";
import img2 from "../assets/c-img2.png";

const Creative = forwardRef((props, ref) => {
  const [start, setStart] = useState(null);
  const [activeClass, setActiveClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const currentScroll = window.scrollY;

      // start를 한 번만 설정 (rect.top >= -window.innerHeight * 0.5 조건 충족 시)
      if (start === null && rect.top === 0) {
        setStart(currentScroll);
      }

      if (start !== null) {
        const mid1 = start + window.innerHeight * 0.5;
        const end = mid1 + window.innerHeight * 0.5;

        if (currentScroll >= end) {
          setActiveClass("fadeout");
        } else if (currentScroll >= mid1) {
          setActiveClass("active2");
        } else if (currentScroll >= start) {
          setActiveClass("active1");
        } else {
          setActiveClass("");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref, start]);


  return (
    <section
      ref={ref}
      id="creative-section"
      className={`creative-cr ${activeClass}`}>
      <div className="creative-scroll-container">
        <div className={`creative-inner`}>
          <div className="creative-content-cr">
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
          </div>
          <div className="creative-content-cr">
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
          </div>

        </div>
      </div>
    </section>
  );
});

Creative.displayName = "Creative";

export default Creative;
