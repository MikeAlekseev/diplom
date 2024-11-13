import { Card } from "../../component";
import { products } from "../../data";
import "../RootPage/RootPage.style.css";
import { Slider } from "../../component/Slider/Slider";
import { useContext } from "react";
import { SearchContext } from "../../context";


export function RootPage() {

  const search = useContext(SearchContext)
  
  
  return (
    <div>
      
      <Slider />
      <div className="card__list">
        
        {products
        .filter((product)=>{
          if(search.search === ""){
            return true;
          }
          return product.text.toLowerCase().includes(search.search.toLowerCase())
        })
        .map((product) => {
          return (
            <Card
              key={product.id}
              id={product.id}
              text={product.text}
              imageSrc={product.imageSrc}
            />
          );
        })}
      </div>
    </div>
  );
}
