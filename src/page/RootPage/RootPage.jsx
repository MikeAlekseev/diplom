import { Card } from "../../component";
import { products } from "../../data";
import { Slider } from "../../component/Slider/Slider";
import { useContext } from "react";
import { SearchContext } from "../../context";
import "../RootPage/RootPage.style.css";


// Компонент RootPage служит главной страницей приложения и отображает все карточки продуктов с учетом фильтра по поиску
export function RootPage() {
  // Получаем контекст поиска с помощью хука `useContext` для `SearchContext`
  const search = useContext(SearchContext);

  return (
    <div>
      {/* Рендерим слайдер */}
      <Slider />

      <div className="card__list">
        {/* Фильтруем массив продуктов в зависимости от текущего значения поиска */}
        {products
          .filter((product) => {
            if (search.search === "") {
              // Если строка поиска пустая, отображаем все продукты
              return true;
            }
            // Иначе, фильтруем продукты, проверяя, включает ли их текст (в нижнем регистре) строку поиска
            return product.text.toLowerCase().includes(search.search.toLowerCase());
          })
          .map((product) => {
            // Для каждого отфильтрованного продукта создаем карточку
            return (
              <Card
                key={product.id}  // Уникальный ключ для каждого продукта
                id={product.id}  // ID продукта
                text={product.text}  // Название продукта
                imageSrc={product.imageSrc}  // Источник изображения продукта
                isGroup={true}  // Флаг, указывающий, что это группа продуктов (карточка для группы)
                url={"/product/" + product.id}  // Ссылка на страницу продукта
              />
            );
          })}
      </div>
    </div>
  );
}

