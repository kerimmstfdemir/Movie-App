import Card from 'react-bootstrap/Card';
import { MovieCardOverview } from './MovieCard.styled';
import "./moviecard.css"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MovieCard = ({ dataMovies:{data} }) => {
    const navigate = useNavigate();
    const loginInformation = useSelector((state) => state.loginInformation)
    return (
        <div className=" text-center d-flex flex-row justify-content-center flex-wrap" style={{ gap:"1rem"}}>
            {data?.results.map((result) => {
                const { poster_path, original_title, overview } = result
                const handleMovieDetails = () => {
                    if(loginInformation) {
                        navigate("/details", {state:result})
                    } else {
                        alert("Please log in to see movie details")
                    }
                }
                return (
                    <>
                        <Card className='card' style={{width:"25.5rem", height:"30rem", overflow:"hidden", cursor:"pointer"}} onClick={handleMovieDetails}>
                            <Card.Img className='movie-img' style={{height:"90%"}} variant="top" src={`https://image.tmdb.org/t/p/w1280${poster_path}`} />
                            <Card.Body>
                                <Card.Text>
                                    {original_title}
                                </Card.Text>
                            </Card.Body>
                            <MovieCardOverview className='overview'>
                                <p>{overview}</p>
                            </MovieCardOverview>
                        </Card>
                    </>
                )
            })}
        </div>
    )
}

export default MovieCard;