import { useRef } from "react";
import HeaderTwo from "../components/HeaderTwo";
import PortfolioSecond from "../components/PortfolioSecond";
import "../styles/Portfolio.scss";

function Portfolio() {
  const portfolioSecondRef = useRef(null);

  const handleScrollClick = () => {
    portfolioSecondRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <HeaderTwo />

      <section className="turning-ideas-pf">
        <div className="content-pf-wrap">
          <div className="content-pf">
            <div className="main-text-pf">
              <h2>
                turning
                <br />
                id<span className="highlight-pf">-</span>as
                <br />
                into
                <br />
                reali<span className="highlight-pf">-</span>y
              </h2>
            </div>
            <div className="side-content-pf">
              <h3>TURNING IDEAS INTO REALITY</h3>
              <div className="korean-text-pf">
                <p className="pretendard-font">
                  키너지랩은 창의적인 사고와 끊임없는 실행력을 바탕으로,
                </p>
                <p className="pretendard-font">
                  우상적인 아이디어를 구체적인 결과물로 만들어냅니다.
                </p>
                <p className="pretendard-font">
                  독창적인 솔루션과 체험한 컨텐츠 통해 브랜드의 가치를
                </p>
                <p className="pretendard-font">
                  극대화하며, 각 프로젝트마다 고객의 비전과 스토리를
                </p>
                <p className="pretendard-font">
                  담아냅니다. 우리의 포트폴리오는 그 여정을 담은 기록입니다.
                </p>

                <div
                  className="scroll-down-pf"
                  onClick={handleScrollClick}
                  style={{ cursor: "pointer" }}
                >
                  SCROLL DOWN{" "}
                  <svg
                    width="12"
                    height="16"
                    viewBox="0 0 12 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="arrow-pf"
                  >
                    <path
                      d="M11.3076 10.0963L5.99989 15.4038L0.692138 10.0963L1.41139 9.38856L5.49989 13.4771L5.49989 0.596307L6.49989 0.596307L6.49989 13.4771L10.5884 9.38856L11.3076 10.0963Z"
                      fill="#FFCC00"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-line-container-pf">
          <div className="bottom-line-pf"></div>
        </div>
      </section>

      <section ref={portfolioSecondRef}>
        <PortfolioSecond />
      </section>
    </>
  );
}

export default Portfolio;
