//import { combineReducers } from 'redux';
import { SHOW_MENU, HIDE_MENU} from "./actions";

const initialStore = {
  sandwichVisible: false
}

export default function sandwichSwitch(state = initialStore, action) {
  switch (action.type) {
    case SHOW_MENU:
      return {
        ...state,
        sandwichVisible: true
      }
    case HIDE_MENU:
      return {
        ...state,
          sandwichVisible: false
        }
    default:
      return state
  }
}
