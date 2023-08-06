import React from "react";
import { Routes, Route } from "react-router-dom";
import Menubar from "./pages/Menubar";
import Counter from "./pages/Counter";
import Hello from "./pages/Hello";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menubar />}>
        <Route path="/Hello" element={<Hello />}></Route>
        <Route path="/Counter" element={<Counter />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
