import React, { useState } from "react";

const InputArea = ({ addItems }) => {
  const [inputText, setInputText] = useState("");
  const handleChange = (event) => {
    setInputText(event.target.value);
  };
  const addItem = () => {
    if (inputText !== "") {
      addItems(inputText);
      return setInputText("");
    }
    alert("please enter currect value");
  };

  return (
    <div className="inputField">
      <input
        type="text"
        placeholder="what you want to do "
        onChange={handleChange}
        value={inputText}
        onKeyUp={(e) => e.keyCode === 13 && addItem()}
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default InputArea;
