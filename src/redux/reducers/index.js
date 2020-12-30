import { combineReducers } from "redux"
import mailReducer from "../features/mailSlice"

export default combineReducers({
  mail: mailReducer,
})
