/* import { useLoaderData} from 'react-router-dom';
import { useParams } from "react-router-dom"; */
import { useDetail } from "../../context/DetailContext";
export default function DetailPage() {
/* 
  const data = useLoaderData();
  const {id} = useParams();
  const detail = data.find((r)=> r.id ===parseInt(id, 10));
*/

  const { details } = useDetail();
console.log(details)

  const handleBack = () => {
    window.history.back();
  };


    return(
        <>
        <button type="button" onClick={handleBack}>🔙</button>
          <h1>details page</h1>
{/*         <h1>{details.family}</h1>
        <p>{details.description}</p> */}
        </>
    );
}
