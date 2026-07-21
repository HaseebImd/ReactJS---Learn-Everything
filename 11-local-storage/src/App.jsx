import API from "./components/API";
import USEEffect from "./components/USEEffect";

function App() {
  localStorage.setItem("name", "John Doe");

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

  return (
    <div>
      {/* <API /> */}
      <USEEffect />
    </div>
  );
}

export default App;
