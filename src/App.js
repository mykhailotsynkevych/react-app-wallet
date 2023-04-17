// First  - Bibliothek
import { Navigate, Route, Routes } from "react-router-dom";

// Second - Components
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import Categories from "./pages/CategoriesListPage/CategoriesListPage";
import TransactionsList from "./components/TransactionsList/TransactionList";
import CategoriesList from "./components/CategoriesList/CategoriesList";

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
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
