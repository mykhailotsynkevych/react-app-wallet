import CategoriesList from "../../components/CategoriesList/CategoriesList";
import CategoriesForm from "../../components/CategoriesForm/CategoriesForm";

import s from "./CategoriesListPage.module.css";

const CategoriesListPage = (props) => {
  return (
    <div className={s.categoriesWrapper}>
      <CategoriesList handleSelectCategory={props.handleSelectCategory}/>
      <CategoriesForm/>
    </div>
  );
};

export default CategoriesListPage;
