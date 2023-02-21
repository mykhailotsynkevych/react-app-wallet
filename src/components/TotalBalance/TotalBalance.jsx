import s from "./TotalBalance.module.css";

const TotalBalance = () => {
    return (
<div className={s.totalBalanceWrapper}>
    <p className={s.totalBalanceGreeting}>Hi userName,<br /> your balance is:</p>
    <h2 className={s.totalBalanceSumm}>12 345, 67</h2>
</div>
    );
  };
  export default TotalBalance;