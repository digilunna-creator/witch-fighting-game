# 🧙‍♀️ Witch Fighting Game

An interactive 2D visual novel fight game where you play as a witch battling dark sorceresses using spells and melee combat!

## Features

- **Interactive Dialogue System**: Engage in story-driven conversations before battle
- **Turn-Based Combat**: Strategic fight mechanics with multiple action choices
- **Spell Casting**: Cast powerful spells like Fireball and Healing
- **Melee Combat**: Use close-range sword attacks
- **Health & Mana System**: Manage resources during battle
- **Mobile-Friendly**: Optimized for mobile devices
- **Beautiful UI**: Magical purple theme with smooth animations

## Game Mechanics

### Actions
- **⚔️ Slash**: Quick melee attack (10-25 damage)
- **🔥 Fireball**: Powerful spell attack (20-45 damage, 15 Mana)
- **✨ Heal**: Restore HP (20 HP, 10 Mana)
- **🛡️ Defend**: Reduce incoming damage

### Resources
- **Health (HP)**: Your life force. Reaches 0 = Defeat
- **Mana**: Energy required to cast spells. Regenerates between turns

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/digilunna-creator/witch-fighting-game.git
cd witch-fighting-game

# Install dependencies
npm install

# Start the development server
npm start
```

The game will open in your browser at `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── MainMenu.js          # Main menu screen
│   ├── Game.js              # Game state management
│   ├── DialogueBox.js       # Story dialogue system
│   ├── BattleScreen.js      # Main battle screen
│   ├── ActionMenu.js        # Combat actions selector
│   └── BattleLog.js         # Battle event log
├── App.js                   # Main app component
└── index.js                 # React entry point
```

## Future Enhancements

- [ ] Multiple enemy types and bosses
- [ ] Level progression system
- [ ] Equipment and items
- [ ] Advanced spell system
- [ ] Multiplayer battles
- [ ] Sound effects and music
- [ ] Save/Load game state
- [ ] Achievement system

## Technologies Used

- React.js
- CSS3 (with animations and gradients)
- JavaScript (ES6+)

## License

MIT License - feel free to use this project for learning or as a base for your own game!

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

---

Enjoy the game! 🎮✨
