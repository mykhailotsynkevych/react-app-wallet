import s from "./ItemModal.module.css";
import { useNavigate } from "react-router-dom";

const ItemModal = ({transactionId, handleDelete}) => {
  const navigate = useNavigate();
    return (
    <div className={s.itemModal}>
        <button className={s.itemModalBtn} onClick={()=> navigate("/edit/" + transactionId)}>Edit</button>
        <button className={s.itemModalBtn} onClick={handleDelete}>Delete</button>
      </div>
    );
  };
  
  export default ItemModal;