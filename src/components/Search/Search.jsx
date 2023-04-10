import {
  StyledSearchForm,
  StyledSearchLabel,
  StyledSearchInput,
  StyledSearchButton,
} from "./Search.styled";
import findIcon from "../../assets/icons/find.svg";

const Search = ({ isOpen }) => {
  return (
    <StyledSearchForm
      isOpen={isOpen}
      name="search_form"
      autocomplete="on"
      novalidate
    >
      <StyledSearchLabel>
        <StyledSearchInput type="search" name="search" placeholder="Search..."/>
      </StyledSearchLabel>

      <StyledSearchButton type="submit"><img src={findIcon} alt="findIcon" /></StyledSearchButton>
    </StyledSearchForm>
  );
};
export default Search;
