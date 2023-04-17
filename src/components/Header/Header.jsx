import { useState } from "react";
import { useMatch, useNavigate, Link } from "react-router-dom";
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
  const [title, setTitle] = useState("Wallet");
  const [isOpenSearchInput, searchInputToggle] = useToggle(false);
  const [isOpenMenu, menuToggle] = useToggle(false);
  const {params} = useMatch("/*");
  const navigate = useNavigate();
  console.log(params)

  const handleToggleIcon = () => {
    params['*'] === "react-app-wallet" && menuToggle();
    params['*'] !== "" && navigate('react-app-wallet');
  };

  return (
    <>
    <Search isOpenSearchInput={isOpenSearchInput} />
    <Menu isOpenMenu={isOpenMenu} />
    <StyledHeaderWrapper>
      <StyledMenuBurger
        type="button"
        isOpen={isOpenMenu}
        onClick={() => {handleToggleIcon()}}
      >
        <img src={params['*'] === "react-app-wallet" ? menuBurger : returnArrow} alt="icon" />
      </StyledMenuBurger>
      <StyledMainTitle>{title}</StyledMainTitle>
      <StyledIconFind
        type="button"
        isOpenSearchInput={isOpenSearchInput}
        onClick={searchInputToggle}
      >
        <img src={isOpenSearchInput ? closeIcon : findIcon} alt="icon" />
      </StyledIconFind>
      <StyledIconUser>
        <img src={userIcon} alt="userIcon"/>
      </StyledIconUser>
    </StyledHeaderWrapper>
    </>
  );
};

export default Header;
