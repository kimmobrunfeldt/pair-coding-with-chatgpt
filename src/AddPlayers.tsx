import * as React from "react";
import NamePrompt from "./NamePrompt";

interface AddPlayersProps {
  onAddPlayer: (playerName: string) => void;
}

const AddPlayers: React.FunctionComponent<AddPlayersProps> = (props) => {
  const [playerName, setPlayerName] = React.useState("");
  const [showNamePrompt, setShowNamePrompt] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

  const handleAddPlayer = () => {
    props.onAddPlayer(playerName);
    setPlayerName("");
    setShowNamePrompt(false);
  };

  const handleShowNamePrompt = () => {
    setShowNamePrompt(true);
  };

  const handleHideNamePrompt = () => {
    setShowNamePrompt(false);
  };

  return (
    <div>
      {showNamePrompt && (
        <NamePrompt
          value={playerName}
          onChange={handleChange}
          onSubmit={handleAddPlayer}
          onCancel={handleHideNamePrompt}
        />
      )}
      {!showNamePrompt && (
        <button onClick={handleShowNamePrompt}>Add Player</button>
      )}
    </div>
  );
};