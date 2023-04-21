import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./style.module.scss";
function Section({ children, index, title, link }) {
  return (
    <div id={link} className={styles.container}>
      <SectionHeader index={index} title={title} />
      {children}
    </div>
  );
}

export default Section;
