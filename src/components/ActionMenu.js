import React from 'react';
import './ActionMenu.css';

function ActionMenu({ onAction }) {
  const actions = [
    { id: 'slash', label: '⚔️ Slash', description: 'Quick melee attack' },
    { id: 'fireball', label: '🔥 Fireball', description: 'Powerful spell (15 Mana)' },
    { id: 'heal', label: '✨ Heal', description: 'Restore HP (10 Mana)' },
    { id: 'defend', label: '🛡️ Defend', description: 'Reduce incoming damage' }
  ];

  return (
    <div className="action-menu">
      <p className="menu-title">Choose your action:</p>
      <div className="action-buttons">
        {actions.map(action => (
          <button
            key={action.id}
            className="action-btn"
            onClick={() => onAction(action.id)}
          >
            <span className="action-label">{action.label}</span>
            <span className="action-description">{action.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ActionMenu;
