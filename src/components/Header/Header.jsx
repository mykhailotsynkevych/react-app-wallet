import { Link,
  // useNavigate,
  // useLocation
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useToggle } from "../../utils/hooks/useToggle";
import { logOut } from "../../redux/auth/authSlice";
import { selectIsAuth } from "../../redux/auth/authSelector";
//Components

import Menu from "../Menu/Menu";

//Style
import {
  StyledMainTitle,
  StyledHeaderWrapper,
  StyledMenuBurger,
  StyledBtnLogOut,
} from "./Header.styled";
//Icons
import menuBurger from "../../assets/icons/menu-burger.svg";
import logout from "../../assets/icons/logout.svg";

const Header = ({ title }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  // const [isOpenSearchInput, searchInputToggle] = useToggle(false);
  const [isOpenMenu, menuToggle] = useToggle(false);
  // const navigate = useNavigate();
  // const location = useLocation();

  useEffect(() => {
    const menuModal = document.querySelectorAll("[data-menu-modal]");
    const dataMenuHandle = document.querySelectorAll("[data-menu-handle]");
    const handleOutsideClick = (e) => {
      if (
        isOpenMenu === true &&
        e.target !== dataMenuHandle[0] &&
        !menuModal[0].contains(e.target)
      ) {
        menuToggle(false);
      }
    };

    if (isOpenMenu) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpenMenu, menuToggle]);

  const handleToggleIcon = () => {
    // location.pathname === "/" ? menuToggle() : navigate(-1);
    menuToggle();
  };

  return (
    <>
      <Menu isOpenMenu={isOpenMenu} />
      <StyledHeaderWrapper>
        <div style={{ display: "flex" }}>
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
          <Link to={`/`}>
            <StyledMainTitle>{title}</StyledMainTitle>
          </Link>
        </div>

        {/* <StyledIconUser>
          <img src={userIcon} alt="userIcon" />
        </StyledIconUser> */}
        {isAuth && (
          <StyledBtnLogOut onClick={() => dispatch(logOut())}>
            <img
              // src={location.pathname === "/" ? menuBurger : returnArrow}
              src={logout}
              alt="icon"
            />
          </StyledBtnLogOut>
        )}
      </StyledHeaderWrapper>
    </>
  );
};

export default Header;
