import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./style.module.scss";
function Section({ children, index, title }) {
  return (
    <div className={styles.container}>
      <SectionHeader index={index} title={title} />
      {children}
    </div>
  );
}

export default Section;
