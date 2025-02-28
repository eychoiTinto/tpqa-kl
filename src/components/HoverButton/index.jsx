import { motion } from "framer-motion"
import "./module.style.scss";

const HoverButton = () => {
  return (
    <a href="mailto:hello@keynergylab.com">
      <div className="contact-btn">
        <div className="btn-content">
          <div className="text">contact</div>
          <div className="at-icon"></div>
        </div>
        <div className="btn-content hover">
          <div className="at-icon"></div>
          <div className="text">keynergy</div>
        </div>
      </div>
    </a>
  )
}

export default HoverButton
