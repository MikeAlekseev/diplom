import { useContext } from "react";
import { BasketContext } from "../../context";  // Import the BasketContext
import { addToBasket } from "../util/basketLocalStorage";
import "./Add.style.css";

export function Add({ id }) {
  const basketValue = useContext(BasketContext);  

 
  const isInBasket = basketValue.products.includes(id);

  const handleAddClick = () => {
    basketValue.addProduct([...basketValue.products, id]);  
    addToBasket(id);  
  };

  return (
    !isInBasket && (
      <button
        className="button__add"
        type="button"
        onClick={handleAddClick}
      >
        Добавить
      </button>
    )
  );
}