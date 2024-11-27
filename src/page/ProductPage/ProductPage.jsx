import { useParams } from "react-router-dom";
import { products } from "../../data";
import { Card } from "../../component";


// Компонент ProductPage отображает подробности о продукте, включая его дочерние элементы (товары или варианты)
export function ProductPage() {
  // Извлекаем параметр productId из URL, используя хук useParams
  const { productId } = useParams();

  // Ищем продукт в массиве products, который соответствует переданному productId
  const product = products.find((product) => {
    return product.id === productId;  // Сравниваем id продукта с переданным в URL
  });

  return (
    <div className="product__items">
      {/* Если продукт найден, отображаем его описание, иначе выводим сообщение "Не найдено" */}
      {product ? product.text : "Не найдено"}

      {/* Если продукт найден, отображаем его дочерние элементы, например, товары */}
      <div>
        {product && product.items.map(item => {
          // Для каждого дочернего товара отображаем карточку с деталями
          return (
            <Card
              key={item.id}  // Уникальный ключ для каждого элемента
              text={item.text}  // Название товара
              imageSrc={item.imageSrc}  // Источник изображения товара
              id={item.id}  // ID товара
              showRemoveButton={false}  // Не показывать кнопку удаления для товаров на этой странице
              price={item.price}  // Цена товара
              url={"/item/" + item.id}  // URL для страницы товара
            />
          );
        })}
      </div>
    </div>
  );
}

