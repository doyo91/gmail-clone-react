import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Emails, Header, Mail, Sidebar } from "../../components"

import styles from "./Main.module.css"
export const Main = () => {
  return (
    <Router>
      <Header />
      <main className={styles.container}>
        <Sidebar />
        <Switch>
          <Route path="/mail">
            <Mail />
          </Route>
          <Route path="/">
            <Emails />
          </Route>
        </Switch>
      </main>
    </Router>
  )
}
