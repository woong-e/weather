import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Location from 'expo-location';
import { MaterialCommunityIcons  } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { Tabs } from '@ant-design/react-native';

import actions from '../store/weather/actions';
import {indexSelector} from '../store/weather/selectors';
import {getCondition} from "../helpers/utility";

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
    const description = weather && weather[0] && weather[0].description;
    const tabs = [
      { title: '시간별 날씨조회' },
      { title: '일자별 날씨조회' },
    ];

    return (
      <>
        <View style={styles.container}>
          <StatusBar barStyle='light-content' />
          <MaterialCommunityIcons size={150} name={getCondition(condition).iconName} />
          <Text style={styles.temp}>{Math.floor(temp)}°</Text>
          <Text style={styles.location}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.minMaxTemp}>최저 {Math.floor(temp_min)}°/최고 {Math.floor(temp_max)}°</Text>
        </View>
        <View style={styles.list}>
          <Tabs
            tabs={tabs}
          >
            <View>
              <Text>Content of First Tab</Text>
            </View>
            <View >
              <Text>Content of Second Tab</Text>
            </View>
          </Tabs>

        </View>
      </>
    )
  }
}

Weather.propTypes = {
  form: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  temp: {
    marginBottom: 10,
    fontSize: 85,
    color: 'black'
  },
  location: {
    marginBottom: 10,
    fontSize: 40,
    color: 'black'
  },
  description: {
    marginBottom: 10,
    fontSize: 16,
    color: 'black'
  },
  minMaxTemp: {
    fontSize: 16,
    color: 'black'
  },
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
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
