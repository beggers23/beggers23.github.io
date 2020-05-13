import React from "react";
import "./App.css";

const App = () => {
  const fetchData = async () => {
    const req = await fetch(`https://eggers-dev.herokuapp.com/jobs`);
    const response = await req.json();
  };
  fetchData();
  return (
    <div className="App">
      <h1>HELLO WORLD</h1>
      <p>In progress</p>
    </div>
  );
};

export default App;
