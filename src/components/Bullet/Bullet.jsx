import React from "react";
import styles from "./style.module.scss";
function Bullet({ content }) {
  return <div className={styles["bullet"]}>{content}</div>;
}

export default Bullet;
