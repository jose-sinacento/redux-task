import React, { useState } from "react";
import InputTask from "./components/InputTask";
import { Tasks } from "./components/Tasks";

const App = () => {
  return (
    <div className="App">
      <InputTask />
      <Tasks />
    </div>
  );
};

export default App;