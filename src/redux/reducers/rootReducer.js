import {combineReducers} from 'redux';
import customerReducer from './customerReducer.js';
import appointmentsReducer from './appointmentsReducer';
import adminReducer from './adminReducer.js';

const rootReducer = combineReducers({
    customerReducer,
    appointmentsReducer,
    adminReducer
});

export default rootReducer;