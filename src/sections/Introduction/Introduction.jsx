import React from "react";
import styles from "./style.module.scss";
import Paragraph from "../../components/Paragraph/Paragraph";
function Introduction() {
  const text = `
  `;

  return (
    <div className={styles.container}>
      <h4>Hi, my name is</h4>
      <h1>Hagar Fisher.</h1>
      <h2>I like to build web stuff.</h2>
      <Paragraph>
        <p
          className={styles["paragraph-text"]}
        >{`I am a full-stack developer passionate about creating innovative and functional web applications. I am working on various exciting projects in my current job and building personal projects to explore new technologies and improve my coding abilities.`}</p>
      </Paragraph>
      <a
        className={styles["contact-button"]}
        href="mailto:hagarfisher@gmail.com"
        target="_blank"
      >
        Contact Me
      </a>
    </div>
  );
}

export default Introduction;
