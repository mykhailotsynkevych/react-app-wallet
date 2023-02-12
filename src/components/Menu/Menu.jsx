import {
  StyledMenuWrapper
} from "./Menu.styled";


const Menu = ({isMenuOpen}) => {
  return (
    <StyledMenuWrapper isOpen={isMenuOpen}>
      <h1>Hello</h1>
    </StyledMenuWrapper>
  );
};
export default Menu;

