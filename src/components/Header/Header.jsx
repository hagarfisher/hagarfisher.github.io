import React from "react";
import styles from "./style.module.scss";
import logo from "../../assets/logo-no-background.svg";
import { FaRegCircle } from "react-icons/fa";

function Header() {
  const links = [
    { name: "About", path: "about" },
    { name: "Experience", path: "experience" },
    { name: "Projects", path: "projects" },
    { name: "Contact", path: "contact" },
  ];
  return (
    <div className={styles["header"]}>
      <nav>
        <div className={styles["logo-container"]}>
          <a href="#">
            <img className={styles.logo} src={logo} />
          </a>
        </div>
        <div className={styles["nav-links"]}>
          {links.map((link) => (
            <ul className={styles["nav-link"]}>
              <a href={`/#${link.path}`}>
                <FaRegCircle className={styles["nav-link-icon"]} />
                {link.name}
              </a>
            </ul>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Header;
