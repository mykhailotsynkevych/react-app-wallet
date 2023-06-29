// First  - Bibliothek
import { Navigate, Route, Routes } from "react-router-dom";

// Second - Components
import MainPage from "../pages/MainPage/MainPage";
import Header from "./Header/Header";
import TransactionsList from "./TransactionsList/TransactionList";


// Third - Other
import "./App.css";

const App = () => {

  return (
    <div className="App">
      <div className="pageWrapper">
        <Header/>
        <Routes>
          <Route path="/*" element={<MainPage />} />
          <Route path="/transactions/:transactionArt" element={<TransactionsList />}/>
          <Route path="*" element={<MainPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
