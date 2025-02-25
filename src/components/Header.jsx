import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/Header.scss";
// import logo from "../assets/logo.png";
import { useNavbarContext } from "../contexts/NevbarContext";
import Logo from "../assets/logos/Logo";

function Header() {
  const { navbarColor } = useNavbarContext();

  const linkVariants = {
    initial: { color: "#0F0F0F" },
    animate: { color: navbarColor === "#F0F0F0" ? "#0F0F0F" : "#F0F0F0" },
  };

  return (
    <motion.header
      className="navbar"
      animate={{ backgroundColor: navbarColor, transition: "background-color 0.3s ease", borderBottomColor: navbarColor === "#F0F0F0" ? "#0f0f0f4d" : "#ffffff4d" }}
      viewport={{ amount: 1 }}
    >
      <nav className="nav-container">
        <Link to="/" className="brand" passHref>
            <Logo fill={navbarColor === "#F0F0F0" ? "#0F0F0F" : "#F0F0F0"}/>
          {/* <img src={logo} alt="" /> */}
        </Link>

        <div className="nav-links">
          <Link to="/portfolio" className="nav-link" passHref>
            <motion.span variants={linkVariants} initial="initial" animate="animate">
              Portfolio
            </motion.span>
          </Link>

          <motion.a variants={linkVariants} initial="initial" animate="animate" href="mailto:hello@keynergylab.com" className="nav-link">
            Contact
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
}

export default Header;
