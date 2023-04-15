import React from "react";
import styles from "./style.module.scss";
import Header from "../Header/Header";
function Main() {
  return (
    <>
      <div className={styles["main-container"]}>
        <Header />
        <div className={styles.page}>
          {/* <div className={styles["accent-element"]}>i am an accent element</div> */}
          <h1 className={styles["title"]}>Hello</h1>
          <h2 className={styles["secondary-text"]}>this is a smaller text</h2>
        </div>
      </div>
    </>
  );
}

export default Main;
