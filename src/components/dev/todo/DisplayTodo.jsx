import { useState, useEffect } from "react";
import axios from "axios";
import UpdateTodo from "./UpdateTodo";
import TodoLists from "./TodoLists";
import CreateTodo from "./CreateTodo";
const EX = import.meta.env.VITE_EX;

export function DisplayTodo() {
  const [id, setId] = useState("");
  const [update, setUpdate] = useState(false);
  const [infoTodo, setInfoTodo] = useState([]);
  const [modal, setModal] = useState(false);
  const [refresh, setRefresh] = useState(0);

  useEffect(
    function () {
      axios
        .get(EX + "/api/todo")
        .then((res) => {
          setInfoTodo(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    [update, refresh]
  );

  const editHandler = (e) => {
    setId(e.target.name);
    setModal(true);
  };

  const updateHandler = () => {
    setUpdate(!update);
  };

  const deleteHandler = (e) => {
    axios.delete(EX + `/api/todo/${e.target.name}`);

    setInfoTodo((data) => {
      return data.filter((todo) => todo._id !== e.target.name);
    });
  };

  const closeHandler = () => {
    setId("");
    setModal(false);
  };

  function showCreateTodo() {
    document.getElementById("showTodo").style.display = "block";
  }

  function hideCreateTodo() {
    document.getElementById("showTodo").style.display = "none";
  }
   
  return (
    <section style={{ textAlign: "center", margin: "16px" }}>
      <h1>TODO Application</h1>
      <hr />
      <div style={{padding:"16px"}}>
      <button style={{fontSize:"22px"}} onClick={()=>setRefresh(refresh+1)}>🔄</button><br /><br />
      <button onClick={showCreateTodo} onDoubleClick={hideCreateTodo}>➕ Add New TODO</button><br />hide *onDoubleClick 
      </div>
      <div id="showTodo" style={{display:"none"}}>
        <CreateTodo/>
      </div>
      {modal ? (
        <section style={{padding:"16px"}}> 
          <div >
            <button onClick={closeHandler}>Close Update TODO</button><br /><br />
            <UpdateTodo
              _id={id}
              closeHandler={closeHandler}
              updateHandler={updateHandler}
            />
          </div>
        </section>
      ) : (
        ""
      )}
      <section style={{textAlign:"left"}}>
        <ol>
          {infoTodo.map((todoInfo, index) => (
            <TodoLists
              key={index}
              todoInfos={todoInfo}
              editHandler={editHandler}
              deleteHandler={deleteHandler}
            />
          ))}
        </ol>
      </section>
    </section>
  );
}

export default DisplayTodo;
