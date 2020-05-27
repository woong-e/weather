/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {expo} from './app.json';

const {name} = expo;
AppRegistry.registerComponent(name, () => App);
