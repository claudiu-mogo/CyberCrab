import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="z-20 h-full w-full flex items-center justify-center">
      <Image
        src="/about.png"
        alt="Picture of the author"
        width={1000}
        height={1000}
      ></Image>
    </div>
  );
}
