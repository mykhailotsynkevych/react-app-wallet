import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../redux/auth/authSelector";

const PublicRoute = ({ restricted, component: Component, ...props }) => {
  const isAuth = useSelector(selectIsAuth);

  return isAuth && restricted ? (
    <Navigate to="/" />
  ) : (
    <Component {...props} />
  );
};

export default PublicRoute;
