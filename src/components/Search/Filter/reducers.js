
import {createAction, handleActions} from "redux-actions";

const toggleFilter = createAction("TOGGLE_FILTER");

const setFilterTypes = createAction("SET_FILTER_TYPES");

const clearFilters = createAction("CLEAR_FILTERS");

export {toggleFilter, setFilterTypes, clearFilters};


const initialStore = {
  searchFilterShow: false,
  filterTypes: {}
};

export const filterReducer = handleActions(
  {
    TOGGLE_FILTER: (state, action) => {
      return ({
        ...state,
        searchFilterShow: !action.payload
      })
    },
    SET_FILTER_TYPES: (state, action) => {
      const {type, value} = action.payload;
      return ({
        ...state,
        filterTypes: {
          ...state.filterTypes,
          [type]: value
        }
      })
    },
    CLEAR_FILTERS: (state) => ({
      ...state,
      filterTypes: {}
    })
  },
  initialStore
);


