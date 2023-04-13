import { Outlet } from "react-router-dom";
import moment from "moment";
import Header from "../../components/Header/Header";
import s from "./TransactionHistoryPage.module.css";
import moreIcon from "../../assets/icons/more.svg";

const TransactionHistoryPage = (props) => {
  console.log(props)
    return (
      <>
      <Header
      // icon={headerTitle === "Wallet" ? menuBurger : returnArrow}
      // isOpen={isOpen}
      // handleTitle={headerTitle === "Wallet" ? toggle : handleTitle}
    />
      <main>
      <Outlet />
      </main>
      </>
    );
  }

export default TransactionHistoryPage;
