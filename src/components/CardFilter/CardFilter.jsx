import Card from "../Card/Card"
import "../CardList/CardList.css"

export default function CardFilter({filter}){

    console.log(filter)

    return(
        <div className="card-container">
        {filter.data.map((item) => (
           <Card
           key = {item.id}
           image = {item.image_url}
           name = {item.common_name}
           />
        )
        )}
        </div>

    )
}