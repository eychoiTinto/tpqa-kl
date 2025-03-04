import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react"
import "../styles/Header.scss";
import Logo from "../assets/logos/Logo";

function Header({ bgColor='rgb(250,250,250)', revertBgColor='rgb(15,15,15)', isHome, pageRef }) {
  const location = useLocation();
  const borderColorWithOpacity = revertBgColor.replace("rgb", "rgba").replace(")", ", 0.3)");

  const handleLogoClick = () => {
    if (pageRef?.current) {
      pageRef.current.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.classList.add("home");
    } else {
      document.body.classList.remove("home");
    }

    return () => {
      document.body.classList.remove("home");
    };
  }, [location.pathname]);

  const homeStyle = {
    backgroundColor: bgColor,
    borderColor: borderColorWithOpacity
  }

  const otherStyle = {
    backgroundColor: revertBgColor,
    borderColor: borderColorWithOpacity
  }

  return (
    <header className={`navbar`} style={isHome ? homeStyle : otherStyle}>
      <nav className="nav-container">
        <Link to="/" className="brand" onClick={handleLogoClick}>
            <Logo fill={isHome ? revertBgColor : bgColor} />
        </Link>

        <div className="nav-links" style={{ color: isHome ? revertBgColor : bgColor }}>
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
