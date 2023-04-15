import React from "react";
import styles from "./style.module.scss";
import logo from "../../assets/logo-no-background.svg";
import { FaRegCircle } from "react-icons/fa";

function Header() {
  const links = [
    { name: "About", path: "" },
    { name: "Experience", path: "" },
    { name: "Work", path: "" },
    { name: "Contact", path: "" },
  ];
  return (
    <div className={styles["header"]}>
      <nav>
        {/* icon */}
        {/* hamburger  on mobile*/}
        <img className={styles.logo} src={logo} />
        <div className={styles["nav-links"]}>
          {links.map((link) => (
            <ul className={styles["nav-link"]}>
              <a href="#">
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
