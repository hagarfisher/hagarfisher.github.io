import React, { useState } from "react";
import styles from "./style.module.scss";
import Section from "../../components/Section/Section";
import Paragraph from "../../components/Paragraph/Paragraph";
import Bullet from "../../components/Bullet/Bullet";
function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(0);
  const experiences = [
    {
      category: "Education",
      title: "B.Sc in Computer Science",
      company: "The Academic College of Tel Aviv–Yaffo",
      timeframe: "2019 - 2022",
      content: [
        "Finished with GPA of 83.",
        "Took classes in Big Data, Web, Devops and Cyber security.",
        "Collaborated with peers on various projects.",
      ],
    },
    {
      category: "Work",
      title: "Full Stack Developer",
      company: "Responder",
      timeframe: "2021 - Present",
      content: [
        "Developed, tested, and implemented web applications using React, Typescript, Nodejs, and SQL.",
        "Increased customer upsell likelihood by implementing a prediction algorithm.",
        "Enhanced sales department efficiency by building a tool to calculate monthly commissions.",
        "Improved company decision-making by building data pipelines to gather and store deal data.",
      ],
    },
  ];

  return (
    <Section index={"2"} title={"Experience"} link={"experience"}>
      <div className={styles["container"]}>
        <div className={styles["tab-list"]}>
          {experiences.map((item, index) => {
            return (
              <button
                key={index}
                className={`${styles["tab-button"]} ${
                  selectedExperience == index ? styles["selected-tab"] : ""
                }`}
                onClick={() => setSelectedExperience(index)}
              >
                {item.category}
              </button>
            );
          })}
        </div>
        <Paragraph>
          <div className={styles["tab-content"]}>
            <h4>
              {experiences[selectedExperience].title}
              <span> @ </span>
              {experiences[selectedExperience].company}
            </h4>
            <p className={styles.timeframe}>
              {experiences[selectedExperience].timeframe}
            </p>
            {experiences[selectedExperience]?.content &&
              experiences[selectedExperience]?.content.map((bullet, index) => (
                <Bullet key={index} content={bullet} />
              ))}
          </div>
        </Paragraph>
      </div>
    </Section>
  );
}

export default Experience;
