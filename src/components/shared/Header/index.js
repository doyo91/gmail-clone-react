import React from "react"
import styles from "./Header.module.css"
import { IconButton } from "@material-ui/core"
import MenuIcon from "@material-ui/icons"

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.left}>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </div>
      <div className={styles.center}></div>
      <div className={styles.right}></div>
    </header>
  )
}
