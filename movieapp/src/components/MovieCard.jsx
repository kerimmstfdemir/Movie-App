import { margin } from '@mui/system';
import Card from 'react-bootstrap/Card';

const MovieCard = ({ dataMovies:{data} }) => {
    console.log(data);
    return (
        <div className=" text-center d-flex flex-row justify-content-center flex-wrap" style={{ gap:"1rem"}}>
            {data?.results.map((result) => {
                const { backdrop_path, original_title, overview } = result
                return (
                    <>
                        <Card style={{width:"25rem", height:"28rem"}}>
                            <Card.Img style={{height:"65%"}} variant="top" src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} />
                            <Card.Body>
                                <Card.Text>
                                    {original_title}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </>
                )
            })}
        </div>
    )
}

export default MovieCard;