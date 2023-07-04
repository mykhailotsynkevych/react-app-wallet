import s from "./CategoriesList.module.scss";
import CategoriesItem from "../CategoriesItem/CategoriesItem";

//Redux
import { useSelector } from "react-redux";
import { getCategories } from "../../redux/categories/categoriesSelectors";
import { getFilter } from "../../redux/filter/filterSelectors";

const CategoriesList = (props) => {
  const categories = useSelector(getCategories);
  const filter = useSelector(getFilter);

  const getFilteredCategories = (categories, filter) => {
    return categories.filter(({ transaction }) => transaction.includes(filter));
  };

  const filteredCategories = getFilteredCategories(categories, filter);

  return (
    <ul className={s.categoriesList}>
      {filteredCategories.map((categoryEl) => (
        <li key={categoryEl.id}>
          <CategoriesItem categoryEl={categoryEl} props={props} />
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
