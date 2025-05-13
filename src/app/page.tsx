import React from "react";
import { Greet } from "./components/greet";
import Counter from "./components/counter";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Image 
        src="/https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw3R3JIhk9lFT1kFvoLwlGXd&ust=1747232565638000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKihotfSoI0DFQAAAAAdAAAAABAE" // Replace with your actual image path or URL
        alt="Description of image"
        width={500}
        height={300}
      />

      <Greet />
      <Counter />
    </div>
  );
};

export default page;
