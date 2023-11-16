import { Link } from "react-router-dom";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.links}>
        {" "}
        <ul>
          <li>
            <Link to="https://github.com/Rukiyat-Olalekan">GITHUB</Link>
            <p>Check my projects on github</p>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/rukiyat-olalekan/">
              LINKEDIN
            </Link>
            <p>Follow on linkedIn. I post daily about web development</p>
          </li>
          <li>
            <Link to="https://twitter.com/TheDevRukky">TWITTER</Link>
            <p>
              Follow for web design & development articles, opinions, and links
            </p>
          </li>
        </ul>
      </div>
      <div className={classes.routes}>
        {" "}
        <ul>
          <li>
            <Link to="/projects">PROJECTS</Link>
            <p>Check Rukiyat's previous works</p>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
            <p>Get to know Rukiyat</p>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
            <p>Send a message. Let's collaborate</p>
          </li>
        </ul>
      </div>
      <div className={classes.color}></div>
    </footer>
  );
};

export default Footer;
