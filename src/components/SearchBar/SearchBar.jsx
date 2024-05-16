import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "../CardList/CardList.css";

export default function SearchBar() {
  // le state pour la recherche Prompté
  const [search, setSearch] = useState(null);
  // le state pour le map du resultat
  const [result, setResult] = useState(null);
  console.log(result);
  // la fonction du bouton qui set la recherche sur la valeur de l'imput
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target[0].value);
  };
  // le fetch pour la recherche qui est sous condition de la recherche
  useEffect(() => {
    if (search) {
      fetch(`https://wcs-wilders-apis.vercel.app/api/plants/search/${search}`)
        .then((res) => res.json())
        .then((data) => setResult(data));
    }
  }, [search]);

  return (
    <section className="">
      <form className="searchbar" onSubmit={handleSubmit}>
        <input type="text" className="border" placeholder="Search🔍" />
        <button type="submit" className="border-r">
          Rechercher
        </button>
      </form>
      <div className="card-container">
        {result &&
          result.data
            .slice(0, 10)
            .map((d, i) => (
              <Card key={i} image={d.image_url} name={d.common_name} />
            ))}
      </div>
    </section>
  );
}
