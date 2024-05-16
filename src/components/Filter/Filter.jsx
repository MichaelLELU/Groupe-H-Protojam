import "./Filter.css";


export default function Filter({
    filteredExotic, 
    setFilteredExotic,
    filteredVegetable, 
    setFilteredVegetable,
    filteredDroseraceae,
    setFilteredDroseraceae,
    setFilteredAceraceae,
    filteredAceraceae
 }) {


    return(

       <div className="filterButton"> 
        <button 
        className="button"
          type="button"
          onClick={() => setFilteredExotic(!filteredExotic)}>Exotic
        </button>

        <button
        className="button"
          type="button"
          onClick={() => setFilteredVegetable(!filteredVegetable)}
        >Vegetable
        </button>
        

       <button
       className="button"
          type="button"
          onClick={() => setFilteredDroseraceae(!filteredDroseraceae)}
        >
          Carnivore
        </button>

        <button
        className="button"
          type="button"
          onClick={() => setFilteredAceraceae(!filteredAceraceae)}
        >Erable
        </button>
        
        </div> 
    );


}