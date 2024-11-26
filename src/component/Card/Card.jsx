import { Link } from "react-router-dom";
import { useContext } from "react";
import { BasketContext } from "../../context";  // Контекст корзины
import { Add } from "../Add/Add";  // Импортируем кнопку Add
import { Remove } from "../Remove/Remove";  // Импортируем кнопку Remove
import { CurrencyContext } from "../../context";
import "./Card.style.css";

export function Card({ text, imageSrc, id, showRemoveButton, price, isGroup, url }) {
  const basketValue = useContext(BasketContext);

 
  const isInBasket = basketValue.products.includes(id);
  const currency = useContext(CurrencyContext);
  

  return (
    <div className="card">
      <Link to={url}>
        {imageSrc && <img src={imageSrc} alt={text} />}
        <h2>{text}</h2>
        {price ? <p>{price} ₽ / {(price * currency.rub.btc).toFixed(6)} ฿ </p> : null}
      </Link>

      
      {isInBasket && showRemoveButton && !isGroup ? <Remove id={id} /> : null} 
      {isInBasket || isGroup ? null : <Add id={id} />}
    </div>
  );
}
