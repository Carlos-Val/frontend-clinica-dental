import {compose, applyMiddleware, createStore} from 'redux';
import { save, load } from "redux-localstorage-simple";
import rootReducer from './reducers/rootReducer';

const createStoreWithMiddleware = applyMiddleware(
	save({ state: ["datosCustomer"] })
)(createStore);

const store = createStoreWithMiddleware(
    rootReducer,
    load({
        preloadState : {
            customer: {}
        },
        states: ["datosCustomer"]
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
        trace: true,
    }) || compose

);

export default store;