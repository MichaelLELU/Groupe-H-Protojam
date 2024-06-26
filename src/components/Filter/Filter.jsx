import "./Filter.css";

export default function Filter({
  filteredExotic,
  setFilteredExotic,
  filteredAbies,
  setFilteredAbies,
  filteredDroseraceae,
  setFilteredDroseraceae,
  setFilteredAceraceae,
  filteredAceraceae,
}) {
  return (
    <div className="filterButton">
      <button
        className="button"
        type="button"
        onClick={() => setFilteredExotic(!filteredExotic)}
      >
        Exotic
      </button>

      <button
        className="button"
        type="button"
        onClick={() => setFilteredAbies(!filteredAbies)}
      >
        Abies
      </button>

      <button
        className="button"
        type="button"
        onClick={() => setFilteredDroseraceae(!filteredDroseraceae)}
      >
        Carnivorous
      </button>

      <button
        className="button"
        type="button"
        onClick={() => setFilteredAceraceae(!filteredAceraceae)}
      >
        Acer
      </button>
    </div>
  );
}
