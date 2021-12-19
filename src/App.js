import React, { useState } from "react";
import InputArea from "./InputArea";
import TodoItems from "./TodoItems";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);

  const addItems = (item) => {
    setItems((prevValue) => {
      return [...prevValue, item];
    });
  };

  const deleteItem = (id) => {
    setItems((prevValue) => {
      let tempArr = prevValue.filter((item, index) => {
        return index !== id;
      });
      return tempArr;
    });
  };

  return (
    <div className="app">
      <h1>TO-DO List</h1>
      <InputArea addItems={addItems} />
      <div className="itemsContainer">
        {items.length === 0 ? (
          <div className="empty"  >
            <i class="fas fa-ghost"></i>
            <h3>nothing!</h3>
          </div>
        ) : (
          items.map((item, index) => {
            return (
              <TodoItems
                itemtext={item}
                key={index}
                deleteItem={() => deleteItem(index)}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default App;
