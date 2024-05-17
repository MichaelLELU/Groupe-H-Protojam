import "../CardList/CardList.css";

export default function SearchBar({setSearch,}) {
  
  // la fonction du bouton qui set la recherche sur la valeur de l'imput
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target[0].value);
  };
  // le fetch pour la recherche qui est sous condition de la recherche


  return (
      <form className="searchbar" onSubmit={handleSubmit}>
        <input type="text" className="border" placeholder="Search🔍" />
        <button type="submit" className="border-r">
        Search
        </button>
      </form>
  );
}
