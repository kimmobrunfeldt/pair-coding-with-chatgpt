import React from 'react';

// Define the type for the name state variable
type NameState = string;

// Define the props for the NamePrompt component
interface NamePromptProps {
  // The initial value of the name state variable
  initialName: NameState;
  // The callback function to call when the name changes
  onNameChange: (name: NameState) => void;
}

// Define the event type for the input field
interface ChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

export default function NamePrompt(props: NamePromptProps) {
  // This function is called when the input field changes
  function handleChange(event: ChangeEvent) {
    // Call the onNameChange callback function
    props.onNameChange(event.target.value);
  }

  return (
    <div>
      <label>Name:</label>
      <input
        type="text"
        value={props.initialName}
        onChange={handleChange}
        style={{
          width: '200px',
          padding: '12px 20px',
          margin: '8px 0',
          boxSizing: 'border-box',
          border: '2px solid #ccc',
          borderRadius: '4px',
        }}
      />
    </div>
  );
}