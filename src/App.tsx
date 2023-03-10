import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/Routing";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
