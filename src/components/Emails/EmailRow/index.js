import React from "react"
import styles from "./EmailRow.module.css"
import { Checkbox, IconButton } from "@material-ui/core"
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined"
import { useHistory } from "react-router-dom"

export const EmailRow = ({ id, title, subject, description, time }) => {
  const history = useHistory()

  return (
    <article
      className={styles.container}
      onClick={() => history.push(`/mail/${id}`)}
    >
      <div className={styles.options}>
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.message}>
        <h4>
          {subject}
          <span className={styles.description}> - {description}</span>
        </h4>
      </div>
      <div className={styles.time}>
        <p>{time}</p>
      </div>
    </article>
  )
}
