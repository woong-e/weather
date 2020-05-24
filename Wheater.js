import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';

class Weather extends Component {
  //
  render() {
    const {
      temp,
      condition,
    } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{temp}</Text>
        <Text style={styles.text}>{condition}</Text>
      </View>
    )
  }
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Atmosphere',
    'Clear',
    'Clouds',
    'Haze',
    'Mist',
    'Dust',
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 100
  }
});

export default Weather;