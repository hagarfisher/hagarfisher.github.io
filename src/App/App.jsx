import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import React from "react";
import Header from "../components/Header/Header";
import About from "../sections/About/About";
import Introduction from "../sections/Introduction/Introduction";
import Experience from "../sections/Experience/Experience";
import Projects from "../sections/Projects/Projects";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={styles["main-container"]}>
      <Header />
      <div className={styles.sections}>
        <Introduction />
        <About />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}

export default App;
