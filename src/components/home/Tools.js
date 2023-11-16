import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/javascript.svg";
import react from "../../assets/react.svg";
import next from "../../assets/next.svg"

import classes from "./Tools.module.css";

const tools = [
  {
    id: 1,
    title: "HTML",
    description:
      "I write clean and efficient markup using HTML5 standards and also incorporating up-to-date developments.",
    image: html,
  },
  {
    id: 2,
    title: "CSS",
    description:
      "I have great control of visual elements to create visually appealing and functional styling across various devices and screen sizes.",
    image: css,
  },
  {
    id: 3,
    title: "JS",
    description:
      "I love using javascript to create interactive and engaging user experience. I write clean and maintainable code per requirement.",
    image: js,
  },
  {
    id: 4,
    title: "React",
    description:
      "I create exeptional and reusable user interfaces. Enhancing user experience and ensuring optimal performance.",
    image: react,
  },
  {
    id: 5,
    title: "Next",
    description:
      "I use Next.js to add extra features to React applications, including server-side rendering and generating static websites.",
    image: next,
  },
];

const Tool = (props) => {
  return (
    <div className={classes["tool-item"]}>
      <img src={props.image} alt={props.title} />
      <div>{props.description}</div>
    </div>
  );
};

const Tools = () => {
  return (
    <div className={classes["tools-lists"]}>
      <h3>Tools</h3>
      <ul className={classes["tools-list"]}>
        {tools.map((tool) => {
          return (
            <Tool
              key={tool.id}
              image={tool.image}
              title={tool.title}
              description={tool.description}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Tools;
