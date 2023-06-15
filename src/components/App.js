// First  - Bibliothek
import { Navigate, Route, Routes } from "react-router-dom";

// Second - Components
import MainPage from "../pages/MainPage/MainPage";
import Categories from "../pages/CategoriesListPage/CategoriesListPage";

import Header from "./Header/Header";
import TransactionsList from "./TransactionsList/TransactionList";
import CategoriesList from "./CategoriesList/CategoriesList";

// Third - Other
import "./App.css";

const App = () => {

  return (
    <div className="App">
      <div className="pageWrapper">
        <Header/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/transactions/:transactionArt" element={<TransactionsList />}/>
          <Route path="/categories" element={<Categories />}>
            <Route path=":categoriesArt" element={<CategoriesList />} />
          </Route>
          <Route path="*" element={<MainPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
