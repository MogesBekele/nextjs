import React from "react";
import { Greet } from "./components/greet";
import Counter from "./components/counter";
import Navigation from "./components/navigation";

const page = () => {
  return (
    <div>
      <Navigation />

      <Greet />
      <Counter />
    </div>
  );
};

export default page;
