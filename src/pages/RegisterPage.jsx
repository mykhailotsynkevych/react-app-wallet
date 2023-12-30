import { useDispatch } from "react-redux";
import AuthForm from "../components/AuthForm/AuthForm";
import { registerUser } from "../redux/auth/authOperations";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => dispatch(registerUser(values));
  return (
    <>
      <h1>Register</h1>
      <AuthForm
        btnTitle="Register"
        // navTo="/register"
        // linkTitle="To Register"
        cbOnSubmit={handleSubmit}
      />
    </>
  );
};

export default RegisterPage;
