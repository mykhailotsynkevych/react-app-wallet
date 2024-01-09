// First  - Bibliothek
import { useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Second - Components
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

//Funktions
//auth
import { getCurUser } from "../redux/auth/authOperations";
import { selectCurUser } from "../redux/auth/authSelector";

//lazy
const MainPage = lazy(() => import("../pages/MainPage"));
const CategoriesListPage = lazy(() => import("../pages/CategoriesListPage"));
const EditPage = lazy(() => import("../pages/EditPage"));
const TransactionsList = lazy(() =>
  import("./TransactionsList/TransactionList")
);
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));

//other - styles, ...

const App = () => {
  const dispatch = useDispatch();
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
            <Routes>
              {/* Private */}
              <Route path="/*" element={<PrivateRoute component={MainPage} />} />
              <Route path="/transactions/:transactionArt" element={<PrivateRoute component={TransactionsList} />} />
              <Route path="/categories/:categoriesArt" element={<PrivateRoute component={CategoriesListPage} />} />
              <Route path="/edit/:transactionId" element={<PrivateRoute component={EditPage} />} />
              {/* Public */}
              <Route path="/login" element={<PublicRoute component={LoginPage} restricted/>} />
              <Route path="/register" element={<PublicRoute component={RegisterPage} restricted/>} />
              <Route path="*" element={<h1>Ooops, something wrong</h1>} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default App;
