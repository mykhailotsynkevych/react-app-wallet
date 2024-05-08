import { useSelector } from "react-redux";
import { selectBalance } from "../../redux/balance/balanceSelectors";
import s from "./TotalBalance.module.css";

const TotalBalance = () => {
    const balance = useSelector(selectBalance);
    // console.log(balance);
    return (
<div className={s.totalBalanceWrapper}>
    <p className={s.totalBalanceGreeting}>Hi userName,<br /> your balance is:</p>
    <h2 className={s.totalBalanceSumm}>{balance}</h2>
</div>
    );
  };
  export default TotalBalance;