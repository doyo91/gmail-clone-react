import React from "react"
import styles from "./Sidebar.module.css"
import { SidebarOptions } from "./SidebarOptions"
import { Button, IconButton } from "@material-ui/core"
// Icons
import AddIcon from "@material-ui/icons/Add"
import StarIcon from "@material-ui/icons/Star"
import InboxIcon from "@material-ui/icons/Inbox"
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import LabelImportantIcon from "@material-ui/icons/LabelImportant"
import NearMeIcon from "@material-ui/icons/NearMe"
import NoteIcon from "@material-ui/icons/Note"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import PersonIcon from "@material-ui/icons/Person"
import DuoIcon from "@material-ui/icons/Duo"
import PhoneIcon from "@material-ui/icons/Phone"

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <Button
        className={styles.addButton}
        startIcon={<AddIcon fontSize="large" />}
      >
        Redactar
      </Button>

      <SidebarOptions
        Icon={InboxIcon}
        title="Recibidos"
        number={42}
        selected={true}
      />
      <SidebarOptions Icon={StarIcon} title="Destacados" number={42} />
      <SidebarOptions Icon={AccessTimeIcon} title="Pospuestos" number={42} />
      <SidebarOptions
        Icon={LabelImportantIcon}
        title="Importantes"
        number={42}
      />
      <SidebarOptions Icon={NearMeIcon} title="Enviados" number={42} />
      <SidebarOptions Icon={NoteIcon} title="Borradores" number={42} />
      <SidebarOptions Icon={ExpandMoreIcon} title="Más" number={42} />
      <div className={styles.footer}>
        <div className={styles.footerIcons}>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}
