// First  - Bibliothek
import { useEffect, lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Second - Components
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";

//auth
import { getCurUser } from "../redux/auth/authOperations";
import { selectIsAuth, selectCurUser } from "../redux/auth/authSelector";

//lazy
const MainPage = lazy(() => import("../pages/MainPage"));
const CategoriesListPage = lazy(() => import("../pages/CategoriesListPage"));
const EditPage = lazy(() => import("../pages/EditPage"));
const TransactionsList = lazy(() =>
  import("./TransactionsList/TransactionList")
);
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const curUser = useSelector(selectCurUser);

  useEffect(() => {
    curUser && dispatch(getCurUser());
  }, [dispatch, curUser]);

  return (
    <div className="page">
      <div className="wallet">
        {/* <Header title={params["*"] === "" ? "Wallet" : "Category"} /> */}
        <Header title={"Wallet"} />
        <main className="mainWrapper">
          <Suspense fallback={<Loader />}>
            {isAuth ? (
              <Routes>
                <Route path="/*" element={<MainPage />} />
                <Route
                  path="/transactions/:transactionArt"
                  element={<TransactionsList />}
                />
                <Route
                  path="/categories/:transactionArt"
                  element={<CategoriesListPage />}
                />
                <Route path="/edit/:transactionId" element={<EditPage />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            ) : (
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </Routes>
            )}
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default App;
