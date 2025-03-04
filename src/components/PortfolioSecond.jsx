import { useState, useEffect } from "react";
import "../styles/PortfolioSecond.scss";
import AOS from "aos";
import "aos/dist/aos.css";

function PortfolioSecond() {
  const ITEMS_PER_PAGE = 9;
  const ITEMS_TO_LOAD = 3;

  const [portfolioItems, setPortfolioItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);
  const hasMoreItems = visibleItems < portfolioItems.length;

  useEffect(() => {
    fetch("/data/portfolioItems.json")
      .then((response) => response.json())
      .then((data) => setPortfolioItems(data))
      .catch((error) => console.error("데이터를 불러오는 중 오류 발생:", error));
  }, []);

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
        Math.min(prev + ITEMS_TO_LOAD, portfolioItems.length)
      );
      setIsLoading(false);
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }, 500);
  };

  return (
    <section className="portfolio-section-pff">
      <div data-aos="fade-up">
        <div className="portfolio-grid-pff">
          <div className="background-text-pff">portfolio</div>
          {portfolioItems.slice(0, visibleItems).map((item) => (
            <div key={item.id} className="portfolio-item-pff">
              <div className="portfolio-image-wrapper-pff">
                <img src={`${item.image}`} alt={item.title} />
                <div className="overlay-pff">
                  <p>{item.period}</p>
                  <h3>{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        {hasMoreItems && (
          <div className="more-button-container-pff">
            <button
              className={`more-button-pff active ${isLoading ? "loading" : ""}`}
              data-text="MORE"
              onClick={handleLoadMore}
              disabled={isLoading}
            >
              <span> {isLoading ? "LOADING..." : "MORE"}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default PortfolioSecond;
