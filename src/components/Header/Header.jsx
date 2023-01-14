import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.headerWraper}>
    <button type="button" className={s.arrow}>&#10140;</button>
    <h1>Header</h1>
    </header>
  );
};
export default Header;