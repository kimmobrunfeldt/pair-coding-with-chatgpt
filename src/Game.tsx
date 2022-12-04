import * as React from "react";

interface GameProps {
  players: string[];
}

interface GameState {
  deck: string[];
  hands: string[][];
  currentPlayer: number;
  status: "waiting" | "running" | "ended";
}

class Game extends React.Component<GameProps, GameState> {
  state = {
    deck: [],
    hands: [],
    currentPlayer: 0,
    status: "waiting" as "waiting" | "running" | "ended",
  } as GameState;

  componentDidMount() {
    this.initializeGame();
  }

  initializeGame = () => {
    const { players } = this.props;
    // Initialize deck of cards
    const deck: string[] = [];
    // Initialize hands for each player
    const hands: string[][] = [];

    for (const player of players) {
      hands.push([]);
    }

    this.setState({ deck, hands, status: "running" });
  };

  dealCards = () => {
    // Deal cards to each player
    const { deck, hands } = this.state;

    for (let i = 0; i < hands.length; i++) {
      // Draw two cards for each player
      for (let j = 0; j < 2; j++) {
        const card = deck.pop();
        if (card) {
          hands[i].push(card);
        }
      }
    }

    this.setState({ hands });
  };

  nextPlayer = () => {
    // Advance to next player
    const { currentPlayer } = this.state;
    this.setState({ currentPlayer: currentPlayer + 1 });
  };

  endGame = () => {
    this.setState({ status: "ended" });
  };

  render() {
    const { status, hands, currentPlayer } = this.state;
    return (
      <div>
        {status === "waiting" && <div>Waiting for game to start...</div>}
        {status === "running" && (
          <div>
            <div>Current Player: {this.props.players[currentPlayer]}</div>
            <button onClick={this.dealCards}>Deal Cards</button>
            <button onClick={this.nextPlayer}>Next Player</button>
            <button onClick={this.endGame}>End Game</button>
            <div>
              {this.props.players.map((player, i) => (
                <div key={player}>
                  <div>{player}</div>
                  <div>{hands[i].join(", ")}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        {status === "ended" && <div>Game ended</div>}
      </div>
    );
  }
}

export default Game;