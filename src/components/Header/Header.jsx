import React from "react";
import { useEffect, useState } from "react";
import useDeviceDetect from "../../hooks/useDeviceDetect";

import styles from "./style.module.scss";
import logo from "../../assets/logo-no-background.svg";
import { FaRegCircle, FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const { isMobile } = useDeviceDetect();

  const [showDrawer, setShowDrawer] = useState(false);

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
        {isMobile ? (
          <div className={styles["hamburger-container"]}>
            <button onClick={() => setShowDrawer(!showDrawer)}>
              {showDrawer ? (
                <FaTimes size={"20px"} />
              ) : (
                <FaBars size={"20px"} />
              )}
            </button>
            <aside
              className={
                showDrawer
                  ? `${styles["drawer-open"]} ${styles.drawer}`
                  : `${styles["drawer-closed"]}  ${styles.drawer}`
              }
            >
              <div className={styles["nav-links"]}>
                {links.map((link) => (
                  <div className={styles["nav-link"]}>
                    <a
                      onClick={() => {
                        setTimeout(() => setShowDrawer(false), 300);
                      }}
                      href={`/#${link.path}`}
                    >
                      {link.name}
                    </a>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        ) : (
          <div className={styles["nav-links"]}>
            {links.map((link) => (
              <div className={styles["nav-link"]}>
                <a href={`/#${link.path}`}>
                  {/* <FaRegCircle className={styles["nav-link-icon"]} /> */}
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;
