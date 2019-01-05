import styled from "styled-components"


export const SandwichBox = styled.div`
    top: 0px;
    position: absolute;
    zIndex: 5;
    visibility: ${props => props.isShown ? 'visible' : 'hidden'};
`;

export const SandwichSwitcher = styled.div`
  position: absolute;
  display: inline;
  z-index: 0;  
  visibility: ${props => (props.location !== "/" ) ? 'visible' : 'hidden'};
`;