import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons  } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

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
  render() {
    const {
      temp,
      condition,
    } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <View style={styles.halfContainer}>
          <MaterialCommunityIcons size={96} name={'weather-cloudy'} color='white'/>
          {/*<MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color='white'/>*/}
          <Text style={styles.temp}>{temp}°</Text>
        </View>
        <View style={styles.halfContainer} />
      </View>
    )
  }
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  temp: {
    fontSize: 85,
    color: 'white'
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Weather;
