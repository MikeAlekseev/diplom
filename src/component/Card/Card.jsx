import "./Card.style.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BasketContext } from "../../context";  // Контекст корзины
import { Add } from "../Add/Add";  // Импортируем кнопку Add
import { Remove } from "../Remove/Remove";  // Импортируем кнопку Remove

export function Card({ text, imageSrc, id, showRemoveButton, price, isGroup, url }) {
  const basketValue = useContext(BasketContext);

  // Проверяем, есть ли продукт в корзине
  const isInBasket = basketValue.products.includes(id);
  

  return (
    <div className="card">
      <Link to={url}>
        {imageSrc && <img src={imageSrc} alt={text} />}
        <h2>{text}</h2>
        {price ? <p>{price} pуб.</p> : null}
      </Link>

      {/* Если продукт есть в корзине, показываем кнопку Remove, иначе Add */}
      {isInBasket && showRemoveButton && !isGroup ? <Remove id={id} /> : null} 
      {isInBasket || isGroup ? null : <Add id={id} />}
    </div>
  );
}
