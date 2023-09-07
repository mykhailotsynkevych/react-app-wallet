import CategoriesList from "../../components/CategoriesList/CategoriesList";
import CategoriesForm from "../../components/CategoriesForm/CategoriesForm";

import s from "./CategoriesListPage.module.css";

const CategoriesListPage = ({handleSelected}) => {
  return (
    <div className={s.categoriesWrapper}>
      <CategoriesList handleSelected={handleSelected}/>
      <CategoriesForm/>
    </div>
  );
};

export default CategoriesListPage;
