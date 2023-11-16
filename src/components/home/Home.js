import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import classes from "./Home.module.css";
import profile from "../../assets/profile.JPG";
import Tools from "./Tools";
import OverView from "./Overview";

const Home = () => {
  const [headerActive, setHeaderActive] = useState(true);

  useEffect(() => {
    function headerHandler() {
      setHeaderActive(true);
    }

    headerHandler();
  }, []);

  return (
    <>
      <div className={classes["profile-section"]}>
        <img src={profile} alt="profile" />
        <div>
        
            {" "}
            <h2 className={classes[`${headerActive ? "header-active" : ""}`]}>
              Frontend Developer
            </h2>
            <p className={classes[`${headerActive ? "para-active" : ""}`]}>
              Hi, I'm Rukiyat, a science enthusiast turned frontend developer.
              In the last months, I've mastered HTML, CSS, JavaScript, React and
              Next JS. When I'm not coding, you will catch me reading fictional
              books.
            </p>
 

          
        </div>
      </div>
      <section className={classes["home-intro"]}>
        <Tools />
        <OverView />
        <div className={classes.actions}>
          <button>
            <Link to="contact">Get in touch</Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
