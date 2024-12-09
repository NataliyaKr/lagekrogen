import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import logo from "../assets/logo/legekrogen_logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {!isOpen && <img className="logo" src={logo} alt="legekrogen_logo" />}

      <div className="burger-menu" onClick={toggleMenu}>
        {isOpen ? (
          <IoClose size={47} />
        ) : (
          <div>
            <GiHamburgerMenu size={47} />{" "}
          </div>
        )}
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <NavLink to="/">Forside</NavLink>
        </li>
        <li>
          <NavLink to="/products">Producter</NavLink>
        </li>
        <li>
          <NavLink to="">FAQ</NavLink>
        </li>
        <li>
          <NavLink to="/">Kundeklubben</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Backoffice</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
