import { useLoaderData } from "react-router-dom";
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
    <div className="">
      <button type="button" onClick={handleBack}>
        🔙
      </button>
      <img src={detail.image_url} alt={detail.common_name} />
    </div>
    <div className="">
      <h1>{detail.common_name}</h1>
      <p>{detail.scientific_name}</p>
      <p>{detail.observations}</p>
    </div>
    </>


  );
}
