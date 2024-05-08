import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "../../utils/hooks/useForm";
import langOptions from "../../utils/options/langOptions";
import { selectLang } from "../../redux/lang/langSelectors";
import s from "./AuthForm.module.scss";
import eyeShow from "../../assets/icons/eye-password-show.svg";
import eyeHide from "../../assets/icons/eye-password-hide.svg";

const AuthForm = ({ login, cbOnSubmit }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const language = useSelector(selectLang);
  const { form, handleChange, handleSubmit, reset } = useForm({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => cbOnSubmit(values),
  });

  const { email, password } = form;
  return (
    <div className={s.authWrapper}>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          <span>Email</span>
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>
        <label className={s.label}>
          <span>{langOptions.authPassword[language]}</span>
          <div className={s.passwordInputWrapper}>
            {password && (
              <div
                onClick={() => setIsPasswordShown(!isPasswordShown)}
                className={s.togglePasswordVisibility}
              >
                {isPasswordShown ? (
                  <img src={eyeHide} alt="show password" />
                ) : (
                  <img src={eyeShow} alt="hide password" />
                )}
              </div>
            )}
            <input
              className={s.input}
              type={isPasswordShown ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
        </label>
        <button className="button" type="submit">
          {login
            ? langOptions.loginBtn[language]
            : langOptions.registerTitle[language]}
        </button>
      </form>
      <Link
        to={login ? "/register" : "/login"}
        className={`${s.linkBtn} link`}
        onClick={reset}
      >
        {login
          ? langOptions.toRegisterText[language]
          : langOptions.toLoginText[language]}
      </Link>
    </div>
  );
};

export default AuthForm;
