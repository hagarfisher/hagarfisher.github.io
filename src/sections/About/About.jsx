import React from "react";
import styles from "./style.module.scss";
import Section from "../../components/Section/Section";
import Paragraph from "../../components/Paragraph/Paragraph";
import placeholderPhoto from "../../assets/placeholder.png";
import Bullet from "../../components/Bullet/Bullet";
function About() {
  const technologies = [
    "Javascript",
    "Typescript",
    "Node.js",
    "React",
    "Next.js",
    "SQL",
  ];
  const aboutMeContent =
    "Experienced full-stack engineer with 2 years of expertise in React and web development. Proficient in creating and managing applications using multiple programming languages, such as JavaScript, HTML, CSS, SQL, and Node.js. Proven ability to create efficient and reliable web solutions.";
  return (
    <Section title={"About me"} index={"1"} link={"about"}>
      <Paragraph>
        <div className={styles["about-container"]}>
          <div className={styles["content"]}>
            <p>{aboutMeContent}</p>
            <div className={styles["bullet-list"]}>
              {technologies.map((item) => (
                <Bullet content={item} />
              ))}
            </div>
          </div>
          <img className={styles.framed} src={placeholderPhoto} />
        </div>
      </Paragraph>
    </Section>
  );
}

export default About;
