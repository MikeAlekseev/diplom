// import { useParams } from "react-router-dom"
import { products } from "../../data";
// import { Add } from "../../component/Add/Add.jsx";
import { BasketContext } from "../../context.js";
import { useContext } from "react";
import { Card } from "../../component/index.js";

export function Basket() {
    const basket = useContext(BasketContext)
  
    
    return (
        <div >
            <h2>Корзина</h2>
         {products.map(product => {
            if(basket.products.includes(product.id)){
            return (
                <Card
              key={product.id}
              id={product.id}
              text={product.text}
              imageSrc={product.imageSrc}
              showRemoveButton={true}
            />
            )
            }
         })}
        </div>
    )
    
}