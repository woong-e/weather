import {Map} from 'immutable';
import {combineReducers} from "redux";

import actions from './actions';

const initData = {
  main: {},
  name: '',
  weather: [],
}

const initIndexState = Map({
  form: Map().merge(initData),
  isLoading: true,
});

export function reducers(state = initIndexState, action) {
  //
  if (action.type === actions.FETCH_SUCCESS) {
    return state.set('form', Map().merge(action.payload));
  }

  return state;
}

export default combineReducers({
  index: reducers,
})
