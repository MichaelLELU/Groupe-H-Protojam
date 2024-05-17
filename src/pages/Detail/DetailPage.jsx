import { useLoaderData } from "react-router-dom";
import "./DetailPage.css";
/* import { useParams } from "react-router-dom"; */
export default function DetailPage() {
  /*   const {id} = useParams(); */
  const data = useLoaderData();
  const detail = data.data;
  console.log(detail);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <button className="back_button" type="button" onClick={handleBack}>
        Return
      </button>
      <div className="container_details">
        <img
          className="img_details"
          src={detail.image_url}
          alt={detail.common_name}
        />
        <div className="desc_details">
          <h1>Common Name: {detail.common_name}</h1>
          <p>Scientific Name: {detail.scientific_name}</p>
          <p>Observation: {detail.observations}</p>
          <p>Year of discovery: {detail.year}</p>
        </div>
      </div>
    </>
  );
}
