import {LOGIN, LOGOUT} from '../types/adminTypes.js';

const initialState = {
    admin: {}
};

const adminReducer = (state = initialState, action) =>{
    switch(action.type){
        case LOGIN :
            return{
                ...state,
                admin: action.payload
            }
        case LOGOUT :
            return{
                ...state,
                admin: action.payload
            }
       
        default:
            return state
    }
};

export default adminReducer;