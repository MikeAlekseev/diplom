import { items } from "../../data";
import { BasketContext } from "../../context.js";
import { useContext, useState } from "react";
import { Card } from "../../component/index.js";
import { CurrencyContext } from "../../context.js";
import { removeFromBasket } from "../../component/util/basketLocalStorage.js";

export function Basket() {
  const basket = useContext(BasketContext);
  const currency = useContext(CurrencyContext);
  const sum = basket.products.reduce((sum, id) => {
    const item = items[id];
    return sum + item.price;
  }, 0);
  

  const buyHandler = () => {
    // Функция для удаления товара из корзины
    basket.products.forEach(productId => removeFromBasket(productId));
    basket.addProduct([]);  // Обновляем корзину в контексте
    setItemBuyed(true);
  };

  const [itemBuyed, setItemBuyed] = useState(false);

  return (
    <div className="basket__flex">
      <h2>Корзина</h2>
      <div className="basket__card">
        {basket.products.map((id) => {
          return (
            <Card
              key={id}
              id={id}
              text={items[id].text}
              imageSrc={items[id].imageSrc}
              price={items[id].price}
              showRemoveButton={true}
              url={"/item/" + id}
            />
          );
        })}
      </div>
        {itemBuyed ? <h2>Покупка оформлена</h2>: null }
      {basket.products.length > 0 ? (
        <div className="endPrice">
          Итого: {sum} ₽ / {(sum * currency.rub.btc).toFixed(6)} ฿
          <button className="endPrice__button" onClick={buyHandler}>Оплатить</button>
        </div>
      ) : null}
    </div>
  );
}
