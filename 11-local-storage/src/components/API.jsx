import React, { useState } from "react";
import axios from "axios";
const API = () => {
  async function getData() {
    await axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => setTodos(response.data))
      .catch((error) => console.log(error));
  }
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      {todos.map((todo, index) => {
        return <h3 key={index}>{todo.title}</h3>;
      })}
    </div>
  );
};

export default API;
