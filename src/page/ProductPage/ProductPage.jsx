import { useParams } from "react-router-dom";
import { products } from "../../data";


export function ProductPage() {
  const { productId } = useParams();

  const product = products.find((product) => {
    return product.id === productId;
  });
  return (
    <div className="похрен">
      Product page
      
      {productId}
      {product ? product.text : "Не найдено"}
    </div>
  );
}
