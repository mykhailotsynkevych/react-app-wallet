// First  - Bibliothek
import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useToggle } from "./utils/hooks/useToggle";
import returnArrow from "./assets//icons/return.svg";
import menuBurger from "./assets/icons/menu-burger.svg";
import Menu from "./components/Menu/Menu";

// Second - Components
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import Transactions from "./pages/TransactionHistoryPage/TransactionHistoryPage";
import Categories from "./pages/CategoriesListPage/CategoriesListPage";

import TransactionsList from "./components/TransactionsList/TransactionList";
import CategoriesList from "./components/CategoriesList/CategoriesList";

// Third - Other
import "./App.css";

const App = () => {
  const [headerTitle, setHeaderTitle] = useState("Wallet");
  const { isOpen, toggle } = useToggle(false);

  const handleTitle = (headerTitle = "Wallet") => {
    setHeaderTitle(headerTitle);
  };

  return (
    <div className="App">
      <div className="pageWrapper">
        <Header
          title={headerTitle}
          icon={headerTitle === "Wallet" ? menuBurger : returnArrow}
          isOpen={isOpen}
          handleTitle={headerTitle === "Wallet" ? toggle : handleTitle}
        />
        <Menu isOpen={isOpen} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/transactions" element={<Transactions />}>
            <Route path=":transactionArt" element={<TransactionsList />} />
          </Route>
          <Route path="/categories" element={<Categories />}>
            <Route path=":categoriesArt" element={<CategoriesList />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
