import { motion } from "framer-motion"
import "./module.style.scss";

const HoverButton = () => {
  return (
    <a href="mailto:hello@keynergylab.com">
      <motion.button
        className="at_contact-button"
        initial={false}
        whileHover="hover"
        animate="initial"
      >
        {/* Initial Button Content */}
        <motion.div
          className="at_button-content"
        >
          {/* Initial Content */}
          <motion.span
            className="at_button-text"
            variants={{
              initial: {
                opacity: 1,
                left: 20,
                x: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeInOut",
                },
              },
              hover: {
                opacity: 0,
                left: 0,
                x: "-100%",
                transition: {
                  duration: 0.5,
                  ease: "easeInOut",
                },
              },
            }}
          >contact</motion.span>

          {/* Icon */}
          <motion.span
            className="at_icon"
            variants={{
              initial: {
                right: 15,
                background: "white",
                transition: {
                  duration: 0.5,
                  ease: "easeInOut",
                },
              },
              hover: {
                left: 15,
                background: "linear-gradient(270deg, #f2b813 10%, #ffdc00 100%)",
                transition: {
                  duration: 0.5,
                  ease: "easeInOut",
                }
              },
            }}
          >
            {/* Initial Icon */}
            <motion.svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              variants={{
                initial: {
                  opacity: 1,
                  visibility: "visible",
                },
                hover: {
                  opacity: 0,
                  visibility: "hidden",
                },
              }}
            >
              <path
                d="M22.8281 16.875H0V13.125H22.8281L12.3281 2.625L15 0L30 15L15 30L12.3281 27.375L22.8281 16.875Z"
                fill="#0F0F0F"
              />
            </motion.svg>

            {/* Hover Icon */}
            <motion.svg
              width="36"
              height="33"
              viewBox="0 0 36 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              variants={{
                initial: {
                  opacity: 0,
                  visibility: "hidden",
                },
                hover: {
                  opacity: 1,
                  visibility: "visible",
                },
              }}
            >
              <path
                d="M17 15.6665L3.66671 7.33317V23.9998H18.6667V27.3332H0.333374V0.666504H33.6667V15.6665H30.3334V7.33317L17 15.6665ZM17 12.3332L30.3334 3.99984H3.66671L17 12.3332ZM28.6667 32.3332L26.3334 29.9998L28.9584 27.3332H22V23.9998H28.9584L26.2917 21.3332L28.6667 18.9998L35.3334 25.6665L28.6667 32.3332ZM3.66671 7.33317V25.6665V15.6665V15.7915V3.99984V7.33317Z"
                fill="#0F0F0F"
              />
            </motion.svg>
          </motion.span>

          {/* Hover Content */}
          <motion.span
            className="at_button-text at_gradient-text"
            variants={{
              initial: {
                opacity: 0,
                left: "110%",
                // x: "100%",
                transition: {
                  duration: 0.5,
                  ease: "easeInOut",
                },
              },
              hover: {
                opacity: 1,
                left: 125,
                // x: 115,
                transition: {
                  duration: 0.5,
                  ease: "easeInOut",
                },
              },
            }}
          >keynargy</motion.span>

        </motion.div>
      </motion.button>
    </a>
  )
}

export default HoverButton
