import React, { useEffect, useState } from "react";
import axios from "axios";

const SongList = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/songs")
      .then((response) => {
        setSongs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>노래 리스트</h1>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <h2>{song.title}</h2>
            <p>{song.lylic}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
