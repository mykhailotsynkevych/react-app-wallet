import {
  StyledMenuWrapper
} from "./Menu.styled";


const Menu = ({isOpenMenu}) => {
  return (
    <StyledMenuWrapper isOpenMenu={isOpenMenu}>
      <h2>Menu</h2>
    </StyledMenuWrapper>
  );
};
export default Menu;

