import { Link } from "react-router-dom";
import "../styles/Header.scss";
import Logo from "../assets/logos/Logo";

function Header({ bgColor='rga(250,250,250)', revertBgColor='rgb(15,15,15)' }) {
  const borderColorWithOpacity = revertBgColor.replace("rgb", "rgba").replace(")", ", 0.3)");

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="navbar" style={{ backgroundColor: bgColor, borderColor: borderColorWithOpacity }}>
      <nav className="nav-container">
        <Link to="/" className="brand" onClick={handleLogoClick}>
            <Logo fill={revertBgColor}/>
        </Link>

        <div className="nav-links" style={{ color: revertBgColor }}>
          <Link to="/portfolio" className="nav-link">
            <span>
              Portfolio
            </span>
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
