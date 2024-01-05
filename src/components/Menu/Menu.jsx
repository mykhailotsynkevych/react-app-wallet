import Search from "../Search/Search";

import {
  StyledMenuBackdrop,
  StyledMenuModal,
  StyledMenuLabel,
  StyledMenuSwitchInput,
  StyledMenuSwitchSlider,
  SelectsWrapper,
  // StyledIconUser,
  StyledIconFind,
} from "./Menu.styled";
// import s from "./Menu.module.css";
import LangSelect from "../LangSelect/LangSelect";
// import userIcon from "../../assets/icons/user.svg";
import findIcon from "../../assets/icons/find.svg";
import closeIcon from "../../assets/icons/close.svg";
// import returnArrow from "../../assets/icons/return.svg";

const Menu = ({ isOpenMenu }) => {
  return (
    <StyledMenuBackdrop isOpenMenu={isOpenMenu}>
      <StyledMenuModal data-menu-modal isOpenMenu={isOpenMenu}>
      <Search />
      {/* <StyledIconFind
          type="button"
          // isOpenSearchInput={isOpenSearchInput}
          // onClick={searchInputToggle}
        >
          <img src={findIcon} alt="icon" />
        </StyledIconFind> */}
        <SelectsWrapper>

      <LangSelect />
        {/* <div className={s.switch}>
          <input
            id="language-toggle"
            className={`${s.checkToggle} ${s.checkToggleRoundFlat}`}
            type="checkbox"
          />
          <label htmlFor="language-toggle" className={s.languageLabel}></label>
          <span className={s.on}>DE</span>
          <span className={s.off}>EN</span>
        </div> */}

        <StyledMenuLabel>
          <StyledMenuSwitchInput type="checkbox" />
          <StyledMenuSwitchSlider></StyledMenuSwitchSlider>
        </StyledMenuLabel>
        </SelectsWrapper>
      </StyledMenuModal>
    </StyledMenuBackdrop>
  );
};
export default Menu;
