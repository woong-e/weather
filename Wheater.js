import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Location from 'expo-location';
import { MaterialCommunityIcons  } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import actions from './store/weather/actions';
import {indexSelector} from './store/weather/selectors';


const weatherOptions = {
  Haze: {
    iconName: 'weather-hazy',
    gradient: ['#4da0b0', '#d39d38'],
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#4da0b0', '#d39d38'],
  },
  Thunderstorm: {
    iconName: 'weather-lightning',
    gradient: ['#4da0b0', '#d39d38'],
  },
  Rain: {
    iconName: 'weather-pouring',
    gradient: ['#4da0b0', '#d39d38'],
  },
  Atmosphere: {
    iconName: 'weather-rainy',
    gradient: ['#4da0b0', '#d39d38'],
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#4da0b0', '#d39d38'],
  },
  Mist: {
    iconName: 'weather-fog',
    gradient: ['#4da0b0', '#d39d38'],
  },
  Dust: {
    iconName: 'cloud',
    gradient: ['#4da0b0', '#d39d38'],
  },
}

class Weather extends Component {
  //
  componentDidMount() {
    this.getLocation();
  }

  getLocation = async () => {
    await Location.requestPermissionsAsync();
    const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
    await this.props.actions.fetch(latitude, longitude);
  };

  render() {
    const {
      form: {
        main: {
          temp,
          temp_max,
          temp_min,
        },
        name,
        weather,
      },
    } = this.props;

    const condition = weather && weather[0] && weather[0].main;

    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color='white'/>
        <Text style={styles.temp}>{temp}°</Text>
        <Text style={styles.location}>{name}</Text>
        <Text style={styles.minMaxTemp}>최저기온: {temp_min}°</Text>
        <Text style={styles.minMaxTemp}>최고기온: {temp_max}°</Text>
      </View>
    )
  }
}

Weather.propTypes = {
  form: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  location: {
    marginBottom: 20,
    fontSize: 40,
    color: 'black'
  },
  temp: {
    marginBottom: 20,
    fontSize: 85,
    color: 'black'
  },
  minMaxTemp: {
    fontSize: 16,
    color: 'black'
  },
});

const stateToProps = (state) => ({
  form: indexSelector.form(state),
});

const dispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps,
)(Weather);
