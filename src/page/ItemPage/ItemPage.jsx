import { useParams } from "react-router-dom";
import { items } from "../../data";
import { Card } from "../../component";

export function ItemPage() {
  const { itemId } = useParams();

  const item = items[itemId];
  return (
    <div className="похрен">
      {/* <div className="">{item.id}</div> */}
      <div className="">{item.description}</div>
      <div className="">{item.text}</div>
      {/* <div className="">{item.imageSrc}</div> */}
      <div className="">{item.price} руб.</div>
      
    </div>
  );
}