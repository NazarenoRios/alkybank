const initialState = {
  wallet: {}
}

export default function walletReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_WALLET":
      return (state = action.payload)
    default:
      return state
  }
}
