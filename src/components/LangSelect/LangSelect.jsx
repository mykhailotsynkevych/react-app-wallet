import { useDispatch, useSelector } from "react-redux";
import { getLanguage } from "../../redux/lang/langSelectors";
import { changeLang } from "../../redux/lang/langSlice";
import s from "./LangSelect.module.css";

const LangSelect = () => {
  const language = useSelector(getLanguage);
  const dispatch = useDispatch();

  const handleChange = e => dispatch(changeLang(e.target.value))

  
  return (
    <select name="" value={language} className={s.select} onChange={handleChange}>
      <option value="de">DE</option>
      <option value="en">EN</option>
    </select>
  );
};
export default LangSelect;
