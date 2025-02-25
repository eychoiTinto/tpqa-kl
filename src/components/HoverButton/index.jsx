import { motion } from "framer-motion"
import "./module.style.scss";

const HoverButton = () => {
  return (
    <a href="mailto:hello@keynergylab.com">
      <div className="at_contact-button">
        {/* Initial Button Content */}
        <div className="at_button-content">
          {/* Initial Content */}
          <span className="at_button-text">contact</span>
        </div>
        <div className="at_button-content hover">
          {/* Hover Content */}
          <span className="at_button-text">keynergy</span>
        </div>
        {/* Icon */}
        <span className="at_icon">
          {/* Initial Icon */}
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.8281 16.875H0V13.125H22.8281L12.3281 2.625L15 0L30 15L15 30L12.3281 27.375L22.8281 16.875Z"
              fill="#0F0F0F"
            />
          </svg>

          {/* Hover Icon */}
          {/* <svg
            className="hover"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_1186_4682" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
            <rect width="40" height="40" fill="#0F0F0F"/>
            </mask>
            <g mask="url(#mask0_1186_4682)">
            <path d="M14.0002 15.4667L2.26683 8.13339V22.8001H15.4668V25.7334H-0.666504V2.26672H28.6668V15.4667H25.7335V8.13339L14.0002 15.4667ZM14.0002 12.5334L25.7335 5.20006H2.26683L14.0002 12.5334ZM24.2668 30.1334L22.2135 28.0801L24.5235 25.7334H18.4002V22.8001H24.5235L22.1768 20.4534L24.2668 18.4001L30.1335 24.2667L24.2668 30.1334ZM2.26683 8.13339V24.2667V15.4667V15.5767V5.20006V8.13339Z" fill="#0F0F0F"/>
            </g>
          </svg> */}
        </span>
      </div>
    </a>
  )
}

export default HoverButton
