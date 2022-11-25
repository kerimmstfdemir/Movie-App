import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const MovieDetail = () => {
  const navigate = useNavigate()
  const { state:movieDetails } = useLocation();
  const [videoKey, setVideoKey] = useState("");
  const { id, title } = movieDetails;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`

  console.log(movieDetails)

  const getMovieVideos = async () => {
    try{
      const videos = await axios(videoUrl);
      setVideoKey(videos.data.results[0].key)
    }catch(error){
      console.log(error.message);
    }
  }

  useEffect(() => {
    getMovieVideos();
  }, [])
  
  console.log(videoKey);
  return (
    <>
    <div>
      <h2>{title}</h2>
      <iframe src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`} frameborder="0"></iframe>
    </div>
    <button onClick={()=>navigate(-1)}>Go Back</button>
    </>
  )
}

export default MovieDetail;