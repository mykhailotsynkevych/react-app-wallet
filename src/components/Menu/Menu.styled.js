import styled from "styled-components";

const StyledMenuBackdrop = styled.div`
  top: 50px;
  width: 0%;
  height: 100%;
  background-color: #00000078;
  transform: translateX(-100%);
  position: absolute;
  z-index: 1;

  ${({ isOpenMenu }) =>
  isOpenMenu &&
    "width: 100%; transform: translateX(0)"}

`;

const StyledMenuModal = styled.div`
  height: 100%;
  background-color: white;
  position: absolute;
  z-index: 2;
  transition: transform 0.3s linear;
  transform: translateX(-100%);

  ${({ isOpenMenu }) =>
  isOpenMenu &&
    "transform: translateX(0); width: 40%;"}
`;

export { StyledMenuModal, StyledMenuBackdrop  };
