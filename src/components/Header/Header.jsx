import { Outlet } from "react-router-dom";
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


const SharedLayout = (props) => {
  const { isOpen, toggle } = useToggle(false);
  return (
    <>
    <Search isOpen={isOpen} />
    <StyledHeaderWrapper>
      <StyledMenuBurger
        type="button"
        isOpen={props.isOpen}
        onClick={() => {
          props.handleActivePage();
        }}
      >
        <img src={props.icon} alt="icon" />
      </StyledMenuBurger>
      <StyledMainTitle>{props.title}</StyledMainTitle>
      <StyledIconFind
        type="button"
        isOpen={isOpen}
        onClick={toggle}
      >
        <img src={isOpen ? closeIcon : findIcon} alt="icon" />
      </StyledIconFind>
      <StyledIconUser>
        <img src={userIcon} alt="userIcon"/>
      </StyledIconUser>
      <Outlet />
    </StyledHeaderWrapper>
    </>
  );
};

export default SharedLayout;
