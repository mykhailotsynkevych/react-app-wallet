import {
  StyledMainTitle,
  StyledHeaderWrapper,
  StyledMenuBurger,
  StyledIconUser,
  StyledIconFind,
} from "./Header.styled";
import userIcon from "../../assets/icons/user.svg";
import findIcon from "../../assets/icons/find.svg";

const Header = ({ title, icon, isOpen, handleActivePage }) => {
  return (
    <StyledHeaderWrapper>
      <StyledMenuBurger
        type="button"
        isOpen={isOpen}
        onClick={() => {handleActivePage()}}
      >
        <img src={icon} alt="icon" />
      </StyledMenuBurger>
      <StyledMainTitle>{title}</StyledMainTitle>
      <StyledIconFind>
        <img src={findIcon} alt="findIcon" />
      </StyledIconFind>
      <StyledIconUser>
        <img src={userIcon} alt="userIcon" />
      </StyledIconUser>
    </StyledHeaderWrapper>
  );
};
export default Header;
