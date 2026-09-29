import React, { useState } from 'react';
import './DialogueBox.css';

function DialogueBox({ onStartBattle }) {
  const [dialogueIndex, setDialogueIndex] = useState(0);

  const dialogues = [
    {
      character: '🧙‍♀️ You',
      text: 'I sense dark magic nearby... I must investigate this disturbance.'
    },
    {
      character: '🌙 Dark Sorceress',
      text: 'How dare you enter my domain, little witch! Prepare yourself!'
    },
    {
      character: '🧙‍♀️ You',
      text: 'I won\'t let your darkness consume this land! Let\'s settle this!'
    }
  ];

  const handleNextDialogue = () => {
    if (dialogueIndex < dialogues.length - 1) {
      setDialogueIndex(dialogueIndex + 1);
    } else {
      onStartBattle();
    }
  };

  const currentDialogue = dialogues[dialogueIndex];

  return (
    <div className="dialogue-container">
      <div className="game-scene">
        <div className="scene-visual">
          <div className="witch">🧙‍♀️</div>
          <div className="vs">VS</div>
          <div className="enemy">🌙</div>
        </div>
      </div>
      <div className="dialogue-box">
        <div className="dialogue-character">{currentDialogue.character}</div>
        <div className="dialogue-text">{currentDialogue.text}</div>
        <button className="dialogue-next" onClick={handleNextDialogue}>
          {dialogueIndex === dialogues.length - 1 ? 'Begin Battle!' : 'Next'}
        </button>
      </div>
    </div>
  );
}

export default DialogueBox;
