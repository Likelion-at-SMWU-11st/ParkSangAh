import { useState } from "react";

const Counter = () => {
  const [state, setState] = useState(0);

  return (
    <div>
      <h1>추천 수 : {state}</h1>
      <button onClick={() => setState(state + 1)}>1씩 증가</button>
    </div>
  );
};

export default Counter;
