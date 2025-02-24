import { useState, useEffect } from "react";
import "../styles/PortfolioSecond.scss";
import p1 from "../assets/portfolio/p1.png";
import p2 from "../assets/portfolio/p2.png";
import p3 from "../assets/portfolio/p3.png";
import p4 from "../assets/portfolio/p4.png";
import p5 from "../assets/portfolio/p5.png";
import p6 from "../assets/portfolio/p6.png";
import p7 from "../assets/portfolio/p7.png";
import p8 from "../assets/portfolio/p8.png";
import p9 from "../assets/portfolio/p9.png";
import p10 from "../assets/portfolio/p10.png";
import p11 from "../assets/portfolio/p11.png";
import p12 from "../assets/portfolio/p12.png";
import AOS from "aos";
import "aos/dist/aos.css";

function PortfolioSecond() {
  const ITEMS_PER_PAGE = 9;
  const ITEMS_TO_LOAD = 3;

  const allPortfolioItems = [
    {
      id: 1,
      image: p1,
      title: "2024 GDC 인터뷰 촬영 티저 영상",
      category: "2024. 03",
    },
    {
      id: 2,
      image: p2,
      title: "2023 GDC 홍보 인포그래픽 영상 ",
      category: "2023. 11",
    },
    {
      id: 3,
      image: p3,
      title: "인포그래픽_성과공유영상",
      category: "2024. 03",
    },
    {
      id: 4,
      image: p4,
      title: "고객만족_현장스케치영상",
      category: "2024. 03",
    },
    {
      id: 5,
      image: p5,
      title: "6월 찾아가는진료_final",
      category: "2023. 05 - 2023. 12",
    },
    {
      id: 6,
      image: p6,
      title: "9월 주거환경개선사업_fina",
      category: "2023. 05 - 2023. 12",
    },
    {
      id: 7,
      image: p7,
      title: "9월 Before&After_final",
      category: "2023. 05 - 2023. 12",
    },
    {
      id: 8,
      image: p8,
      title: "CS워크숍영상",
      category: "2023. 05 - 2023. 12",
    },
    {
      id: 9,
      image: p9,
      title: "현장스케치_SH 예빛섬 영화제",
      category: "2023. 05 - 2023. 12",
    },
    {
      id: 10,
      image: p10,
      title: "현장스케치영상제작",
      category: "2023. 05 - 2023. 12",
    },
    {
      id: 11,
      image: p11,
      title: "서울도시주택공사",
      category: "2023. 05 - 2023. 12",
    },
    {
      id: 12,
      image: p12,
      title: "서울도시주택공사",
      category: "2023. 05 - 2023. 12",
    },
  ];

  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);
  const hasMoreItems = visibleItems < allPortfolioItems.length;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      disable: window.innerWidth < 768,
    });
  }, []);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleItems((prev) =>
        Math.min(prev + ITEMS_TO_LOAD, allPortfolioItems.length)
      );
      setIsLoading(false);
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }, 500);
  };

  return (
    <section className="portfolio-section-pff">
      <div data-aos="fade-up" className="portfolio-grid-pff">
        <div className="background-text-pff">portfolio</div>
        {allPortfolioItems.slice(0, visibleItems).map((item) => (
          <div key={item.id} className="portfolio-item-pff">
            <div className="portfolio-image-wrapper-pff">
              <img src={item.image || "/placeholder.svg"} alt={item.title} />
              <div className="overlay-pff">
                <p>{item.category}</p>
                <h3>{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      {hasMoreItems && (
        <div className="more-button-container-pff">
          <button
            className={`more-button-pff ${isLoading ? "loading" : ""}`}
            data-text="MORE"
            onClick={handleLoadMore}
            disabled={isLoading}
          >
            <span> {isLoading ? "LOADING..." : "MORE"}</span>
          </button>
        </div>
      )}
    </section>
  );
}

export default PortfolioSecond;
