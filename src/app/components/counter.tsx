"use client";
import { useState } from "react";

const Counter = () => {
  console.log("counter commpnent loaded")
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>count: {count}</button>;
};

export default Counter;
