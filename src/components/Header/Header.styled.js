import styled from "styled-components";

const StyledHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: var(--main-color);
  box-shadow: 0px 2px 2px rgb(0 0 0 / 10%);
`;

const StyledMainTitle = styled.button`
font-size: 24px;
text-align: center;
background-color: transparent;
font-weight: bold;

:hover {
  cursor: pointer;
}
`;


const StyledMenuBurger = styled.button`
background-color: inherit;
width: 26px;
transition: transform 0.3s linear;
padding: 0px;
margin-right: 10px;

:hover {
  cursor: pointer;
}

${({ isOpen }) =>
isOpen &&
"transform: rotate(90deg)"}
`;

const StyledIconFind = styled.button`
background-color: inherit;
width: 26px;
padding: 0px;
margin-left: auto;
margin-right: 10px;
transition: transform 0.2s linear;

:hover {
cursor: pointer;
}

${({ isOpenSearchInput }) =>
isOpenSearchInput &&
"transform: rotate(90deg); width: 30px"}`;

const StyledIconUser = styled.button`
background-color: inherit;
width: 30px;
transition: transform 0.5s linear;
padding: 0px;

:hover {
  cursor: pointer;
  }`;


export { StyledMainTitle, StyledHeaderWrapper, StyledMenuBurger, StyledIconUser, StyledIconFind };
