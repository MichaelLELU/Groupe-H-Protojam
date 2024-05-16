import { useLoaderData } from "react-router-dom";
import CardList from "../../components/CardList/CardList";
import SearchBar from "../../components/SearchBar/SearchBar"
import './Home.css'

export default function HomePage() {
  const data = useLoaderData();

  data;

  return (
    <>
      <h2 className="intro">
        Discover botanical diversity with BotanicWorld, our plant directory and
        your source of green inspiration.
      </h2>
      <SearchBar/>
      <CardList  data={data} />
    </>
  );
}
