import { useContext } from "react";
import { BasketContext } from "../../context";  // Import the BasketContext
import { addToBasket } from "../util/basketLocalStorage";
import "./Add.style.css";

export function Add({ id }) {
  // Получение контекста корзины через useContext
  const basketValue = useContext(BasketContext);  

  // Проверка, находится ли товар с данным id в корзине
  const isInBasket = basketValue.products.includes(id);

  // Функция для обработки клика по кнопке "Добавить"
  const handleAddClick = () => {
    // Обновление состояния корзины, добавление нового товара
    basketValue.addProduct([...basketValue.products, id]);  
    // Дополнительное действие для добавления товара в корзину (например, запись в локальное хранилище)
    addToBasket(id);  
  };

  // Рендер кнопки "Добавить", если товар еще не в корзине
  return (
    !isInBasket && (
      <button
        className="button__add"
        type="button"
        onClick={handleAddClick} // При клике вызывается handleAddClick
      >
        Добавить
      </button>
    )
  );
}
