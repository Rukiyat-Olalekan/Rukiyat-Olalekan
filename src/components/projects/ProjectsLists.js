import classes from "./ProjectsLists.module.css";

const projects = [
  {
    id: "1",
    name: "vanlife",
    link: "https://github.com/Rukiyat-Olalekan/van-life-app",
    description:
      "The van-life app is an e-commerce app where users can rent vans. Users are able to navigate through different routes. It also includes an auth page, once users are verified they are directed to the host page where they can see information of their van rentage history if any.",
  },
  {
    id: "2",
    name: "healthdiaries",
    link: "https://github.com/Rukiyat-Olalekan/health-diaries",
    description:
      "Health diaries is a blog website where users can read about health related articles. Authentication is also set in place for users that wants to join the health community.",
  },
  {
    id: "3",
    name: "rukky-radiance-skin",
    link: "https://github.com/Rukiyat-Olalekan/rukky-radiance-skin",
    description:
      "Rukky radiance skin is an e-commmerce skin care retail website where users can view, buy and pay.",
  },
];

const Project = (props) => {
  return (
    <li className={classes.project}>
      <div className={classes["project-num"]}>
        <h3>{props.id}.</h3>
        <div className={classes["project-overview"]}>
          <p>
            Check <a href={props.link}>{props.name}</a> on Github
          </p>
        </div>
      </div>
      <div className={classes["project-description"]}>
        {" "}
        <p>{props.description}</p>
      </div>
    </li>
  );
};
const ProjectsLists = () => {
  return (
    <div className={classes.projects}>
      <h3 className={classes["projects-header"]}>
        These are some of my projects, check out more on{" "}
        <a href="https://github.com/Rukiyat-Olalekan">Github</a>
      </h3>
      <ul className={classes["project-lists"]}>
        {projects.map((project) => {
          return (
            <Project
              key={project.id}
              id={project.id}
              link={project.link}
              description={project.description}
              name={project.name}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectsLists;
