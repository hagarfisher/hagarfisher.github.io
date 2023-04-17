import React from "react";
import styles from "./style.module.scss";
function SectionHeader({ index, title }) {
  return (
    <div className={styles["title-container"]}>
      <span className={styles.bullet}>{`${index}.`}</span>
      <div className={styles["title-text"]}>{title}</div>
    </div>
  );
}

export default SectionHeader;
