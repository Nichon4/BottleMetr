import { combineReducers } from 'redux'
import sandwichSwitchR from '../components/SandwichMenu/reducers'
import searchFilterSwitchR from '../components/Search/Filter/reducers'

export default combineReducers({
  sandwichSwitchR,
  searchFilterSwitchR
})

