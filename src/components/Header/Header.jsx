import { StyledMainTitle, StyledHeaderWrapper, StyledMenuBurger } from "./Header.styled";

const Header = ({title, icon, isMenuOpen, handleActivePage}) => {
  return (
    <StyledHeaderWrapper>
    <StyledMenuBurger type="button" isOpen={isMenuOpen} onClick={() => handleActivePage("MainPage", "Wallet")}><img src={icon} alt='icon'/></StyledMenuBurger>
    <StyledMainTitle>{title}</StyledMainTitle>
    </StyledHeaderWrapper>
  );
};
export default Header;