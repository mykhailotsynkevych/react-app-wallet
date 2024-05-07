import {useSelector } from "react-redux";
import findIcon from "../../assets/icons/find.svg";
import s from "./Search.module.scss";
import langOptions from "../../utils/options/langOptions";
import { selectLang } from "../../redux/lang/langSelectors";

const Search = () => {
  const language = useSelector(selectLang);

  return (
    <form
      name="search_form"
      autoComplete="on"
      className={s.searchForm}
      noValidate
    >
      <label className={s.searchLabel}>
        <input
          type="search"
          name="search"
          placeholder={langOptions.search[language]}
          className={s.searchInput}
        />
      </label>

      <button type="submit" className={s.searchBtn}>
        <img src={findIcon} alt="findIcon" />
      </button>
    </form>
  );
};
export default Search;
