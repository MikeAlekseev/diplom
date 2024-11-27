import { Link } from "react-router-dom";
import { useContext } from "react";
import { BasketContext } from "../../context";  // Контекст корзины
import { Add } from "../Add/Add";  // Импортируем кнопку Add
import { Remove } from "../Remove/Remove";  // Импортируем кнопку Remove
import { CurrencyContext } from "../../context";
import "./Card.style.css";

export function Card({ text, imageSrc, id, showRemoveButton, price, isGroup, url }) {
  // Получение данных корзины через контекст
  const basketValue = useContext(BasketContext);

  // Проверка, содержится ли товар с данным id в корзине
  const isInBasket = basketValue.products.includes(id);

  // Получение текущей валюты через контекст
  const currency = useContext(CurrencyContext);
  
  return (
    <div className="card">
      {/* Ссылка на страницу товара */}
      <Link to={url}>
        {/* Изображение товара, если оно передано */}
        {imageSrc && <img src={imageSrc} alt={text} />}
        {/* Название товара */}
        <h2>{text}</h2>
        {/* Отображение цены в рублях и биткоинах (если указана цена) */}
        {price ? <p>{price} ₽ / {(price * currency.rub.btc).toFixed(6)} ฿ </p> : null}
      </Link>

      {/* Если товар в корзине, показываем кнопку "Удалить", если:
          - передан showRemoveButton
          - товар не является частью группы (isGroup === false) */}
      {isInBasket && showRemoveButton && !isGroup ? <Remove id={id} /> : null}

      {/* Если товар в корзине или он принадлежит группе, кнопка "Добавить" не отображается */}
      {isInBasket || isGroup ? null : <Add id={id} />}
    </div>
  );
}
