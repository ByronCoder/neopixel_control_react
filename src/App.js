import React, { Suspense } from "react";
import "./App.css";
import ButtonList from "./components/ButtonList";

function App() {
  return (
    <div>
      <h2 className="appTitle">Neopixel Control Test 123</h2>
      <ButtonList />
    </div>
  );
}

export default App;
