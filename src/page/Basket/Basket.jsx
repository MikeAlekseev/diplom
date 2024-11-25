import { items } from "../../data";
import { BasketContext } from "../../context.js";
import { useContext } from "react";
import { Card } from "../../component/index.js";

export function Basket() {
  const basket = useContext(BasketContext);

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
      {basket.products.length>0 ? (
        <div className="endPrice">
            Итого: {basket.products.reduce((sum, id) => {
                const item = items[id];
                return sum + item.price
            }, 0
            )} руб.
        </div>
      ) : null}
    </div>
  );
}
