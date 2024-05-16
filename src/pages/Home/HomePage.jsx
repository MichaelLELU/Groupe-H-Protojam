import { useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import { useLoaderData } from "react-router-dom";
import CardList from "../../components/CardList/CardList";
import CardFilter from "../../components/CardFilter/CardFilter";
import SearchBar from "../../components/SearchBar/SearchBar"
import './Home.css'

export default function HomePage() {
  const data = useLoaderData();

  const [filter, setFilter] = useState(null);
  const [filteredExotic, setFilteredExotic] = useState(false);

 useEffect(() => {
    if (filteredExotic) {
      fetch(`https://wcs-wilders-apis.vercel.app/api/plants/search/giant`)
        .then((res) => res.json())
        .then((response) => setFilter(response));
    }
  }, [filteredExotic]);

  const [filteredVegetable, setFilteredVegetable] = useState(false)

  useEffect(() => {
    if (filteredVegetable) {
      fetch(`https://wcs-wilders-apis.vercel.app/api/plants/search/vegetable`)
        .then((res) => res.json())
        .then((response) => setFilter(response));
    }
  }, [filteredVegetable]);

  const [filteredDroseraceae, setFilteredDroseraceae] = useState(false)

  useEffect(() => {
    if (filteredDroseraceae) {
      fetch(`https://wcs-wilders-apis.vercel.app/api/plants/search/drosera`)
        .then((res) => res.json())
        .then((response) => setFilter(response));
    }
  }, [filteredDroseraceae]);

  const [filteredAceraceae, setFilteredAceraceae] = useState(false)

  useEffect(() => {
    if (filteredAceraceae) {
      fetch(`https://wcs-wilders-apis.vercel.app/api/plants/search/acer`)
        .then((res) => res.json())
        .then((response) => setFilter(response));
    }
  }, [filteredAceraceae]);

  return (
    <>
    <Filter
        setFilteredExotic={setFilteredExotic} 
        filteredExotic={filteredExotic}
        setFilteredVegetable={setFilteredVegetable} 
        filteredVegetable={filteredVegetable}
        filteredDroseraceae={filteredDroseraceae}
        setFilteredDroseraceae={setFilteredDroseraceae}
        filteredAceraceae={filteredAceraceae}
        setFilteredAceraceae={setFilteredAceraceae}
      />
      <h2 className="intro">
        Discover botanical diversity with BotanicWorld, our plant directory and
        your source of green inspiration.
      </h2>
      <SearchBar />
      <div>
        {!filter && <CardList data={data} />}
        {filter && <CardFilter filter={filter} />}
      </div>
      
    </>
  );
}
