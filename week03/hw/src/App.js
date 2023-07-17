import "./App.css";
import Page1 from "./Page1";
import Page2 from "./Page2";

function App() {
  const bool = true;

  return (
    <>
      <h2>여름에 꼭 할 일!</h2>
      {bool === true ? <Page1 /> : <Page2 />}
    </>
  );
}

export default App;
