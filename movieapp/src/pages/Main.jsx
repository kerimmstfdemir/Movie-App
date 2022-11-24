import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import SearchMovie from "../components/SearchMovie";
import axios from "axios";
import PageNumber from "../components/PageNumber";

const Main = () => {
  const [dataMovies, setDataMovies] = useState({});
  const [pageNumber, setPageNumber] = useState(499);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${pageNumber}`;

  const getMovies = async () => {
    const dataMovies = await axios(url);
    setDataMovies(dataMovies);
  };

  useEffect(() => {
    getMovies();
  }, [pageNumber]);

  console.log(dataMovies);
  return (
    <div>
      <SearchMovie />
      <MovieCard dataMovies={dataMovies}/>
      <PageNumber pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </div>
  );
};

export default Main;
