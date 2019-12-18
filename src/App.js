import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login";
import PetsButton from "./components/PetsButton";

function App() {
  return (
    <div>
      <Login />
      <PetsButton />
    </div>
  );
}

export default App;
