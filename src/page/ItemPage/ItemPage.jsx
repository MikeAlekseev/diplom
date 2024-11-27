import { useParams } from "react-router-dom";
import { items } from "../../data";


export function ItemPage() {
  // Получаем параметр itemId из URL, используя useParams.
  const { itemId } = useParams(); 

  // Извлекаем товар из массива или объекта items по id.
  const item = items[itemId]; 

  // Рендерим страницу товара, используя полученные данные.
  return (
    <div className="items">
      <div className="">{item.description}</div> {/* Описание товара */}
      <div className="">{item.text}</div> {/* Название товара */}
      <div className="">{item.price} руб.</div> {/* Цена товара в рублях */}
    </div>
  );
}

