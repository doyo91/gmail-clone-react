import React from "react"
import styles from "./Header.module.css"
import { Avatar, IconButton } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from "@material-ui/icons/Notifications"

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.left}>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          className={styles.logo}
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
        />
      </div>
      <div className={styles.middle}>
        <IconButton>
          <SearchIcon />
        </IconButton>

        <input
          className={styles.input}
          placeholder="Buscar correo"
          type="text"
        />
        <IconButton className={styles.iconButton}>
          <ArrowDropDownIcon className={styles.iconInput} />
        </IconButton>
      </div>
      <div className={styles.right}>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar />
      </div>
    </header>
  )
}
