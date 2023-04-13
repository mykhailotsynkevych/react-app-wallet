import { Outlet, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";

const TransactionHistoryPage = (props) => {
  console.log(props)
  const params = useParams();
  console.log(params)
    return (
      <>
      <main>
      <Outlet />
      </main>
      </>
    );
  }

export default TransactionHistoryPage;
