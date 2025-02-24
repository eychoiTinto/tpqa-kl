import "../styles/Creative.scss";
import img from "../assets/c-img2.png";

function Bold() {
  return (
    <section className="creative-cr">
      <div className="creative-content-cr-bold">
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
              빛나는 아이디어를 모아 고객의 성장을 도모하는 글로벌 리더가 되기
              위해.
            </p>
            <p>
              고객의 이야기를 전달하는 것을 넘어, 선명하고 강렬한 비전으로
              재구성할 수 있도록
            </p>
            <p>키너지랩은 오늘도 고민하고 직접 부딪히며 앞으로 나아갑니다.</p>
          </div>
        </div>

        <div className="image-container-cr">
          <img src={img} alt="Bold visual" />
        </div>
      </div>
    </section>
  );
}

export default Bold;
