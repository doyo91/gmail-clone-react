import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Main } from "./views"

export const App = () => {
  return (
    <Router>
      <div className="app">
        <Main />
      </div>
    </Router>
  )
}
