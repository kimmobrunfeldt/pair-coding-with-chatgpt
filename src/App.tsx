import * as React from "react";
import AddPlayers from "./AddPlayers";

import "./App.css";
import Game from "./Game";

interface AppState {
  gameState: "menu" | "started";
  players: string[];
}

class App extends React.Component<{}, AppState> {
  state = {
    gameState: "menu" as "menu" | "started",
    players: [],
  };

  handleAddPlayer = (playerName: string) => {
    this.setState((prevState) => ({
      players: [...prevState.players, playerName],
    }));
  };

  handleStartGame = () => {
    this.setState({ gameState: "started" });
  };

  render() {
    const { gameState, players } = this.state;
    return (
      <div className="app-container">
        <h1 className="game-title">Poker Game</h1>
        {gameState === "menu" && (
          <div className="menu-container">
            <AddPlayers onAddPlayer={this.handleAddPlayer} />
            <ul className="player-list">
              {players.map((player) => (
                <li key={player}>{player}</li>
              ))}
            </ul>
            <button className="start-game-button" onClick={this.handleStartGame}>
              Start Game
            </button>
          </div>
        )}
        {gameState === "started" && <Game players={players} />}
      </div>
    );
  }
}

export default App;