import {
  StyledMenuWrapper
} from "./Menu.styled";


const Menu = ({isOpen}) => {
  return (
    <StyledMenuWrapper isOpen={isOpen}>
      <h2>Menu</h2>
    </StyledMenuWrapper>
  );
};
export default Menu;

