import React from 'react'
import styles from './style.module.scss'
function Header() {
  return (
    <div className={styles["main-background"]}>
      <div className={styles["accent-element"]}>
        i am an accent element
      </div>
        <h1 className={styles["title"]}>Hello</h1>
        <h2 className={styles["secondary-text"]}>this is a smaller text</h2>
    </div>
  )
}

export default Header