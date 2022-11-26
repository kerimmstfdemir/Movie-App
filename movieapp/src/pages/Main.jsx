import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import SearchMovie from "../components/SearchMovie";
import axios from "axios";
import PageNumber from "../components/PageNumber";
import { useSelector, useDispatch } from "react-redux";
import { DATAMOVIES } from "../redux/types/reduxTypes";

const Main = ({ pageNumber, setPageNumber }) => {
  const dispatch = useDispatch();
  const dataMovies = useSelector((state) => state.dataMovies);
  const loginInformation = useSelector((state) => state.loginInformation)
  const searchMovie = useSelector((state) => state.searchMovie)
  const [totalPages, setTotalPages] =useState(1)

  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${pageNumber}`;
  
  const searchMovieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchMovie}&page=${pageNumber}`

  const getMovies = async () => {
    const dataMovies = await axios(url);
    dispatch({type: DATAMOVIES, datamovies:dataMovies})
    setTotalPages(dataMovies.data.total_pages)
  };

  const searchMovies = async () => {
    const searchMovies = await axios(searchMovieUrl)
    dispatch({type: DATAMOVIES, datamovies:searchMovies})
    setTotalPages(dataMovies.data.total_pages)
  }

  useEffect(() => {
    searchMovie ? searchMovies() : getMovies();
  }, [pageNumber]);

  console.log(loginInformation)
  return (
    <div>
      <SearchMovie searchMovies={searchMovies} setPageNumber={setPageNumber} pageNumber={pageNumber}/>
      <MovieCard dataMovies={dataMovies}/>
      <PageNumber totalpages={totalPages} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </div>
  );
};

export default Main;
