import * as React from "react";
import NamePrompt from "./NamePrompt";

interface AddPlayersProps {
  onAddPlayer: (playerName: string) => void;
}

const AddPlayers: React.FunctionComponent<AddPlayersProps> = (props) => {
  const [playerName, setPlayerName] = React.useState("");

  const handleNameChange = (playerName: string) => {
    setPlayerName(playerName);
  };

  const handleAddPlayer = () => {
    props.onAddPlayer(playerName);
    setPlayerName("");
  };

  return (
    <div>
      <NamePrompt
        initialName={playerName}
        onNameChange={handleNameChange}
      />
      <button onClick={handleAddPlayer} disabled={!playerName}>
        Add Player
      </button>
    </div>
  );
};

export default AddPlayers
