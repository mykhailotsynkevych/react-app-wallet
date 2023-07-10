import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  StyledMainTitle,
  StyledHeaderWrapper,
  StyledMenuBurger,
  StyledIconUser,
  StyledIconFind,
} from "./Header.styled";
import userIcon from "../../assets/icons/user.svg";
import findIcon from "../../assets/icons/find.svg";
import closeIcon from "../../assets/icons/close.svg";
import { useToggle } from "../../utils/hooks/useToggle";
import Search from "../Search/Search";
import Menu from "../Menu/Menu";
import returnArrow from "../../assets/icons/return.svg";
import menuBurger from "../../assets/icons/menu-burger.svg";

const Header = () => {
  const [isOpenSearchInput, searchInputToggle] = useToggle(false);
  const [isOpenMenu, menuToggle] = useToggle(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggleIcon = () => {
    location.pathname === "/" ? menuToggle() : navigate(-1);
  };

  return (
    <>
      <Search isOpenSearchInput={isOpenSearchInput} />
      <Menu isOpenMenu={isOpenMenu} toggleMenu={menuToggle} />
      <StyledHeaderWrapper>
        <StyledMenuBurger
          type="button"
          isOpen={isOpenMenu}
          onClick={() => {
            handleToggleIcon();
          }}
        >
          <img
            src={location.pathname === "/" ? menuBurger : returnArrow}
            alt="icon"
          />
        </StyledMenuBurger>
        <Link to={`/`}><StyledMainTitle>Wallet</StyledMainTitle></Link>
        <StyledIconFind
          type="button"
          isOpenSearchInput={isOpenSearchInput}
          onClick={searchInputToggle}
        >
          <img src={isOpenSearchInput ? closeIcon : findIcon} alt="icon" />
        </StyledIconFind>
        <StyledIconUser>
          <img src={userIcon} alt="userIcon" />
        </StyledIconUser>
      </StyledHeaderWrapper>
    </>
  );
};

export default Header;
