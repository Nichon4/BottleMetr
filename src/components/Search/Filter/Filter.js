import React from 'react'
import { IoIosOptions } from 'react-icons/io'
import {searchFilter} from "./actions";
import { connect } from 'react-redux'
import { FilterBox } from "./Layout";
import bottles from "../../../data/bottles.json"

const mapStateToProps = state => ({
  searchFilterShow: state.searchFilterSwitch.searchFilterShow
})

const mapDispatchToProps = dispatch => ({
  toggleSearchFilter: (searchFilterShow) => dispatch(searchFilter(searchFilterShow))
});

const SearchFilterButtonCon = ({searchFilterShow, toggleSearchFilter}) => {
  console.log('button sfs component ',searchFilterShow)
  return (
    <div onClick={() => toggleSearchFilter(searchFilterShow)}>
      <IoIosOptions/>
    </div>
  )
}


const FilterOptions = ({type, props}) => {

  const filterTypesData = ( bottles ) => {

    const out = bottles.reduce((acc, {brand, type, vol}) => (
      {
        brand: acc.brand.add(brand),
        type: acc.type.add(type),
        vol: acc.vol.add(vol)
      }
    ), {brand: new Set(), type: new Set(), vol: new Set()});
    return ({ brand: Array.from(out.brand), type: Array.from(out.type), vol: Array.from(out.vol)});
  }

  console.log(filterTypesData(bottles)[type], type);
  return (
    filterTypesData(bottles)[type].map((typeValue) => <option key={typeValue} value={typeValue}>{typeValue}</option> )
  )
}

class Filter extends React.Component {

  render() {
    return (
      <select onChange={this.props.onChange}>
        <option key="none" value="none">none</option>
        <FilterOptions type={this.props.type}/>
      </select>
    )
  }
}

const FilterClear = () => {
  return (
    <button>FilterClear</button>
  )
}

class SearchFilterCon extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      filterActive: false,
      filterType: "",
      filterBrand: "",
      filterVol: ""
    };

  }

  handleFilterChange(event) {
    console.log(event.target.value);
  }

  render() {
  console.log(this.props.searchFilterShow)
    return (
      <FilterBox searchFilterShow={this.props.searchFilterShow}>
        <table>
          <tbody>
          <tr>
            <td>
              <Filter onChange={this.handleFilterChange} type="type"/>
            </td>
            <td>
              <Filter type="vol"/>
            </td>
          </tr>
          <tr>
            <td>
              <Filter type="brand"/>
            </td>
            <td>
              <FilterClear/>
            </td>
          </tr>
          </tbody>
        </table>
      </FilterBox>
    )
  }
}

export const SearchFilterButton = connect(mapStateToProps, mapDispatchToProps)(SearchFilterButtonCon);
export const SearchFilter = connect(mapStateToProps, null)(SearchFilterCon);