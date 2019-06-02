import { combineReducers } from 'redux'
import sandwichSwitch from '../components/SandwichMenu/reducers'
import {filterReducer} from '../components/Search/Filter/reducers'

export default combineReducers({
  sandwichSwitchR: sandwichSwitch,
  searchFilterSwitch: filterReducer
})

