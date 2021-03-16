import {LOGIN, LOGOUT} from '../types/customerTypes.js';

const initialState = {
    customer: {}
};

const customerReducer = (state = initialState, action) =>{
    switch(action.type){
        case LOGIN :
            return{
                ...state,
                customer: action.payload
            }
        case LOGOUT :
            return{
                ...state,
                customer : action.payload
            }
        default:
            return state
    }
};

export default customerReducer;