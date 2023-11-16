import { Link } from "react-router-dom";

import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
        <ul className={classes["routes-list"]}>
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
        <ul className={classes.socials}>
            <li>
              <a href="https://github.com/Rukiyat-Olalekan">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/rukiyat-olalekan/">
                {" "}
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/TheDevRukky">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </li>
          </ul>
        <p className={classes.reserved}>Copyright &nbsp; 2023 Rukiyat Olalekan. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
