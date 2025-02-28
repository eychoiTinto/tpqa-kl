import { useEffect, useRef, useState } from "react";
import "../styles/ClientLogo.scss";
import { motion } from "framer-motion";

const logoPositions = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

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
        if (elementVisibleRatio > 0.8) {
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

function ClientLogos() {
  const [logoItems, setLogoItems] = useState([]);
  
  useEffect(() => {
    fetch("/data/partnersLogo.json")
      .then((response) => response.json())
      .then((data) => setLogoItems(data))
      .catch((error) => console.error("데이터를 불러오는 중 오류 발생:", error));
  }, []);

  const logos = logoItems.map((partner, index) => ({
    id: index + 1,
    src: `${partner.image}`,
    alt: partner.name,
  }));

  return (
    <section className="client-logos">
      <div className="logo-container">
        {logos.map((logo) => (
          <div key={logo.id} className="logo-item">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
        {/* {logoPositions.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="logo-row"
            custom={rowIndex}
          >
            {row.map((position, colIndex) => {
              const logoIndex = rowIndex * row.length + colIndex;
              return (
                <FadeInSection key={`${rowIndex}-${colIndex}`} className="logo-item">
                  <img
                    src={logos[logoIndex].src}
                    alt={logos[logoIndex].alt}
                    style={{
                      opacity: 1 - rowIndex * 0.2,
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `../assets/logos/placeholder.svg`;
                    }}
                  />
                </FadeInSection>
              );
            })}
          </motion.div>
        ))} */}
      </div>
    </section>
  );
}

export default ClientLogos