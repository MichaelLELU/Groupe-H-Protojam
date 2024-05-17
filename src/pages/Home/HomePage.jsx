import { useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import { useLoaderData } from "react-router-dom";
import CardList from "../../components/CardList/CardList";
import SearchBar from "../../components/SearchBar/SearchBar"
import './Home.css'

export default function HomePage() {
  const data = useLoaderData();

  const [result, setResult] = useState(data);
  const [filteredExotic, setFilteredExotic] = useState(false);

 useEffect(() => {
    if (filteredExotic) {
      fetch(`https://wcs-wilders-apis.vercel.app/api/plants/search/giant`)
        .then((res) => res.json())
        .then((response) => setResult(response));
    }
  }, [filteredExotic]);

  const [filteredAbies, setFilteredAbies] = useState(false)

  useEffect(() => {
    if (filteredAbies) {
      fetch(`https://wcs-wilders-apis.vercel.app/api/plants/search/abies`)
        .then((res) => res.json())
        .then((response) => setResult(response));
    }
  }, [filteredAbies]);

  const [filteredDroseraceae, setFilteredDroseraceae] = useState(false)

  useEffect(() => {
    if (filteredDroseraceae) {
      fetch(`https://wcs-wilders-apis.vercel.app/api/plants/search/drosera`)
        .then((res) => res.json())
        .then((response) => setResult(response));
    }
  }, [filteredDroseraceae]);

  const [filteredAceraceae, setFilteredAceraceae] = useState(false)

  useEffect(() => {
    if (filteredAceraceae) {
      fetch(`https://wcs-wilders-apis.vercel.app/api/plants/search/acer`)
        .then((res) => res.json())
        .then((response) => setResult(response));
    }
  }, [filteredAceraceae]);


  const [search, setSearch] = useState(null);

  useEffect(() => {
    if (search) {
      fetch(`https://wcs-wilders-apis.vercel.app/api/plants/search/${search}`)
        .then((res) => res.json())
        .then((data) => setResult(data));
    }
  }, [search]);

  return (
    <>
    <Filter
        setFilteredExotic={setFilteredExotic} 
        filteredExotic={filteredExotic}
        setFilteredAbies={setFilteredAbies} 
        filteredAbies={filteredAbies}
        filteredDroseraceae={filteredDroseraceae}
        setFilteredDroseraceae={setFilteredDroseraceae}
        filteredAceraceae={filteredAceraceae}
        setFilteredAceraceae={setFilteredAceraceae}
      />
      <h2 className="intro">
        Discover botanical diversity with BotanicWorld, our plant directory and
        your source of green inspiration.
      </h2>
        <SearchBar setSearch={setSearch} />
      <div>
        <CardList  result={result}/>
      </div>
      
    </>
  );
}
