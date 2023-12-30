// import { Link } from "react-router-dom";
import { useForm } from "../../utils/hooks/useForm";
import s from "./AuthForm.module.scss";

const AuthForm = ({ cbOnSubmit, btnTitle}) => {
  const { form, handleChange, handleSubmit } = useForm({
    initialValues: {email: "", password: "" },
    onSubmit: (values) => cbOnSubmit(values),
  });

  const { email, password } = form;
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      {/* <label className={s.label}>
        <span> Name </span>
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label> */}
      <label className={s.label}>
        <span> Email </span>
        <input
          className={s.input}
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        <span> Password </span>
        <input
          className={s.input}
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button className="button" type="submit">
        {btnTitle}
      </button>

      {/* <Link
        className={s.submit}
          to={navTo}
      >
        {linkTitle}
        return
      </Link> */}
    </form>
  );
};

export default AuthForm;
