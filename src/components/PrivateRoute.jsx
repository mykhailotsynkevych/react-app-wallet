import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../redux/auth/authSelector";

const PrivateRoute = ({ component: Component, ...props }) => {
  const isAuth = useSelector(selectIsAuth );

  return isAuth ? <Component {...props} /> : <Navigate to="/login" />;
};

export default PrivateRoute;