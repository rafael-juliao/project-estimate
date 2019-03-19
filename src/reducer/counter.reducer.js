const initialState = {
    count: 0,
    isIncrementing: false,
    isDecrementing: false
  }

export default (state = initialState, action) => {
    switch (action.type) {

      case INCREMENT_REQUESTED:
        return {
          ...state,
          isIncrementing: true
        }
  
      case INCREMENT:
        return {
          ...state,
          count: state.count + 1,
          isIncrementing: false
        }
  
      case DECREMENT_REQUESTED:
        return {
          ...state,
          isDecrementing: true
        }
  
      case DECREMENT:
        return {
          ...state,
          count: state.count - 1,
          isDecrementing: false
        }
  
      default:
        return state
    }
  }