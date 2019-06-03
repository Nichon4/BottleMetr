import styled from 'styled-components'

export const FilterBox = styled.div`
  display: ${ props => props.searchFilterShow ? 'block' : 'none' }
`;