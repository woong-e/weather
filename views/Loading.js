import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Loading extends Component {
  //
  render() {
    const { animating } = this.props;
    return (
      <View style={styles.container}>
        <Text styles={styles.text}>Getting the fucking weather</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: '#fdf6aa'
  },
  text: {
    color: '#2c2c2c',
    fontSize: 48
  }
});

export default Loading;
