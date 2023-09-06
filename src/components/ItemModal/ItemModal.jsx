import s from "./ItemModal.module.css";
import { useNavigate } from "react-router-dom";

const ItemModal = ({handleDelete}) => {
  const navigate = useNavigate();
    return (
    <div className={s.itemModal}>
        <button className={s.itemModalBtn} onClick={()=> navigate("/edit")}>Edit</button>
        <button className={s.itemModalBtn} onClick={handleDelete}>Delete</button>
      </div>
    );
  };
  
  export default ItemModal;