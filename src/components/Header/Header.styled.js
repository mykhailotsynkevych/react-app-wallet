import styled from "styled-components";

const StyledHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 5px 8px;
  background-color: rgb(225, 132, 52);
  box-shadow: 0px 2px 2px rgb(0 0 0 / 10%);
`;

const StyledMainTitle = styled.h1`
font-size: 24px;
  text-align: center;
`;


const StyledMenuBurger = styled.button`
background-color: inherit;
width: 26px;
transition: transform 0.5s linear;
padding: 0px;
margin-right: 10px;

:hover {
  cursor: pointer;
}

${({ isOpen }) =>
isOpen &&
"transform: rotate(90deg)"}
`;

export { StyledMainTitle, StyledHeaderWrapper, StyledMenuBurger };
