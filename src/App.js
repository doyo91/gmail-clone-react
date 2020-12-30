import { useSelector } from "react-redux"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { selectSendMessageIsOpen } from "./redux/features/mailSlice"
import { Main } from "./views"

export const App = () => {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)

  return (
    <Router>
      <div className="app">
        <Main />
      </div>

      {sendMessageIsOpen && <p>Message</p>}
    </Router>
  )
}
