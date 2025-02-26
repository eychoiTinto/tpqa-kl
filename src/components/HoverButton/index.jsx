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
          <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
            <mask id="mask_initial" maskUnits="userSpaceOnUse" x="26" y="26" width="40" height="40">
              <rect x="26" y="26" width="40" height="40" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask_initial)">
              <path d="M51.0453 45.6875H30.5V42.3125H51.0453L41.5953 32.8625L44 30.5L57.5 44L44 57.5L41.5953 55.1375L51.0453 45.6875Z" fill="#0F0F0F"/>
            </g>
          </svg>

          {/* Hover Icon */}
          <svg className="hover" xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
            <path d="M44.0002 45.4667L32.2668 38.1334V52.8001H45.4668V55.7334H29.3335V32.2667H58.6668V45.4667H55.7335V38.1334L44.0002 45.4667ZM44.0002 42.5334L55.7335 35.2001H32.2668L44.0002 42.5334ZM54.2668 60.1334L52.2135 58.0801L54.5235 55.7334H48.4002V52.8001H54.5235L52.1768 50.4534L54.2668 48.4001L60.1335 54.2667L54.2668 60.1334ZM32.2668 38.1334V54.2667V45.4667V45.5767V35.2001V38.1334Z" fill="#0F0F0F"/>
          </svg>
        </span>
      </div>
    </a>
  )
}

export default HoverButton
