import React from 'react'
import { IoIosOptions } from 'react-icons/io'
import { connect } from 'react-redux'
import { FilterBox } from "./Layout";
import bottles from "../../../data/bottles.json"
import {toggleFilter, setFilterTypes, clearFilters} from "./reducers";

const mapStateToProps = state => ({
  searchFilterShow: state.searchFilterSwitch.searchFilterShow,
  filterTypes: state.searchFilterSwitch.filterTypes
});

const mapDispatchToProps = dispatch => ({
  toggleSearchFilter: (searchFilterShow) => dispatch(toggleFilter(searchFilterShow)),
  setFilterTypes: (payload) => dispatch(setFilterTypes(payload)),
  clearFilters: () => dispatch(clearFilters())
});

const SearchFilterButtonCon = ({searchFilterShow, toggleSearchFilter}) => {
  console.log('button sfs component ',searchFilterShow);
  return (
    <div onClick={() => toggleSearchFilter(searchFilterShow)}>
      <IoIosOptions/>
    </div>
  )
};


const FilterOptions = ({type, ...props}) => {

  const filterTypesData = ( bottles ) => {

    const out = bottles.reduce((acc, {brand, type, vol}) => (
      {
        brand: acc.brand.add(brand),
        type: acc.type.add(type),
        vol: acc.vol.add(vol)
      }
    ), {brand: new Set(), type: new Set(), vol: new Set()});
    return ({
      brand: Array.from(out.brand),
      type: Array.from(out.type),
      vol: Array.from(out.vol)
    });
  };

  console.log(filterTypesData(bottles)[type], type);
  return (
    filterTypesData(bottles)[type]
      .reduce((acc, cur) => (
          [ ...acc,
            props.value === cur.toString() ?
              <option key={cur} value={cur} selected>{ cur }</option> :
              <option key={cur} value={cur} >{ cur }</option>
          ]
        ),
        [<option key="none" value="">none</option>]
      )
  )
};

class Filter extends React.Component {

  render() {
    return (
      <select onChange={this.props.onChange}>
        <FilterOptions type={this.props.type} value={this.props.value}/>
      </select>
    )
  }
}

const FilterClear = ({clear}) => {
  return (
    <button onClick={clear}>FilterClear</button>
  )
}

class SearchFilterCon extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      filterActive: false,
      filterTypes: {
        type: "",
        vol: "",
        brand: ""
      }
    };

  }

  handleFilterChange(event, type) {
    const payload = {
      type: type,
      value: event.target.value
    };
    this.props.setFilterTypes(payload);
    let newState = {
      ...this.state,
      filterTypes: {
        ...this.state.filterTypes,
        [type]: event.target.value
      }
    };
    this.setState(newState);
  }

  render() {
    console.log(this.state);
    return (
      <FilterBox searchFilterShow={this.props.searchFilterShow}>
        <table>
          <tbody>
          <tr>
            <td>
              <Filter onChange={(e) => this.handleFilterChange(e, "type")}
                      value={this.props.filterTypes.type}
                      type="type"
              />
            </td>
            <td>
              <Filter onChange={(e) => this.handleFilterChange(e, "vol")}
                      value={this.props.filterTypes.vol}
                      type="vol"/>
            </td>
          </tr>
          <tr>
            <td>
              <Filter onChange={(e) => this.handleFilterChange(e, "brand")}
                      value={this.props.filterTypes.brand}
                      type="brand"/>
            </td>
            <td>
              <FilterClear clear={this.props.clearFilters}/>
            </td>
          </tr>
          </tbody>
        </table>
      </FilterBox>
    )
  }
}

export const SearchFilterButton = connect(mapStateToProps, mapDispatchToProps)(SearchFilterButtonCon);
export const SearchFilter = connect(mapStateToProps, mapDispatchToProps)(SearchFilterCon);