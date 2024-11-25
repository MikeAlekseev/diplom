import './Remove.style.css'
import React, { useContext } from "react";
import { BasketContext } from "../../context";  // Импортируем контекст корзины
import { removeFromBasket } from "../util/basketLocalStorage";  // Функция для удаления из локального хранилища

export function Remove({ id }) {
  const basketValue = useContext(BasketContext);  // Получаем контекст корзины

  // Проверяем, есть ли продукт в корзине
  const isInBasket = basketValue.products.includes(id);

  const handleRemoveClick = () => {
    // Функция для удаления товара из корзины
    const updatedProducts = basketValue.products.filter(productId => productId !== id);
    basketValue.addProduct(updatedProducts);  // Обновляем корзину в контексте

    removeFromBasket(id);  // Удаляем из локального хранилища
  };

  // Отображаем кнопку Remove только если продукт есть в корзине
  return (
    isInBasket && (
      <button
        className="button__remove"
        type="button"
        onClick={handleRemoveClick}
      >
        Отменить
      </button>
    )
  );
}