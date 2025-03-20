import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from "react-redux";

import { getCategories } from '../redux/categories/categoriesOperations';
import { selectFilter } from "../redux/filter/filterSelectors";

import CategoriesList from "../components/CategoriesList/CategoriesList";
import CategoriesForm from "../components/CategoriesForm/CategoriesForm";

import s from "./Page.module.css";

const CategoriesPage = ({test, handleSelected }) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilte r);



  useEffect(() => {
    dispatch(getCategories(filter));
  }, [dispatch]);

  
  return (
    <div className={s.categoriesWrapper}>
      <CategoriesList/>
      <CategoriesForm/>
    </div>
  );
  
};

export default CategoriesPage;
