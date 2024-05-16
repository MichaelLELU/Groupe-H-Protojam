import Card from "../Card/Card";
import "./CardList.css";

export default function CardList({data}){
   console.log(data);
    return(
        <div className="card-container">
        {data.data.map((item) => (
           <Card
           className="card"
           key = {item.id}
           image = {item.image_url}
           name = {item.common_name}
           />
        )
        )}
        </div>

    )
}