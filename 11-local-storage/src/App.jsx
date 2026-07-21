import React, { useState } from "react";
import axios from "axios";
function App() {
  localStorage.setItem("name", "John Doe");
  const [todos, setTodos] = useState([]);

  // Local storage has 4 methods: setItem(), getItem(), removeItem(), clear()
  // setItem() - adds data to local storage
  // getItem() - retrieves data from local storage
  // removeItem() - removes data from local storage
  // clear() - clears all data from local storage

  // How we store object and retrieve it from local storage
  // const user = {
  //   name: "John Doe",
  //   age: 30,
  //   email: "johndoe@example.com",
  // };
  // localStorage.setItem("user", JSON.stringify(user));
  // const retrievedUser = JSON.parse(localStorage.getItem("user"));
  // async function getData() {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response.json())
  //     .then((response) => setTodos(response));
  //   console.log(todos);
  // }

  async function getData() {
    await axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => setTodos(response.data))
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      {todos.map((todo, index) => {
        return <h3 key={index}>{todo.title}</h3>;
      })}
    </div>
  );
}

export default App;
