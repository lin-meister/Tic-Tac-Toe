import { StyleSheet } from 'react-native'

SQUARE_SIZE = 100;

export default StyleSheet.create({
  background: {
    backgroundColor: '#2F4F4F',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    color: '#FFFFFF',
  },
  gameTitle: {
    fontSize: 50,
    padding: 25,
  },
  gameSubtitle: {
    fontSize: 25,
    textAlign: 'center',
  },
  selectPlayer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  status: {
    fontSize: 20,
    margin: 20,
    color: '#FFFFFF',
  },
  board: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row'
  },
  grid: {
    width: SQUARE_SIZE, 
    height: SQUARE_SIZE,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 40,
    padding: 20,
    color: '#FFFFFF',
  },
});