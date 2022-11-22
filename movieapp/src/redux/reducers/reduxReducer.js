import { LOGIN, REGISTER, LOGOUT } from "../types/reduxTypes"

const initialStates = {
    email:"",
    password:"",
    loginInformation:false,
    user:{}
}

const reduxReducer = (state = initialStates, action) => {
    switch (action.type) {
        case LOGIN :
            return {...state, email:action.email, password:action.password, user:action.payload, loginInformation:true}
        case REGISTER :
            return {...state, email:action.email, password:action.password, user:action.payload, loginInformation:false}
        case LOGOUT :
            return initialStates;

        default:
            return state;
    }
}

export default reduxReducer;