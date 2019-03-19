import { combineReducers } from 'redux'
import counter from '../reducer/counter.reducer'

export default combineReducers({
  counter: counter,
})
