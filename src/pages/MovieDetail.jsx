/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/iframe-has-title */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MovieDetailedOverview } from "./MovieDetail.styled";
import notfoundposter from "../assets/default-movie.jpg"

const MovieDetail = () => {
  const navigate = useNavigate()
  const { state:movieDetails } = useLocation();
  const [videoKey, setVideoKey] = useState("");
  const { id, title, poster_path, overview, release_date, vote_average, vote_count} = movieDetails;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`

  const getMovieVideos = async () => {
    try{
      const videos = await axios(videoUrl);
      setVideoKey(videos.data?.results[0]?.key)
    }catch(error){
      console.log(error.message);
    }
  }

  useEffect(() => {
    getMovieVideos();
  }, [])
  
  return (
    <div className="d-flex flex-column ">
    <div style={{gap:"1rem"}} className="d-flex flex-column justify-content-center align-items-center m-1">
      <h2 className="text-center mt-2">{title}</h2>
        <div style={{maxWidth:"70rem"}} className="ratio ratio-16x9">
          <iframe
            className="rounded-xl"
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="d-flex mt-4" style={{gap:"1rem", maxWidth:"70rem", borderRadius:"20px", backgroundColor:"rgba(27, 28, 30, 0.9)"}}>
        <img style={{width:"20rem", borderRadius:"20px"}} src={poster_path ? `https://image.tmdb.org/t/p/w1280${poster_path}` : notfoundposter} />
        <div className="d-flex flex-column justify-content-between p-3">
          <div>
          <h3 style={{color:"white"}}>Overview</h3>
          <MovieDetailedOverview>{overview}</MovieDetailedOverview>
          </div>
          <div>
            <table className="table table-bordered" style={{color:"white", fontSize:"large", lineHeight:"2.5rem"}}>
              <tr>
                <th scope="row">Release Date</th>
                <td>{release_date}</td>
              </tr>
              <tr>
                <th>Rate</th>
                <td>{vote_average}</td>
              </tr>
              <tr>
                <th>Total Vote</th>
                <td>{vote_count}</td>
              </tr>
            </table>
          </div>
        </div>
        </div>
      </div>
    <button onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  )
}

export default MovieDetail;