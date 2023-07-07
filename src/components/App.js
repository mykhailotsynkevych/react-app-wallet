// First  - Bibliothek
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Second - Components
import Header from "./Header/Header";
import Loader from "../components/Loader/Loader";

// Third - Other
import "./App.css";

//lazy
const MainPage = lazy(() => import("../pages/MainPage/MainPage"));
const TransactionsList = lazy(() => import("./TransactionsList/TransactionList"));

const App = () => {

  return (
    <div className="App">
      <div className="pageWrapper">
        <Header/>
        <Suspense fallback={< Loader />}>
        <Routes>
          <Route path="/react-app-wallet/*" element={<MainPage />} />
          <Route path="/transactions/:transactionArt" element={<TransactionsList />}/>
          <Route path="*" element={<MainPage />} />
        </Routes>
      </Suspense>
      </div>
    </div>
  );
};

export default App;
