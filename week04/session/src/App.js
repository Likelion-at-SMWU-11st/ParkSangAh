import React from "react";
import Hello from "./Hello";
import Counter from "./Counter";
import MovieList from "./MovieList";

function App() {
  return (
    <>
      <Hello name="저는 상아입니다." color="blue" />
      <Counter />
      <MovieList />
    </>
  );
}

export default App;
