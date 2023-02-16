import {
  StyledMenuWrapper
} from "./Menu.styled";


const Menu = ({isMenuOpen}) => {
  return (
    <StyledMenuWrapper isOpen={isMenuOpen}>
      <h2>Menu</h2>
    </StyledMenuWrapper>
  );
};
export default Menu;

