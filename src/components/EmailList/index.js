import React from "react"
import styles from "./EmailList.module.css"
import { Checkbox, IconButton } from "@material-ui/core"
// Icons
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import RedoIcon from "@material-ui/icons/Redo"
import MoreVertIcon from "@material-ui/icons/MoreVert"

export const EmailList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.settings}>
        <div className={styles.settingsLeft}>
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className={styles.settingsRight}></div>
      </div>
    </div>
  )
}
