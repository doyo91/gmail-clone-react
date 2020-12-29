import React from "react"
import styles from "./SidebarOptions.module.css"

export const SidebarOptions = ({ Icon, title, number, selected }) => {
  return (
    <div className={`${styles.container} ${selected && styles.active}`}>
      <Icon className={styles.icon} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.number}>{number}</p>
    </div>
  )
}
