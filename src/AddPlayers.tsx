import React from 'react';
import NamePrompt from './NamePrompt';

// Define the type for the name state variable
export type NameState = string;

// Define the type for the player list
export type PlayerList = NameState[];

// Define the props for the AddPlayers component
interface AddPlayersProps {
  // The initial value of the player list
  initialPlayers: PlayerList;
  // The current value of the player list
  players: PlayerList;
  // The callback function to call when the player list changes
  onPlayerListChange: (players: PlayerList) => void;
}

// Define the event type for the input field
interface ChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

export default function AddPlayers(props: AddPlayersProps) {
  // This function is called when the name changes
  function handleNameChange(name: NameState) {
    // Update the player list state variable with the current input value
    props.onPlayerListChange([...props.players, name]);
  }

  return (
    <div>
      <h1>Add Players</h1>
      <NamePrompt initialName="" onNameChange={handleNameChange} />
      <ul>
        {props.players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}