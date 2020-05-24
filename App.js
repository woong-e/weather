import React, {Component} from 'react';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';
import Loading from './Loading';
import Weather from "./Wheater";

const API_KEY = 'e0cced59be3a7f8c74c897fc8114ed13';

export default class App extends Component {
  //
  state = {
    isLoading: true,
    temp: 0,
    condition:'',
  };

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: {temp},
        weather
      }
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    this.setState({
      temp,
      condition: weather[0].main,
    })
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();

      this.getWeather(latitude, longitude);
      this.setState({isLoading: false});
    } catch {
      Alert.alert("can't find toy.", "so Sad");
    }

  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}
