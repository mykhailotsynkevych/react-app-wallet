// First  - Bibliothek
import { Route, Routes } from "react-router-dom";

// Second - Components
import MainPage from "./pages/MainPage/MainPage";
import Transactions from "./pages/TransactionHistoryPage/TransactionHistoryPage";
import Categories from "./pages/CategoriesListPage/CategoriesListPage";

// Third - Other
import "./App.css";


const App = () => {
  return (
    <div className="App">
      <div className="pageWrapper">
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="*" element={<MainPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
