import { StyledMenuModal, StyledMenuBackdrop } from "./Menu.styled";

const Menu = ({ isOpenMenu, toggleMenu }) => {
  const closeMenuPerBackdropClick = (e) => {
    if (isOpenMenu) {
      if(e.target === e.currentTarget) {
        toggleMenu();
      }
    }
  };
  return (
    <StyledMenuBackdrop
      isOpenMenu={isOpenMenu}
      onClick={(e) => {
        closeMenuPerBackdropClick(e);
      }}
    >
      <StyledMenuModal isOpenMenu={isOpenMenu}>
        <h2 className="test">Menu</h2>
      </StyledMenuModal>
    </StyledMenuBackdrop>
  );
};
export default Menu;
