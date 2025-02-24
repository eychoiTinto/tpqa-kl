import { Link } from "react-router-dom";
import "../styles/Header.scss";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="navbar">
      <nav className="nav-container">
        <Link to="/" className="brand">
          <img src={logo} alt="" />
        </Link>
        <div className="nav-links">
          <Link to="/portfolio" className="nav-link">
            Portfolio
          </Link>
          <a href="mailto:hello@keynergylab.com" className="nav-link">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
