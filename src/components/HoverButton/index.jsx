import { motion } from "framer-motion"
import "./module.style.scss";

const HoverButton = () => {
  return (
    <a href="mailto:hello@keynergylab.com" className="contact-btn">
      <span className="btn-content">
        <span className="text">contact</span>
        <span className="at-icon"></span>
      </span>
      <span className="btn-content hover">
        <span className="at-icon"></span>
        <span className="text">keynergy</span>
      </span>
    </a>
  )
}

export default HoverButton
