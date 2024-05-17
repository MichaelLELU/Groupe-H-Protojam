import Card from "../Card/Card";
import "./CardList.css";

export default function CardList({result}){
    return(
        <div className="card-container">
        {result.data.map((item,i) => (
           <Card
           className="card"
           key = {i}
            item={item}
           />
        )
        )}
        </div>

    )
}