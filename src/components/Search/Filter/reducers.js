import { combineReducers } from 'redux';
import { SHOW_FILTER, HIDE_FILTER} from "./actions";

const initialStore = {
  searchFilterActive: false
}

function searchFilterSwitch(state = initialStore, action) {
  switch (action.type) {
    case SHOW_FILTER:
      return {
        ...state,
        searchFilterActive: true
      }
    case HIDE_FILTER:
      return {
        ...state,
        searchFilterActive: false
      }
    default:
      return state
  }
}

const searchFilterSwitchR = combineReducers({
  searchFilterSwitch
})

export default searchFilterSwitchR