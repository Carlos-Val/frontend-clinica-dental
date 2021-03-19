import {applyMiddleware, createStore} from 'redux';
import { save, load } from "redux-localstorage-simple";
import reducer from './reducers/rootReducer';

const createStoreWithMiddleware = applyMiddleware(
	save({ state: ["datosCustomer"] })
)(createStore);

const store = createStoreWithMiddleware(
    reducer,
    load({
        preloadState : {
            datosCustomer : ''
        },
        states: ["datosCustomer"]
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
        trace: true,
    })
);

export default store;