import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getCategories } from '../../redux/categories/categoriesOperations';

import CategoriesList from "../../components/CategoriesList/CategoriesList";
import CategoriesForm from "../../components/CategoriesForm/CategoriesForm";

import s from "./CategoriesListPage.module.css";

const CategoriesListPage = ({handleSelected}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  
  return (
    <div className={s.categoriesWrapper}>
      <CategoriesList handleSelected={handleSelected}/>
      <CategoriesForm/>
    </div>
  );
};

export default CategoriesListPage;
