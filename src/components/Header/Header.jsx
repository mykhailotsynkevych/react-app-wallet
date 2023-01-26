import s from "./Header.module.css";
import menuBurger from "../../icons/menu-burger.svg";

const Header = () => {
  return (
    <header className={s.headerWraper}>
    <button type="button" className={s.arrow}><img src={menuBurger}/></button>
    <h1>Header</h1>
    </header>
  );
};
export default Header;