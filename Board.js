import React, { Component } from 'react';
import { AppRegistry, 
  Alert, 
  View, 
  TouchableWithoutFeedback, 
  Text, 
  Button } from 'react-native';
import Grid from './Grid';
import styles from './MyStyles'

class Board extends Component {
  static propTypes = {
    xStarts: React.PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      grids: Array(9).fill(null),
      xIsNext: this.props.xStarts ? true : false,
    };
  }

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  winnerExists(grids) {
    const lines = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ];

    let fullRows = 0;
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (grids[a] && grids[b] && grids[c]) {
        fullRows++;
      }
      if (grids[a] && grids[a] === grids[b] && grids[a] === grids[c]) {
        return grids[a];
      }
    }
    return (fullRows === lines.length) ? 'T' : null;
  }

  handlePress(i) {
    const grids = this.state.grids.slice();
    if (this.winnerExists(grids) || grids[i]) {
      return;
    }
    grids[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      grids: grids,
      xIsNext: !this.state.xIsNext,
    });
  }

  restart(grids) {
    const emptyGrid = this.state.grids.slice();
    for (let i = 0; i < emptyGrid.length; i++) {
      emptyGrid[i] = '';
    }
    this.setState({
      grids: emptyGrid,
      xIsNext: false,
    });
  }

  renderGrid(i) {
    return (
      <Grid value={this.state.grids[i]} onPress={() => this.handlePress(i)} />
    );
  }

  renderRestartButton() {
    let winner = this.winnerExists(this.state.grids);
    if (!winner) {
      return null;
    }

    return (
      <Button title="Restart" color="#FFFFFF" onPress={() => this.restart(this.state.grids)} />
    );
  }

  renderBoard() {
    let winner = this.winnerExists(this.state.grids);
    let status = 'Next player: ';
    switch(winner) {
      case null:
        status += this.state.xIsNext ? 'X' : 'O';  
      break;
      case 'T':
        status = 'Tie';
      break;
      default:
        status = winner + ' won!';
      break;
    }
    
    return (
      <View className='board' style={styles.board} >
        <Text style={styles.status} >{status}</Text>
        <View className='row' style={styles.row}>
          {this.renderGrid(1)}{this.renderGrid(2)}{this.renderGrid(3)}
        </View>
        <View className='row' style={styles.row}>
          {this.renderGrid(4)}{this.renderGrid(5)}{this.renderGrid(6)}
        </View>
        <View className='row' style={styles.row}>
          {this.renderGrid(7)}{this.renderGrid(8)}{this.renderGrid(9)}
        </View>

        <View height={40} margin={10}>
          {this.renderRestartButton()}
        </View>
      </View>
    ); 
  }
  
  render() {
    return (
      this.renderBoard()
    );
  }
};

export default Board;