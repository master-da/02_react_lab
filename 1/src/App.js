import React, { useState } from 'react';

function App() {
  const [textInputs, setTextInputs] = useState([]);

  const handleAddTextInput = () => {
    setTextInputs([...textInputs, '']);
  };

  const handleRemoveTextInput = (index) => {
    const updatedTextInputs = [...textInputs];
    updatedTextInputs.splice(index, 1);
    setTextInputs(updatedTextInputs);
  };

  const handleInputChange = (index, event) => {
    const updatedTextInputs = [...textInputs];
    updatedTextInputs[index] = event.target.value;
    setTextInputs(updatedTextInputs);
  };

  return (
    <div>
      <button onClick={handleAddTextInput}>Add Text Box</button>
      {textInputs.map((textInput, index) => (
        <div key={index}>
          <input
            type="text"
            value={textInput}
            onChange={(event) => handleInputChange(index, event)}
          />
          <button onClick={() => handleRemoveTextInput(index)}>Remove</button>
        </div>
      ))}
      <div>count: {textInputs.length}</div>
    </div>
  );
}

export default App;
