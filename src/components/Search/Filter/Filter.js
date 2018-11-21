import React from 'react'
import { IoIosOptions } from 'react-icons/io'
import {searchFilter} from "./actions";
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  searchFilterActive: state.searchFilterSwitchR.searchFilterActive
})

const mapDispatchToProps = dispatch => ({
  toggleSearchFilter: (searchFilterActive) => dispatch(searchFilter(searchFilterActive))
})

const SearchFilterCon = (props) => {
  console.log(props)
  return (
    <div onClick={() => props.toggleSearchFilter(props.searchFilterActive)}>
      <IoIosOptions/>
    </div>
  )
}

export const SearchFilter = connect(mapStateToProps, mapDispatchToProps)(SearchFilterCon);