import styled from "styled-components";

const StyledMenuWrapper = styled.div`
top: 47.5px;
  width: 40%;
  height: 500px;
  top: 50px;
  background-color: white;
  position: absolute;

  z-index: 1;
  transition: transform 0.5s linear;
  transform: translateX(-100%);

  ${({ isOpenMenu }) =>
  isOpenMenu &&
    "transform: translateX(0); box-shadow: 3px 0px 3px 0px rgb(0 0 0 / 40%)"}
`;

export { StyledMenuWrapper };
