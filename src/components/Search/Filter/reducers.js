//import { combineReducers } from 'redux';
import { SHOW_FILTER, HIDE_FILTER} from "./actions";

const initialStore = {
  searchFilterShow: false
}

export default function searchFilterSwitch(state = initialStore, action) {
  switch (action.type) {
    case SHOW_FILTER:
      return {
        ...state,
        searchFilterShow: true
      }
    case HIDE_FILTER:
      return {
        ...state,
        searchFilterShow: false
      }
    default:
      return state
  }
}


