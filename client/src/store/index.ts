import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga'
import {reducer} from "../components/home/duck/redux";
import rootSaga from '../components/home/duck/sagas'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;


