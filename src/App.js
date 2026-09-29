import React, { useState } from 'react';
import './App.css';
import Game from './components/Game';
import MainMenu from './components/MainMenu';

function App() {
  const [gameState, setGameState] = useState('menu'); // 'menu' or 'game'

  const startGame = () => {
    setGameState('game');
  };

  const backToMenu = () => {
    setGameState('menu');
  };

  return (
    <div className="App">
      {gameState === 'menu' && <MainMenu onStart={startGame} />}
      {gameState === 'game' && <Game onBackToMenu={backToMenu} />}
    </div>
  );
}

export default App;
