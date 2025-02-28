import { useState, useEffect } from "react";
import "../styles/ClientLogo.scss";
import { motion } from "framer-motion";

const logoPositions = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

const rowVariants = {
  hidden: { opacity: 0},
  visible: (index) => ({
    opacity: 1,
    transition: {
      delay: index * 0.1,
      duration: 1.2,
      ease: "easeInOut",
    },
  }),
};

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
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 1, onLeave: "hidden" }}
            variants={rowVariants}
          >
            {row.map((position, colIndex) => {
              const logoIndex = rowIndex * row.length + colIndex;
              return (
                <motion.div key={`${rowIndex}-${colIndex}`} className="logo-item">
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
                </motion.div>
              );
            })}
          </motion.div>
        ))} */}
      </div>
    </section>
  );
}

export default ClientLogos