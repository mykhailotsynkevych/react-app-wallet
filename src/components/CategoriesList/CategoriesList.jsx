import s from "./CategoriesList.module.scss";
import CategoriesItem from "../CategoriesItem/CategoriesItem";

//Redux
import { useSelector } from "react-redux";
import { selectCategories } from "../../redux/categories/categoriesSelectors";

const CategoriesList = ({test, handleSelected }) => {
  const categories = useSelector(selectCategories);

    console.log("page", test);

  return (
    <ul className={s.categoriesList}>
      {categories.map((categoryEl) => (
        <li key={categoryEl.id}>
          <CategoriesItem
            categoryEl={categoryEl}
            handleSelected={handleSelected}
          />
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
