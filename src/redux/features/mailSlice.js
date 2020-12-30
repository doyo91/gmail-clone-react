import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  sendMessageIsOpen: false,
}

const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    opensSendMessage: (state) => {
      state.sendMessageIsOpen = true
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false
    },
  },
})

export const { opensSendMessage, closeSendMessage } = mailSlice.actions

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen

export default mailSlice.reducer
