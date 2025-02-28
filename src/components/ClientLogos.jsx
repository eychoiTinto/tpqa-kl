import { useEffect, useRef, useState } from "react";
import "../styles/ClientLogo.scss";
import { motion } from "framer-motion";

const logoNames = [
  "hyndai.png",
  "bank-korea.png",
  "samsung.png",
  "nongshim-logo.png",
  "lgkorea.png",
  "sh-logo.png",
  "hd-logo.png",
  "lg-cns.png",
  "stemco.png",
  "hana-logo.png",
  "sba-logo.png",
  "eu-logo.png",
  "kim-chang-logo.png", 
  "kpmg.png",
  "doosan-logo.png", 
  "korea-center-logo.png", 
  "craft-art-logo.png",
  "lg-logo.png",
  "yes-logo.png",
  "habitat-logo.png", 
  "blue-tree-logo.png",
  "ktr-logo.png",  
  "kdb-logo.png",
  "ajol-logo.png", 
  "charm-fre-logo.png", 
];

const logos = logoNames.map((name, index) => ({
  id: index + 1,
  src: `/assets/logos/${name}`,
  alt: name.replace(/[-_]/g, " ").replace(".png", "") + " Logo",
}));

const logoPositions = [
  ["0% 0%", "20% 0%", "40% 0%", "60% 0%", "80% 0%"],
  ["0% 20%", "20% 20%", "40% 20%", "60% 20%", "80% 20%"],
  ["0% 40%", "20% 40%", "40% 40%", "60% 40%", "80% 40%"],
  ["0% 60%", "20% 60%", "40% 60%", "60% 60%", "80% 60%"],
  ["0% 80%", "20% 80%", "40% 80%", "60% 80%", "80% 80%"],
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

export default function ClientLogos() {
  return (
    <section className="client-logos">
      <div className="logo-container">
        {logoPositions.map((row, rowIndex) => (
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
        ))}
      </div>
    </section>
  );
}
