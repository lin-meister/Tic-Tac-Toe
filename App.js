import React, { Component } from 'react';
import { AppRegistry, View, Text, Picker, Button } from 'react-native';
import Board from './Board';
import styles from './MyStyles'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      xStarts: true,
      gameStarted: false,
    };
  }

  startGame = () => {
    this.setState({
      gameStarted: true
    });
  }

  setPlayer = (player) => {
    this.setState({
      xStarts: (player === 'X') ? true : false,
    });
  }

  render() {
    let gameStarted = this.state.gameStarted;
    let myView;

    if (gameStarted) {
      myView = (
        <Board xStarts={this.state.xStarts}/>
      );
    } else {
      myView = (
        <View>
          <Text style={[styles.welcomeText, styles.gameTitle]}>TIC TAC TOE</Text>
          <View>
            <Text style={[styles.welcomeText, styles.gameSubtitle]}>Play as:</Text>
            <Picker onValueChange={this.setPlayer}>
              <Picker.Item label="X" value = "x" color="#FFFFFF" />
              <Picker.Item label="O" value = "o" color="#FFFFFF" />
            </Picker>
          </View>
          <Button onPress={this.startGame} color="#FFFFFF" title={"Start"} />
        </View>
      );
    }
    return (
      <View style={styles.background}>
        {myView}
      </View>
    );
  }
};

// skip this line if using Create React Native App
AppRegistry.registerComponent('TicTacToe', () => App);