import { StyledMainTitle, StyledHeaderWrapper, StyledMenuBurger } from "./Header.styled";

const Header = ({title, icon, onClick}) => {
  return (
    <StyledHeaderWrapper>
    <StyledMenuBurger type="button" onClick={onClick}><img src={icon} alt='icon'/></StyledMenuBurger>
    <StyledMainTitle>{title}</StyledMainTitle>
    </StyledHeaderWrapper>
  );
};
export default Header;