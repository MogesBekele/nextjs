import React from "react";
import { Greet } from "./components/greet";
import Counter from "./components/counter";

const page = () => {
  return (
    <div>
      <Greet />
      <Counter />
    </div>
  );
};

export default page;
