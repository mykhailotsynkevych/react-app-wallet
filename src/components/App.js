// First  - Bibliothek
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

// Second - Components
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";

import { selectIsAuth } from "../redux/auth/authSelector";

//lazy
const MainPage = lazy(() => import("../pages/MainPage"));
const EditPage = lazy(() => import("../pages/EditPage"));
const TransactionsList = lazy(() =>
  import("./TransactionsList/TransactionList")
);
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));

const App = () => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <div className="page">
      <div className="wallet">
        {/* <Header title={params["*"] === "" ? "Wallet" : "Category"} /> */}
        <Header title={"Wallet"} />
        <main className="mainWrapper">
          <Suspense fallback={<Loader />}>
            {isAuth ? (
              <Routes>
                {/* <Route path="/*" element={<MainPage />} /> */}
                <Route path="/*" element={<MainPage />} />
                <Route
                  path="/transactions/:transactionArt"
                  element={<TransactionsList />}
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
