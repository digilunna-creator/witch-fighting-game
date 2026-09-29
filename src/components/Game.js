import React, { useState } from 'react';
import './Game.css';
import BattleScreen from './BattleScreen';
import DialogueBox from './DialogueBox';

function Game({ onBackToMenu }) {
  const [gamePhase, setGamePhase] = useState('dialogue'); // 'dialogue' or 'battle'
  const [playerStats, setPlayerStats] = useState({
    health: 100,
    mana: 50,
    maxHealth: 100,
    maxMana: 50,
  });
  const [enemy, setEnemy] = useState({
    name: 'Dark Sorceress',
    health: 80,
    maxHealth: 80,
  });

  const startBattle = () => {
    setGamePhase('battle');
  };

  return (
    <div className="game">
      {gamePhase === 'dialogue' && (
        <DialogueBox onStartBattle={startBattle} />
      )}
      {gamePhase === 'battle' && (
        <BattleScreen
          playerStats={playerStats}
          setPlayerStats={setPlayerStats}
          enemy={enemy}
          setEnemy={setEnemy}
          onBackToMenu={onBackToMenu}
        />
      )}
    </div>
  );
}

export default Game;
