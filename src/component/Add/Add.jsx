
import "./Add.style.css";
import React, { useContext } from "react";
import { BasketContext } from "../../context";  // Import the BasketContext
import { addToBasket } from "../util/basketLocalStorage";

export function Add({ id }) {
  const basketValue = useContext(BasketContext);  // Access basket context

  // Check if the product is already in the basket
  const isInBasket = basketValue.products.includes(id);

  const handleAddClick = () => {
    basketValue.addProduct([...basketValue.products, id]);  // Add to basket context
    addToBasket(id);  // Add to localStorage
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