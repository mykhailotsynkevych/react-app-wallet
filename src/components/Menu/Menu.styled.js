import styled from "styled-components";

const StyledMenuBackdrop = styled.div`
  top: 50px;
  height: calc(100% - 50px);
  background-color: #00000078;
  transform: translateX(-100%);
  position: absolute;
  z-index: 1;

  ${({ isOpenMenu }) => isOpenMenu && "width: 100%; transform: translateX(0)"}
`;

const StyledMenuModal = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
  padding: 10px;
  background-color: white;
  z-index: 2;
  transition: transform 0.3s linear;
  transform: translateX(-100%);

  ${({ isOpenMenu }) => isOpenMenu && "transform: translateX(0); width: 50%;"}
`;

const StyledMenuLabel = styled.label`

  position: relative;
  display: inline-block;
  width: 45%;
  height: 24px;
  padding: 0px;
`;

const StyledMenuSwitchSlider = styled.span`
  position: absolute;
  border-radius: 3px;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  :before {
    position: absolute;
    content: "";
    border-radius: 3px;
    height: 20px;
    width: 50%;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;

const StyledMenuSwitchInput = styled.input`

  opacity: 0;
  width: 0;
  height: 0;

  :checked + ${StyledMenuSwitchSlider} {
    background-color: var(--main-color);
  }

  :checked + ${StyledMenuSwitchSlider}:before {
    transform: translateX(88%);
  }
`;


export {
  StyledMenuModal,
  StyledMenuBackdrop,
  StyledMenuLabel,
  StyledMenuSwitchInput,
  StyledMenuSwitchSlider
};
