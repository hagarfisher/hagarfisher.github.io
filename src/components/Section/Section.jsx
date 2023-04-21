import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./style.module.scss";
function Section({ children, index, title, link }) {
  return (
    <div className={styles.container}>
      <a href={`#${link}`} aria-hidden="true"></a>
      <SectionHeader index={index} title={title} />
      {children}
    </div>
  );
}

export default Section;
