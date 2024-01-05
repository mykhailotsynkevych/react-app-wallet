import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import AuthForm from "../components/AuthForm/AuthForm";
import { loginUser } from "../redux/auth/authOperations";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (userData) => dispatch(loginUser(userData));
  return (
    <>
      <h1>Welcome Back!</h1>
      <h4>Log in to your existing account</h4>
      <AuthForm
        login={true}
        // navTo="/register"
        // linkTitle="To Register"
        cbOnSubmit={handleSubmit}
      />
        <Link to="/register" className="link">Create Account</Link>
    </>
  );
};

export default LoginPage;
