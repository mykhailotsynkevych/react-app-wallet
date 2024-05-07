import { useSelector } from "react-redux";
import { useForm } from "../../utils/hooks/useForm";
import langOptions from "../../utils/options/langOptions";
import { selectLang } from "../../redux/lang/langSelectors";
import s from "./AuthForm.module.scss";


const AuthForm = ({ login, cbOnSubmit,  }) => {
  const language = useSelector(selectLang);
  const { form, handleChange, handleSubmit } = useForm({
    initialValues: {email: "", password: "" },
    onSubmit: (values) => cbOnSubmit(values),
  });

  const { email, password } = form;
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      {/* {!login && (
        <label className={s.label}>
          <span>Name</span>
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
      )} */}

      <label className={s.label}>
        <span>Email</span>
        <input
          className={s.input}
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        <span>{langOptions.authPassword[language]}</span>
        <input
          className={s.input}
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button className="button" type="submit">
        {login ? "Login" : "Register"}
      </button>
    </form>
  );
};

export default AuthForm;
