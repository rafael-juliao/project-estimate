export const increment = () => {
    return dispatch => {
      dispatch({
        type: INCREMENT_REQUESTED
      })
  
      dispatch({
        type: INCREMENT
      })
    }
  }
  
  
  
  export const decrement = () => {
    return dispatch => {
      dispatch({
        type: DECREMENT_REQUESTED
      })
  
      dispatch({
        type: DECREMENT
      })
    }
  }
  