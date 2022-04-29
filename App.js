import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';


export default function App() {

  const [inputNumber, setInputNumbr] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);


  function pickedNumberHandler(pickedNumber) {
    setInputNumbr(pickedNumber);
    setGameIsOver(false)
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true)
    setGuessRounds(numberOfRounds)
  }
  function startNewGameHandler() {
    setInputNumbr(null);
    setGuessRounds(0)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  
  if (inputNumber) {
    screen = <GameScreen userInputValue={inputNumber} onGameOver={gameOverHandler} />
  }
  if (gameIsOver && inputNumber) {
    screen = <GameOverScreen
      userValue={inputNumber}
      roundsNumber={guessRounds}
      onStartNewGame={startNewGameHandler}
    />
  }


  return (
      <LinearGradient colors={['purple', 'pink']} style={styles.rootContainer}>
          {screen}
      </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
