import Card from "../Card/Card";
import "./CardList.css";

export default function CardList({result}){
    return(
        <div className="card-container">
        {result.data.map((item,i) => (
           item.image_url ?
           <Card
           className="card"
           key = {i}
            item={item}
           /> : null
        )
        )}
        </div>

    )
}