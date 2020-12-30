const initialState = {}

export const main = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        mail: payload,
      }
    default:
      return state
  }
}
