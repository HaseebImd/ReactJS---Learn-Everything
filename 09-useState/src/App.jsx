import React, { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted");
    console.log();
    settitle(e.target.value);
  }

  return (
    <div>
      <h2>{title}</h2>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
