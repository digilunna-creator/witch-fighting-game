import React from 'react';
import './MainMenu.css';

function MainMenu({ onStart }) {
  return (
    <div className="main-menu">
      <div className="menu-content">
        <h1 className="game-title">🧙‍♀️ Witch Combat</h1>
        <p className="subtitle">An Interactive Visual Novel Fight Game</p>
        <div className="menu-buttons">
          <button className="btn btn-primary" onClick={onStart}>
            Start Game
          </button>
          <button className="btn btn-secondary">
            How to Play
          </button>
          <button className="btn btn-secondary">
            Settings
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
