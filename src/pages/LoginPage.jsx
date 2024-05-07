import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "../components/AuthForm/AuthForm";
import { loginUser } from "../redux/auth/authOperations";
import langOptions from "../utils/options/langOptions";
import { selectLang } from "../redux/lang/langSelectors";

import s from "./Page.module.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (userData) => dispatch(loginUser(userData));
  const language = useSelector(selectLang);

  return (
    <>
      <div>
        <h1>{langOptions.loginTitle[language]}</h1>
        <h4 className={s.subTitle}>{langOptions.loginSubTitle[language]}</h4>
      </div>
      <AuthForm
        login={true}
        // navTo="/register"
        // linkTitle="To Register"
        cbOnSubmit={handleSubmit}
      />
      <Link to="/register" className={`${s.linkBtn} link`}>
        {langOptions.toRegisterText[language]}
      </Link>
    </>
  );
};

export default LoginPage;
