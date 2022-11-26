import { LOGIN, REGISTER, LOGOUT, DATAMOVIES, SEARCHMOVIE } from "../types/reduxTypes"

const initialStates = {
    email:"",
    password:"",
    loginInformation:false,
    user:{}, 
    dataMovies: {},
    searchMovie:""
}

const reduxReducer = (state = initialStates, action) => {
    switch (action.type) {
        case LOGIN :
            return {...state, 
                email:action.email, 
                password:action.password, 
                user:action.payload, 
                loginInformation:action.login}
        case REGISTER :
            return {...state, 
                email:action.email, 
                password:action.password, 
                user:action.payload, 
                loginInformation:false}

        case DATAMOVIES :
            return {...state, 
                dataMovies:action.datamovies}
        
        case SEARCHMOVIE :
            return {...state,
                searchMovie:action.search}

        case LOGOUT :
            return initialStates;

        default:
            return state;
    }
}

export default reduxReducer;