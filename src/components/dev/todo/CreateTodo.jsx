import { useState } from "react";
import axios from "axios";
const EX = import.meta.env.VITE_EX 

const CreateTodo = () => {
  const [todoInfo, setTodoInfo] = useState({ title: "", description: "" });

  function handleChange(e) {
    setTodoInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('ok')

    axios
      .post(EX+"/api/todo/", todoInfo)
      .then((res) => {
        setTodoInfo({ title: "", description: "" });
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log("Error couldn't create TODO");
        console.log(err);
      });
  }

  return (
    <section style={{textAlign:"center", margin:"16px"}}>
      <section >
        <form onSubmit={handleSubmit}  noValidate>
          <label  htmlFor="title">
            TODO Title
          </label>
          <input
            type="text"
            name="title"
            value={todoInfo.title}
            onChange={handleChange}
            
          />
          <label  htmlFor="description">
            TODO Description
          </label>
          <input
            type="textarea"
            name="description"
            value={todoInfo.description}
            onChange={handleChange}
          />
          <button type="submit" >
            ➕  Create TODO
          </button><hr />
        </form>
      </section>
    </section>
  );
};

export default CreateTodo;
