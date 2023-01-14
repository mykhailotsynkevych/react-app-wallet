// import s from "./CategoriesList.module.css";
import Header from "../Header/Header";

const CategoriesList = () => {
  return (
    <div>
      <Header />
      <ul>
        <li>
          <p>Food</p>
          <button type="submit">...</button>
        </li>
        <li>
          <p>Other</p>
          <button type="submit">...</button>
        </li>
      </ul>
      <form name="add_category" autoComplete="off" noValidate>
        <label>
          <input type="text" name="category" placeholder="New category..." />
        </label>

        <button type="submit">+</button>
      </form>
    </div>
  );
};
export default CategoriesList;
