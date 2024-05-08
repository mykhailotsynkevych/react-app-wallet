import { useSelector } from "react-redux";
import { useForm } from "../../utils/hooks/useForm";
import langOptions from "../../utils/options/langOptions";
import { selectLang } from "../../redux/lang/langSelectors";
import s from "./AuthForm.module.scss";


const AuthForm = ({ login, cbOnSubmit,  }) => {
  const language = useSelector(selectLang);
  const { form, handleChange, handleSubmit } = useForm({
    initialValues: {email: "", password: "" },
    onSubmit: (values) => cbOnSubmit(values.trim()),
  });

  const { email, password } = form;
  return (
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
        <input
          className={s.input}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
      </label>
      <button className="button" type="submit">
        {login ? langOptions.loginBtn[language] : langOptions.registerTitle[language]}
      </button>
    </form>
  );
};

export default AuthForm;
