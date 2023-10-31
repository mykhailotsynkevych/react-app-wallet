import s from "./CategoriesList.module.scss";
import CategoriesItem from "../CategoriesItem/CategoriesItem";

//Redux
import { useSelector } from "react-redux";
import { selectCategories } from "../../redux/categories/categoriesSelectors";
import { selectFilter } from "../../redux/filter/filterSelectors";

  const CategoriesList = ({handleSelected}) => {
  const categories = useSelector(selectCategories);
  const filter = useSelector(selectFilter);

  const getFilteredCategories = (categories, filter) => {
    return categories.filter(({ transaction }) => transaction.includes(filter));
  };

  const filteredCategories = getFilteredCategories(categories, filter);

  return (
    <ul className={s.categoriesList}>
      {filteredCategories.map((categoryEl) => (
        <li key={categoryEl.id}>
          <CategoriesItem categoryEl={categoryEl} handleSelected={handleSelected} />
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
