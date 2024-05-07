import Image from "next/image";
import React from "react";
import "./styles/flametext.css";
import "./styles/bg.css";

type Props = {};

const page = (props: Props) => {
  return (
    <div
      className="
    flex items-center  p-10 flex-col justify-center w-screen h-full"
    >
      <div className="backgroundimage absolute w-full h-screen top-0 left-0"></div>
      <Image
        src="/indir.png"
        alt="sydney image"
        width={500}
        height={600}
      ></Image>
      <div className="flex flex-col">
        <h1 className="fire-text w-52">SYDNEY</h1>
        <h1 className="fire-text w-52">SYMMENY</h1>
      </div>
      <div className="backgroundimage2  w-full h-[1000px] bottom-0 left-0"></div>
    </div>
  );
};

export default page;
