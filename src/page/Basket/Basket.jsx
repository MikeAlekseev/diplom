import { items } from "../../data";
import { BasketContext } from "../../context.js";
import { useContext, useState } from "react";
import { Card } from "../../component/index.js";
import { CurrencyContext } from "../../context.js";
import { removeFromBasket } from "../../component/util/basketLocalStorage.js";

export function Basket() {
  // Извлекаем данные о корзине и валюте из контекста
  const basket = useContext(BasketContext);
  const currency = useContext(CurrencyContext);
  
  // Суммируем стоимость всех товаров в корзине
  const sum = basket.products.reduce((sum, id) => {
    const item = items[id];  // Ищем товар по его id
    return sum + item.price;  // Складываем цену товара к общей сумме
  }, 0);
  

  // Обработчик для покупки товаров в корзине
  const buyHandler = () => {
    // Для каждого товара в корзине вызываем функцию удаления товара из корзины
    basket.products.forEach(productId => removeFromBasket(productId));
    
    // Очищаем корзину в контексте
    basket.addProduct([]);  
    
    // Обновляем состояние, что покупка была оформлена
    setItemBuyed(true);
  };

  // Состояние для отображения сообщения о том, что покупка была оформлена
  const [itemBuyed, setItemBuyed] = useState(false);

  return (
    <div className="basket__flex">
      <h2>Корзина</h2>
      
      {/* Карточки товаров в корзине */}
      <div className="basket__card">
        {basket.products.map((id) => {
          return (
            <Card
              key={id}  // Уникальный ключ для каждого элемента списка
              id={id}  // Передаем ID товара в компонент Card
              text={items[id].text}  // Название товара
              imageSrc={items[id].imageSrc}  // Изображение товара
              price={items[id].price}  // Цена товара
              showRemoveButton={true}  // Показываем кнопку удаления
              url={"/item/" + id}  // Ссылка на страницу товара
            />
          );
        })}
      </div>
      
      {/* Если покупка была оформлена, показываем сообщение */}
      {itemBuyed ? <h2>Покупка оформлена</h2>: null }

      {/* Если корзина не пуста, показываем блок с итоговой стоимостью и кнопкой оплаты */}
      {basket.products.length > 0 ? (
        <div className="endPrice">
          {/* Выводим итоговую цену в рублях и биткойнах */}
          Итого: {sum} ₽ / {(sum * currency.rub.btc).toFixed(6)} ฿
          
          {/* Кнопка для оплаты */}
          <button className="endPrice__button" onClick={buyHandler}>Оплатить</button>
        </div>
      ) : null}
    </div>
  );
}

