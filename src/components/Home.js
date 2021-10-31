import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import superApi from "./api/superApi";
import HeroList from "./HeroList";

function Home() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    onTermSubmit();
  }, []);

  const onTermSubmit = async (hero) => {
    const response = await superApi.get(`/search/${hero}`);

    console.log(response.data.results);

    setHeroes(response?.data?.results ?? []);
  };

  return (
    <div>
      <SearchBar onFormSubmit={onTermSubmit} />

      <HeroList heroes={heroes} />
    </div>
  );
}

export default Home;
