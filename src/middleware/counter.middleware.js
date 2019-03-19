// SERVICE COSUME: FETCH, POST, PUT API CALLS HERE
// AFTER API CALL, DISPATCH THE ACTION, TO .actions.js

export const decrementAsync = () => {
    return dispatch => {
      dispatch({
        type: DECREMENT_REQUESTED
      })
  
      return setTimeout(() => {
        dispatch({
          type: DECREMENT
        })
      }, 3000)
    }
  }


  export const incrementAsync = () => {
    return dispatch => {
      dispatch({
        type: INCREMENT_REQUESTED
      })
  
      return setTimeout(() => {
        dispatch({
          type: INCREMENT
        })
      }, 3000)
    }
  }