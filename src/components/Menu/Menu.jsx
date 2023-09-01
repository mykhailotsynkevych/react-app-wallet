import { useEffect } from "react";
import { StyledMenuModal, StyledMenuBackdrop } from "./Menu.styled";

const Menu = ({ isOpenMenu}) => {

  return (
    <StyledMenuBackdrop
      isOpenMenu={isOpenMenu}
    >
      <StyledMenuModal data-menu-modal isOpenMenu={isOpenMenu}>
        <h2 className="test">Menu</h2>
      </StyledMenuModal>
    </StyledMenuBackdrop>
  );
};
export default Menu;
