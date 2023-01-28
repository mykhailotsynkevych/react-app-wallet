import { StyledMainTitle, StyledHeaderWrapper, StyledMenuBurger } from "./Header.styled";
import menuBurger from "../../icons/menu-burger.svg";

const Header = () => {
  return (
    <StyledHeaderWrapper>
    <StyledMenuBurger type="button"><img src={menuBurger} alt='icon Burger Menu'/></StyledMenuBurger>
    <StyledMainTitle>Header</StyledMainTitle>
    </StyledHeaderWrapper>
  );
};
export default Header;