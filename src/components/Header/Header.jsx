import { StyledMainTitle, StyledHeaderWrapper, StyledMenuBurger } from "./Header.styled";
// import menuBurger from "../../icons/menu-burger.svg";

const Header = ({title, icon}) => {
  return (
    <StyledHeaderWrapper>
    <StyledMenuBurger type="button"><img src={icon} alt='icon'/></StyledMenuBurger>
    <StyledMainTitle>{title}</StyledMainTitle>
    </StyledHeaderWrapper>
  );
};
export default Header;