import React from "react";
import Introduce from "./Introduce";
import Counter from "./Counter";
import SongList from "./SongList";
import MovieList from "./MovieList";

function App() {
  return (
    <>
      <Introduce content="제가 좋아하는 여름 노래입니다!" color="skyblue" />
      <Counter />
      <hr></hr>
      <SongList />
      <hr></hr>
      <MovieList />
    </>
  );
}

export default App;
