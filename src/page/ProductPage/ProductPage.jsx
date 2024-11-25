import { useParams } from "react-router-dom";
import { products } from "../../data";
import { Card } from "../../component";


export function ProductPage() {
  const { productId } = useParams();

  const product = products.find((product) => {
    return product.id === productId;
  });
  return (
    <div className="product__items">
  
      {product ? product.text : "Не найдено"}
      <div>
        {product.items.map(item => {
          return <Card key = {item.id} text={item.text} imageSrc = {item.imageSrc} id = {item.id} showRemoveButton = {false} price = {item.price} url = {"/item/" + item.id} /> 
        })}
      </div>
    </div>
  );
}
