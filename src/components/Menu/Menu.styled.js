import styled from "styled-components";

const StyledMenuWrapper = styled.div`
width: 40%;
height: 89.4%;
background-color: white;
position: absolute;
box-shadow: 3px 0px 3px 0px rgb(0 0 0 / 40%);
z-index: 1;
transition: transform 0.5s linear;
transform: translateX(-100%);

  ${({ isOpen }) => isOpen && "transform: translateX(0)"}
`;

export {
  StyledMenuWrapper
};