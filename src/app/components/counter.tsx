"use client";
import { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";

const Counter = () => {
  const {isLoaded, userId, sessionId, getToken} = useAuth();

 
  console.log("counter commpnent loaded")
  const [count, setCount] = useState(0);

   if (!isLoaded || !userId) {
    return null;
  }
  return <button onClick={() => setCount(count + 1)}>count: {count}</button>;
};

export default Counter;
