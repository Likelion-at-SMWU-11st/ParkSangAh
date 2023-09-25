import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import BoardList from "./BoardList";
import CreateBoard from "./CreateBoard";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <h1>상아의 방명록</h1>
        </div>
        <div>
          <Link to="/">방명록 리스트</Link>
        </div>
        <div>
          <Link to="/create">방명록 작성</Link>
        </div>
        <Routes>
          <Route path="/" element={<BoardList />} />
          <Route path="/create" element={<CreateBoard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
