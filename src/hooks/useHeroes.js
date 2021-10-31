import { useState, useEffect } from "react";
import heroesApi from "../heroesApi";

const useVideos = (defaultSearchTerm) => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await heroesApi.get("", {});

    setHeroes(response.data);
  };
  return [heroes, search];
};

export default useVideos;
