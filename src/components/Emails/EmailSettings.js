import React from "react"
import { Checkbox, IconButton } from "@material-ui/core"
// Icons
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import RedoIcon from "@material-ui/icons/Redo"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide"
import SettingsIcon from "@material-ui/icons/Settings"

import styles from "./Emails.module.css"

export const EmailSettings = () => {
  return (
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
      <div className={styles.settingsRight}>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
        <IconButton>
          <KeyboardHideIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
      </div>
    </div>
  )
}
