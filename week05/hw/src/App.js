import "./App.css";
import Head from "./Head";
import GoodButton from "./GoodButton";
import CheerButton from "./CheerButton";
import Content from "./Content";
import Title from "./Title";

function App() {
  return (
    <>
      <Head />
      <Title />
      <figure>
        <img src="img/Herethon.jpg" height="300px" width="300px"></img>
        <img src="img/Herethon2.jpg" height="300px" width="250px"></img>
        <img src="img/Herethon3.jpg" height="300px" width="250px"></img>
      </figure>
      <div style={{ display: "flex" }}>
        <Content />
      </div>
      <hr />
      <div style={{ display: "flex" }}>
        <GoodButton />
        <CheerButton />
      </div>
    </>
  );
}

export default App;
