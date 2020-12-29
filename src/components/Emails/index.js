import React from "react"
import styles from "./Emails.module.css"
import { EmailSection } from "./EmailSection"
import { EmailSettings } from "./EmailSettings"
import InboxIcon from "@material-ui/icons/Inbox"
import PeopleIcon from "@material-ui/icons/People"
import LocalOfferIcon from "@material-ui/icons/LocalOffer"

export const Emails = () => {
  return (
    <div className={styles.container}>
      <EmailSettings />
      <div className={styles.sections}>
        <EmailSection Icon={InboxIcon} title="Principal" color="red" selected />
        <EmailSection Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <EmailSection Icon={LocalOfferIcon} title="Promociones" color="green" />
      </div>
      <section className={styles.content}></section>
    </div>
  )
}
