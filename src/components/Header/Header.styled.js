import styled from "styled-components";

const StyledHeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: var(--main-color);
  box-shadow: 0px 2px 2px rgb(0 0 0 / 10%);
`;

const StyledMainTitle = styled.button`
font-size: 24px;
line-height: 1.25;
text-align: center;
background-color: transparent;
color: var(--black-color);
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

const StyledBtnLogOut = styled.button`
background-color: inherit;
width: 22px;
padding: 0px;

:hover {
  cursor: pointer;
}
`;




export { StyledMainTitle, StyledHeaderWrapper, StyledMenuBurger, StyledBtnLogOut };
