import React from "react"
import styles from "./Mail.module.css"

import { IconButton } from "@material-ui/core"
import { useHistory } from "react-router-dom"
// Icons
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox"
import ErrorIcon from "@material-ui/icons/Error"
import DeleteIcon from "@material-ui/icons/Delete"
import EmailIcon from "@material-ui/icons/Email"
import WatchLaterIcon from "@material-ui/icons/WatchLater"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import LabelImportantIcon from "@material-ui/icons/LabelImportant"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore"
import PrintIcon from "@material-ui/icons/Print"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"

export const Mail = () => {
  const history = useHistory()

  return (
    <div className={styles.container}>
      <div className={styles.tools}>
        <div className={styles.toolsLeft}>
          <IconButton onClick={() => history.push("/")}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className={styles.toolsRight}>
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <section className={styles.content}>
        <div className={styles.contentHeader}>
          <h2>Subject</h2>
          <LabelImportantIcon className={styles.importantIcon} />
          <p>Title</p>
          <p className={styles.time}>10pm</p>
        </div>
        <div className={styles.message}>This is a message</div>
      </section>
    </div>
  )
}
