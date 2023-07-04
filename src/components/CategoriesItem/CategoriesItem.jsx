import s from "./CategoriesItem.module.css";
import moreIcon from "../../assets/icons/more.svg";

import { useState } from "react";

//Router
import { useNavigate } from "react-router-dom";

import { useDispatch} from "react-redux";
import { deleteCategory } from "../../redux/categories/categoriesActions";

const CategoriesItem = ({categoryEl, props}) => {
    const [openMenuId, setOpenMenuId] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteCategory(categoryEl.id));
    return (
        <div className={s.categoriesItem}>
          <p
            className={s.categoriesItemName}
            onClick={() => {
              props.handleSelectCategory(categoryEl.nameCategory);
              navigate(-1);
            }}
          >
            {categoryEl.nameCategory}
          </p>

          <button
            type="button"
            className={s.btnMore}
            onClick={() => {
              setOpenMenuId(categoryEl.id);
            }}
          >
            <img src={moreIcon} alt="icon More" />
          </button>
          {openMenuId === categoryEl.id && (
            <div className={s.categoryModal}>
              <button className={s.categoryModalBtn}>Edit</button>
              <button className={s.categoryModalBtn} onClick={handleDelete}>Delete</button>
            </div>
          )}
        </div>
    );
  };
  
  export default CategoriesItem;