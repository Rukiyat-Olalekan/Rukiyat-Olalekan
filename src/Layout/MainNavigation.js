import { useState } from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "./MainNavigation.css";

const MainNavigation = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [showMenuLists, setShowMenuLists] = useState(false);

  const handleMenuLists = () => {
    setShowMenuLists(!showMenuLists);
    setShowMenu(false);
  };

  return (
    <nav>
      <h1 className="header">Rukiyat Olalekan</h1>
      <div>
        {showMenu ? (
          <div className="menu-bar" onClick={handleMenuLists}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        ) : (
          <div
            className="menu-bar"
            onClick={() => {
              setShowMenuLists(false);
              setShowMenu(!showMenu);
            }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </div>
        )}
      </div>
      <ul className={`nav-lists ${showMenuLists ? "block" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
