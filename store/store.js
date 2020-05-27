import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducers from "./reducers";
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];

const store = createStore(
  // combine reducers
  combineReducers({
    ...reducers,
  }),
  compose(applyMiddleware(...middlewares))
);

sagaMiddleware.run(sagas);

export {
  store
};
