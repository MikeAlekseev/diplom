import { Card } from "../../component";
import { products } from "../../data";
import "../RootPage/RootPage.style.css";
import { Slider } from "../../component/Slider/Slider";

export function RootPage() {
  return (
    <div>
      {/* Index page */}
      <Slider />
      <div className="card__list">
        {/* карточки */}
        {products.map((product) => {
          return (
            <Card
              key={product.id}
              id={product.id}
              text={product.text}
              imageSrc={product.imageSrc}
            />
          );
        })}
        {/* <Card text="Ноутбуки" imageSrc= "/img/notebook.png" /> */}
        {/* <Card text="Роутеры"/>
                <Card text="Смартфоны"/>
                <Card text="USB/SSD"/> */}
      </div>
    </div>
  );
}
