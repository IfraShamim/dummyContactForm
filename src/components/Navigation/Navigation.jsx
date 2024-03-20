import React from 'react'
import styles from "./Navigation.module.css"
const Navigation = () => {
  return (
  <nav className={styles.Navigation}>
    <div className={styles.logo}>
      <img src="./public/images/logo.png" alt="" />
    </div>
    <div className={styles.lists}>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    </div>
  </nav>
  )
}

export default Navigation