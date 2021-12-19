import React from "react";

const TodoItems = ({ itemtext, deleteItem }) => {
  return (
    <div className="todoItem">
      <p>{itemtext}</p>
      <i class="fas fa-trash" onClick={deleteItem}></i>
    </div>
  );
};

export default TodoItems;
