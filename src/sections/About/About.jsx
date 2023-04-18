import React from "react";
import styles from "./style.module.scss";
import Section from "../../components/Section/Section";
import Paragraph from "../../components/Paragraph/Paragraph";
import placeholderPhoto from "../../assets/placeholder.png";
import Bullet from "../../components/Bullet/Bullet";
function About({ title, index }) {
  const technologies = [
    "Javascript",
    "Typescript",
    "Node.js",
    "React",
    "Next.js",
    "SQL",
  ];
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl mauris, pretium sed sagittis vel, porttitor id ligula. Cras id orci diam. Nulla molestie mi ut lectus iaculis, ut auctor tellus sagittis. Mauris auctor euismod facilisis. Duis blandit consectetur felis, eu fermentum odio semper sed. Suspendisse vehicula porttitor arcu, quis blandit tellus placerat non. Nam eleifend in lorem quis congue. Curabitur volutpat velit at ante hendrerit vestibulum. Maecenas vel hendrerit mauris. Sed mattis nibh eu eleifend ultrices. Nam a justo ut massa posuere facilisis. Nulla commodo erat nec auctor fermentum. Nullam porttitor orci nisl, nec suscipit sapien fermentum nec.";
  return (
    <Section title={title} index={index}>
      <Paragraph>
        <div className={styles["about-container"]}>
          <div className={styles["content"]}>
            <p>{lorem}</p>
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
