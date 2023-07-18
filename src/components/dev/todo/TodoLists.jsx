import React from "react";

const TodoLists = ({ todoInfos, editHandler, deleteHandler }) => {
  const { _id, title, description } = todoInfos;

  return (
    <li key={_id}>
      <div >
        <h2>@ {title}</h2>
        <h4 >: {description}</h4>
      </div>
      <div >
        <button  name={_id} onClick={editHandler}>
          🖊️
        </button>
        <button  name={_id} onClick={deleteHandler}>
          🗑️
        </button>
      </div>
      <hr />
    </li>
  );
};

export default TodoLists;
