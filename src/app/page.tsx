import React from "react";
import { Greet } from "./components/greet";
import Counter from "./components/counter";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
        alt="Example Wikimedia Image"
        width={500}
        height={300}
      />

      <Greet />
      <Counter />
    </div>
  );
};

export default page;
