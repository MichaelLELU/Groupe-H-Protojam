import "./Card.css"

export default function Card ({image,name}) {

    return (
        <div>
            <h3>{name}</h3>
            <img className="card" src={image} alt={name} />
        </div>
    )
}