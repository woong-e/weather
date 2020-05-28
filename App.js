import React, {Component} from 'react';
import { Provider } from 'react-redux';

import {store} from './store/store';
import Weather from "./views/Wheater";

class App extends Component {
  //
  render() {
    return (
      <Provider store={store}>
        <Weather />
      </Provider>
    )
  }
}

export default App;
