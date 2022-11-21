import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SearchMovie = () => {
    return (
        <div>
            <Box className='d-flex justify-content-center m-4' component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }}} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Search Movie" placeholder='Please enter a movie...' variant="outlined" margin='none' />
                <Button sx={{width:"5.5rem !important", height:"3rem", margin:"0.65rem 0rem !important"}} variant="contained">Search</Button>
            </Box>
            
        </div>
    )
}

export default SearchMovie;