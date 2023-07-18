import { useState } from "react";
import axios from "axios";
const EX = import.meta.env.VITE_EX 

function UpdateTodo({ _id, closeHandler, updateHandler }) {
  const [todoInfo, setTodoInfo] = useState({ title: "", description: "" });

  const handleChange = (e) => {
    setTodoInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .put(EX+`/api/todo/${_id}`, todoInfo)
      .then((res) => {
        setTodoInfo({ title: "", description: "" });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form
      className="form-container"
      onSubmit={(e) => {
        submitHandler(e);
        updateHandler();
        closeHandler();
      }}
    >
      <label htmlFor="title" className="label">
        Todo Title
      </label>
      <input
        type="text"
        name="title"
        className="input"
        onChange={handleChange}
      />
      <label htmlFor="description" className="label">
        Todo Description
      </label>
      <input
        type="textarea"
        name="description"
        className="input"
        onChange={handleChange}
      />
      <button type="submit" className="todo-btn">
        ➕ Update
      </button><hr />
    </form>
  );
}
export default UpdateTodo;
