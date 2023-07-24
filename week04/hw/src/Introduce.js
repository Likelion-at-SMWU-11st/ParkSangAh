import React from "react";

function Introduce({ color, content }) {
  return (
    <>
      <div>
        <h1> 저번 실습에 이어 오늘 제가 추가할 내용은 </h1>
      </div>
      <div>
        <h1 style={{ color }}> {content} </h1>
      </div>
    </>
  );
}

export default Introduce;
