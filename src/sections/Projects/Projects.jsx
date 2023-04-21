import React from "react";
import Section from "../../components/Section/Section";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import styles from "./style.module.scss";
function Projects() {
  const projects = [
    {
      name: "Recipe Tracker",
      description:
        "Recipe Tracker is a web application that allows users to keep track of their favorite recipes. Users can save them to their profile, and add their own recipes.",
      technologies: ["Typescript", "Next.js", "React", "Supabase"],
      github: "https://github.com/hagarfisher/recipes-tracker",
    },
    {
      name: "Supereasy",
      description:
        "Supereasy is a web application designed to help customers shop smarter at online supermarkets by finding the cheapest cart available.",
      technologies: ["Typescript", "Node.js", "React", "Bootstrap", "Prisma"],
      github: "https://github.com/hagarfisher/super-easy",
    },
  ];
  return (
    <Section title={"Projects"} index={3} link={"projects"}>
      <div className={styles["projects-container"]}>
        {projects.map((project) => (
          <ProjectCard
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
          />
        ))}
      </div>
    </Section>
  );
}

export default Projects;
