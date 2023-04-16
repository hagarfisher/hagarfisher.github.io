import React, { Children } from "react";
import styles from "./style.module.scss";
function Paragraph({ children }) {
  return <div className={styles.text}>{children}</div>;
}

export default Paragraph;
