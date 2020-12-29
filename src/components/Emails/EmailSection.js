import React from "react"
import styles from "./Emails.module.css"

export const EmailSection = ({ Icon, title, color, selected }) => {
  return (
    <div
      className={`${styles.section} ${selected && styles.selected}`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  )
}
