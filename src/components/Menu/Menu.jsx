import {
  StyledMenuModal,
  StyledMenuBackdrop,
  StyledMenuLabel,
  StyledMenuSwitchInput,
  StyledMenuSwitchSlider,
} from "./Menu.styled";
// import s from "./Menu.module.css";
import LangSelect from "../LangSelect/LangSelect";

const Menu = ({ isOpenMenu }) => {
  return (
    <StyledMenuBackdrop isOpenMenu={isOpenMenu}>
      <StyledMenuModal data-menu-modal isOpenMenu={isOpenMenu}>
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
      </StyledMenuModal>
    </StyledMenuBackdrop>
  );
};
export default Menu;
