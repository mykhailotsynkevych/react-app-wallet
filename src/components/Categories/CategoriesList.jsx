import s from "./CategoriesList.module.css";

const CategoriesList = () => {
  return (
    <div>
      <ul>
        <li className={s.categoriesItem}>
          <p>Food</p>
          <button type="button" className={s.buttonMore}>...</button>
        </li>
        <li className={s.categoriesItem}>
          <p>Other</p>
          <button type="button" className={s.buttonMore}>...</button>
        </li>
      </ul>
      <form name="add_category" autoComplete="off" noValidate className={s.categoriesItem}>
        <label>
          <input type="text" name="category" placeholder="New category..." />
        </label>

        <button type="submit">+</button>
      </form>
    </div>
  );
};
export default CategoriesList;
