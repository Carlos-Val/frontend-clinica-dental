import {combineReducers} from 'redux';
import customerReducer from './customerReducer.js';
import appointmentsReducer from './appointmentsReducer';

const rootReducer = combineReducers({
    customerReducer,
    appointmentsReducer
});

export default rootReducer;