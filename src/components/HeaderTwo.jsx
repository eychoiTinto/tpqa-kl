import { Link } from "react-router-dom";
import "../styles/Header.scss";
import logo from "../assets/logo-black.png";

function HeaderTwo() {
  return (
    <header className="navbar-black">
      <nav className="nav-container">
        <Link to="/" className="brand">
          <img src={logo} alt="" />
        </Link>
        <div className="nav-links">
          <Link to="/portfolio" className="nav-link-black">
            Portfolio
          </Link>
          <a href="mailto:hello@keynergylab.com" className="nav-link-black">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default HeaderTwo;
