import React, { useState } from 'react';
import AddPlayers, { PlayerList } from './AddPlayers';

// Define the type for the game state
type GameState = 'lobby' | 'playing';

// Define the type for the menu input state
type MenuInputState = 'addPlayers' | 'startGame';

// Define the props for the App component
interface AppProps {
  // The initial value of the game state
  initialGameState: GameState;
}

export default function App(props: AppProps) {
  // Declare a new state variable for the game state, with an initial value of 'lobby'
  const [gameState, setGameState] = useState<GameState>(props.initialGameState);
  // Declare a new state variable for the menu input state, with an initial value of 'addPlayers'
  const [menuInputState, setMenuInputState] = useState<MenuInputState>('addPlayers');
  // Declare a new state variable for the player list, with an empty initial value
  const [players, setPlayers] = useState<PlayerList>([]);

  // This function is called when the menu input state changes
  function handleMenuInputStateChange(menuInputState: MenuInputState) {
    // Update the menu input state state variable
    setMenuInputState(menuInputState);
  }

  // This function is called when the player list changes
  function handlePlayerListChange(players: PlayerList) {
    // Update the player list state variable
    setPlayers(players);
  }

  // This function is called when the start game button is clicked
  function handleStartGame() {
    // Update the game state state variable
    setGameState('playing');
  }
  return (
    <div>
      {gameState === 'lobby' && (
        <div>
          {menuInputState === 'addPlayers' && (
            <AddPlayers
              initialPlayers={players}
              players={players}
              onPlayerListChange={handlePlayerListChange}
            />
          )}
          {menuInputState === 'startGame' && (
            <button onClick={handleStartGame}>Start Game</button>
          )}
        </div>
      )}
      {gameState === 'playing' && (
        <div>
          <h1>Playing Poker</h1>
          <p>Players:</p>
          <ul>
            {players.map((player, index) => (
              <li key={index}>{player}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
