// First  - Bibliothek
import { useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Second - Components
import Header from "./Header/Header";
import Loader from "./Loader/Loader";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

// Third - Functions
//auth
import { getCurUser } from "../redux/auth/authOperations";
import { selectCurUser } from "../redux/auth/authSelector";
//lazy
const MainPage = lazy(() => import("../pages/MainPage"));
const CategoriesPage = lazy(() => import("../pages/CategoriesPage"));
const EditPage = lazy(() => import("../pages/EditPage"));
const TransactionsList = lazy(() =>
  import("./TransactionsList/TransactionList")
);
const AuthPage = lazy(() => import("../pages/AuthPage"));

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
              <Route path="/categories/:categoriesArt" element={<PrivateRoute component={CategoriesPage} />} />
              <Route path="/edit/:transactionId" element={<PrivateRoute component={EditPage} />} />
              {/* Public */}
              <Route path="/login" element={<PublicRoute component={AuthPage} restricted/>} />
              <Route path="/register" element={<PublicRoute component={AuthPage} restricted/>} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default App;
