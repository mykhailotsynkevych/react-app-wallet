import { useState } from "react";
import { useParams } from "react-router-dom";
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

// title={headerTitle}
// icon={headerTitle === "Wallet" ? menuBurger : returnArrow}
// isOpen={isOpen}
// handleTitle={headerTitle === "Wallet" ? toggle : handleTitle}


const Header = () => {
  const [title, setTitle] = useState("Wallet");
  const [isOpenSearchInput, searchInputToggle] = useToggle(false);
  const [isOpenMenu, menuToggle] = useToggle(false);
  const params = useParams();
  console.log(params)

  return (
    <>
    <Search isOpenSearchInput={isOpenSearchInput} />
    <Menu isOpenMenu={isOpenMenu} />
    <StyledHeaderWrapper>
      <StyledMenuBurger
        type="button"
        isOpen={isOpenMenu}
        onClick={menuToggle}
      >
        <img src={title === "Wallet" ? menuBurger : returnArrow} alt="icon" />
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
