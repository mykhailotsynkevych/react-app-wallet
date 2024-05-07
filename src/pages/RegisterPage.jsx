import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm/AuthForm";
import { registerUser } from "../redux/auth/authOperations";
import langOptions from "../utils/options/langOptions";
import { selectLang } from "../redux/lang/langSelectors";
import s from "./Page.module.css";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const language = useSelector(selectLang);

  const handleSubmit = (values) => dispatch(registerUser(values));
  return (
    <>
      <h1>{langOptions.registerTitle[language]}</h1>
      <h4 className={s.subTitle}>{langOptions.registerSubTitle[language]}</h4>
      <AuthForm
        login={false}
        // navTo="/register"
        // linkTitle="To Register"
        cbOnSubmit={handleSubmit}
      />
      <Link to="/login" className={`${s.linkBtn} link`}>
        {langOptions.toLoginText[language]}
      </Link>
    </>
  );
};

export default RegisterPage;
