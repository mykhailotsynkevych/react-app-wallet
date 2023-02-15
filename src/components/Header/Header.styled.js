import styled from "styled-components";

const StyledMainTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

const StyledHeaderWrapper = styled.section`
  display: flex;
  align-items: center;
  background-color: rgb(225, 132, 52);
  box-shadow: 0px 2px 2px rgb(0 0 0 / 10%);
`;

const StyledMenuBurger = styled.section`
background-color: inherit;
width: 25px;
margin: 12px;
transition: transform 0.5s linear;

:hover {
  cursor: pointer;
}

${({ isOpen }) =>
isOpen &&
"transform: rotate(90deg)"}
`;

export { StyledMainTitle, StyledHeaderWrapper, StyledMenuBurger };
