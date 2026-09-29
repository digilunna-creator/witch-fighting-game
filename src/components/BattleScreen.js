import React, { useState } from 'react';
import './BattleScreen.css';
import ActionMenu from './ActionMenu';
import BattleLog from './BattleLog';

function BattleScreen({
  playerStats,
  setPlayerStats,
  enemy,
  setEnemy,
  onBackToMenu
}) {
  const [battleLog, setBattleLog] = useState([]);
  const [battleOver, setBattleOver] = useState(false);
  const [playerWon, setPlayerWon] = useState(false);

  const handleAction = (action) => {
    let damage = 0;
    let manaCost = 0;
    let logMessage = '';

    if (action === 'slash') {
      damage = Math.floor(Math.random() * 15) + 10;
      logMessage = `⚔️ You slash the enemy for ${damage} damage!`;
    } else if (action === 'fireball') {
      manaCost = 15;
      if (playerStats.mana < manaCost) {
        logMessage = '❌ Not enough mana!';
        setBattleLog([...battleLog, logMessage]);
        return;
      }
      damage = Math.floor(Math.random() * 25) + 20;
      logMessage = `🔥 You cast Fireball for ${damage} damage!`;
      setPlayerStats({
        ...playerStats,
        mana: playerStats.mana - manaCost
      });
    } else if (action === 'heal') {
      manaCost = 10;
      if (playerStats.mana < manaCost) {
        logMessage = '❌ Not enough mana!';
        setBattleLog([...battleLog, logMessage]);
        return;
      }
      const healAmount = 20;
      setPlayerStats({
        ...playerStats,
        mana: playerStats.mana - manaCost,
        health: Math.min(playerStats.health + healAmount, playerStats.maxHealth)
      });
      logMessage = `✨ You heal yourself for ${healAmount} HP!`;
    }

    // Update enemy health
    const newEnemyHealth = Math.max(enemy.health - damage, 0);
    setEnemy({ ...enemy, health: newEnemyHealth });

    const newLog = [...battleLog, logMessage];
    setBattleLog(newLog);

    // Check if battle is over
    if (newEnemyHealth <= 0) {
      setBattleOver(true);
      setPlayerWon(true);
      setBattleLog([...newLog, '🎉 Victory! You have defeated the Dark Sorceress!']);
      return;
    }

    // Enemy turn
    setTimeout(() => {
      const enemyDamage = Math.floor(Math.random() * 12) + 8;
      const newPlayerHealth = Math.max(playerStats.health - enemyDamage, 0);
      setPlayerStats({ ...playerStats, health: newPlayerHealth });

      const enemyLogMessage = `💀 Dark Sorceress attacks for ${enemyDamage} damage!`;
      const updatedLog = [...newLog, enemyLogMessage];
      setBattleLog(updatedLog);

      if (newPlayerHealth <= 0) {
        setBattleOver(true);
        setPlayerWon(false);
        setBattleLog([...updatedLog, '💔 Defeat... You have fallen.']);
      }
    }, 500);
  };

  return (
    <div className="battle-screen">
      <div className="battle-header">
        <h2>Battle</h2>
      </div>

      <div className="battle-arena">
        <div className="character-stats player-stats">
          <div className="character-visual">🧙‍♀️</div>
          <div className="stats-info">
            <h3>You</h3>
            <div className="health-bar">
              <div
                className="health-fill"
                style={{
                  width: `${(playerStats.health / playerStats.maxHealth) * 100}%`
                }}
              ></div>
            </div>
            <p>{playerStats.health}/{playerStats.maxHealth} HP</p>
            <div className="mana-bar">
              <div
                className="mana-fill"
                style={{
                  width: `${(playerStats.mana / playerStats.maxMana) * 100}%`
                }}
              ></div>
            </div>
            <p>{playerStats.mana}/{playerStats.maxMana} Mana</p>
          </div>
        </div>

        <div className="character-stats enemy-stats">
          <div className="character-visual">🌙</div>
          <div className="stats-info">
            <h3>{enemy.name}</h3>
            <div className="health-bar">
              <div
                className="health-fill"
                style={{
                  width: `${(enemy.health / enemy.maxHealth) * 100}%`
                }}
              ></div>
            </div>
            <p>{enemy.health}/{enemy.maxHealth} HP</p>
          </div>
        </div>
      </div>

      <BattleLog battleLog={battleLog} />

      {!battleOver ? (
        <ActionMenu onAction={handleAction} />
      ) : (
        <div className="battle-end">
          <button className="btn-menu" onClick={onBackToMenu}>
            Back to Menu
          </button>
        </div>
      )}
    </div>
  );
}

export default BattleScreen;
