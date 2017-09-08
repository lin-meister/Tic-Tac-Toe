import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import styles from './MyStyles'

class Grid extends Component {
  static propTypes = {
    value: React.PropTypes.string,
    onPress: React.PropTypes.func,
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View style={styles.grid}>
          <Text style={styles.buttonText}>{this.props.value}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

export default Grid;