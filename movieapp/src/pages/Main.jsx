import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import SearchMovie from "../components/SearchMovie";
import axios from "axios";
import PageNumber from "../components/PageNumber";

const Main = () => {
  const [dataMovies, setDataMovies] = useState({});
  const [pageNumber, setPageNumber] = useState(1);
  const [searchMovie, setSearchMovie] = useState("")

  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${pageNumber}`;
  
  const searchMovieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchMovie}&page=${pageNumber}`

  const getMovies = async () => {
    const dataMovies = await axios(url);
    setDataMovies(dataMovies);
  };

  const searchMovies = async () => {
    const searchMovies = await axios(searchMovieUrl)
    setDataMovies(searchMovies);
  }

  useEffect(() => {
    getMovies();
  }, [pageNumber]);

  console.log(dataMovies);
  return (
    <div>
      <SearchMovie searchMovie={searchMovie} setSearchMovie={setSearchMovie} searchMovies={searchMovies}/>
      <MovieCard dataMovies={dataMovies}/>
      <PageNumber pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </div>
  );
};

export default Main;
