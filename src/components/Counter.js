import React, { useState } from "react";

const test = (num, setNumber) => {
  setNumber(num + 1);
};

const Counter = () => {
  const [number, setNumber] = useState(0); //비구조화 할당 useState는 배열을 반환한다
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => test(number, setNumber)}>+1</button>
      <button onClick={() => setNumber(number - 1)}>-1</button>
    </div>
  );
};

export default Counter;
