import { useParams } from "react-router-dom";
import { items } from "../../data";


export function ItemPage() {
  const { itemId } = useParams();

  const item = items[itemId];
  return (
    <div className="похрен">
      <div className="">{item.description}</div>
      <div className="">{item.text}</div>
      <div className="">{item.price} руб.</div>
    </div>
  );
}
