import { useDispatch, useSelector } from "react-redux";
import { selectLang } from "../../redux/lang/langSelectors";
import { changeLang } from "../../redux/lang/langSlice";
import s from "./LangSelect.module.scss";

const LangSelect = () => {
  const language = useSelector(selectLang);
  const dispatch = useDispatch();

  const handleChangeLang = (e) => dispatch(changeLang(e.target.value));

  return (
    <div className={s.langWrapper}>
      <input
        id="RadioLangDe"
        className={s.input}
        type="radio"
        value="de"
        checked={language === "de"}
        onChange={handleChangeLang}
        onClick={(e) => dispatch(changeLang(e.target.value))}
      />
      <label className={`${s.radioLabel} ${s.radio}`} htmlFor="RadioLangDe">
        DE
      </label>
      <input
        id="RadioLangEn"
        className={s.input}
        type="radio"
        value="en"
        checked={language === "en"}
        onChange={handleChangeLang}
        onClick={(e) => dispatch(changeLang(e.target.value))}
      />
      <label className={`${s.radioLabel} ${s.radio}`} htmlFor="RadioLangEn">
        EN
      </label>
    </div>
  );
};
export default LangSelect;
