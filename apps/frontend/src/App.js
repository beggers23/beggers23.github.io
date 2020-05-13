import React, { useState, useEffect } from "react";
import "./App.css";

import { getData } from "utils/requests";

function App() {
  const [title, setTitle] = useState("");
  useEffect(() => {
    const requestTitle = async () => {
      const res = await getData("start");
      setTitle(res.title);
    };
    requestTitle();
  }, []);

  return (
    <div className="App">
      <h1>{title}</h1>
    </div>
  );
}

export default App;
