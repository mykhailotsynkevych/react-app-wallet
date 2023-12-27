import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useToggle } from "../../utils/hooks/useToggle";
//Components
import Search from "../Search/Search";
import Menu from "../Menu/Menu";


//Style
import {
  StyledMainTitle,
  StyledHeaderWrapper,
  StyledMenuBurger,
  StyledIconUser,
  StyledIconFind,
} from "./Header.styled";
//Icons
import userIcon from "../../assets/icons/user.svg";
import findIcon from "../../assets/icons/find.svg";
import closeIcon from "../../assets/icons/close.svg";
import returnArrow from "../../assets/icons/return.svg";
import menuBurger from "../../assets/icons/menu-burger.svg";

const Header = ({title}) => {
  const [isOpenSearchInput, searchInputToggle] = useToggle(false);
  const [isOpenMenu, menuToggle] = useToggle(false);
  const navigate = useNavigate();
  const location = useLocation();



  useEffect(() => {
    const menuModal = document.querySelectorAll('[data-menu-modal]');
    const dataMenuHandle = document.querySelectorAll('[data-menu-handle]');
    const handleOutsideClick = (e) => {
      if (isOpenMenu === true && e.target !== dataMenuHandle[0] && !menuModal[0].contains(e.target)) {
        menuToggle(false)
      }
    };
  
    if (isOpenMenu) {
      document.addEventListener('click', handleOutsideClick);
    }
  
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpenMenu, menuToggle]);

  const handleToggleIcon = () => {
    // location.pathname === "/" ? menuToggle() : navigate(-1);
    menuToggle();
  };

  return (
    <>
      <Search isOpenSearchInput={isOpenSearchInput} />
      <Menu isOpenMenu={isOpenMenu} />
      <StyledHeaderWrapper>
        <StyledMenuBurger
          type="button"
          isOpen={isOpenMenu}
          onClick={() => {
            handleToggleIcon();
          }}
        >
          <img
            data-menu-handle
            // src={location.pathname === "/" ? menuBurger : returnArrow}
            src={menuBurger}
            alt="icon"
          />
        </StyledMenuBurger>
        <Link to={`/`}><StyledMainTitle>{title}</StyledMainTitle></Link>
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
