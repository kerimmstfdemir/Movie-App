import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { SEARCHMOVIE } from '../redux/types/reduxTypes';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchMovie = ({ searchMovies, pageNumber, setPageNumber }) => {
    const dispatch = useDispatch();
    const loginInformation = useSelector((state) => state.loginInformation)
    const searchMovie = useSelector((state) => state.searchMovie)

    const searchBar = (e) => {
        if(loginInformation){
            dispatch({type:SEARCHMOVIE, search:e.target.value})
            searchMovie && (pageNumber === 1 ? searchMovies() : setPageNumber(1))
        }else{
            alert("Please log in to search movie.")
        }

    }
    
    return (
        <div>
            <Box className='d-flex justify-content-center m-4' component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }}} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Search Movie" placeholder='Enter a movie' 
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                       ),
                    }}
                variant="outlined" margin='none' onChange={searchBar} />
                
            </Box>
            
        </div>
    )
}

export default SearchMovie;