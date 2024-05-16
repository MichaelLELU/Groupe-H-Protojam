import { useLoaderData } from "react-router-dom";

export default function HomePage() {
  const data = useLoaderData();

  data;

  return (
    <>
      <h2>
        Discover botanical diversity with BotanicWorld, our plant directory and
        your source of green inspiration.
      </h2>
    </>
  );
}
