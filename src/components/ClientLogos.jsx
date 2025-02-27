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

const rowVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.6,
      ease: "easeInOut",
    },
  }),
};

export default function ClientLogos() {
  return (
    <section className="client-logos">
      <div className="logo-container">
        {logoPositions.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="logo-row"
            custom={rowIndex}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
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
        ))}
      </div>
    </section>
  );
}
