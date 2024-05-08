import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "../components/AuthForm/AuthForm";
import { loginUser, registerUser } from "../redux/auth/authOperations";
import langOptions from "../utils/options/langOptions";
import { selectLang } from "../redux/lang/langSelectors";
import s from "./Page.module.css";

const AuthPage = () => {
  const { pathname } = useLocation();
  const isLoginPage = pathname === "/login";
  const dispatch = useDispatch();
  const handleSubmit = (userData) =>
    dispatch(isLoginPage ? loginUser(userData) : registerUser(userData));

  const language = useSelector(selectLang);

  return (
    <>
      <h1>
        {isLoginPage
          ? langOptions.loginTitle[language]
          : langOptions.registerTitle[language]}
      </h1>
      <h4 className={s.subTitle}>
        {isLoginPage
          ? langOptions.loginSubTitle[language]
          : langOptions.registerSubTitle[language]}
      </h4>
      <AuthForm login={isLoginPage} cbOnSubmit={handleSubmit} />
    </>
  );
};

export default AuthPage;
