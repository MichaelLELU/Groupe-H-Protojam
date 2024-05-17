import { Link } from "react-router-dom"
import { useDetail } from "../../context/DetailContext";

export default function Card ({item}) {

    const { setDetail } = useDetail();
    console.log(setDetail)

    return (
        <div className="card">
            <h3>{item.common_name}</h3>
            <Link to={`detail/${item.id}`} ><img src={item.image_url} alt={item.common_name} /></Link>   
    </div>
    )
}
