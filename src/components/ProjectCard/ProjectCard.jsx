import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import styles from "./style.module.scss";

import { FiGithub } from "react-icons/fi";
function ProjectCard({ name, description, technologies, github }) {
  return (
    <div className={styles["card-container"]}>
      <div className={styles["icons"]}>
        <a href={github} target="_blank">
          <FiGithub size={"1.8em"} />
        </a>
      </div>
      <h3>{name}</h3>
      <Paragraph>{description}</Paragraph>
      <p className={styles.technologies}>
        {technologies.map((item) => (
          <div>{`${item} `}</div>
        ))}
      </p>
    </div>
  );
}

export default ProjectCard;
