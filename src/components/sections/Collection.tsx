import React from "react";
import Image from "next/image";
import collection from "../../../public/bg-parallax3.jpg";

function Collection() {
  return (
    <>
      <Image
        src={collection}
        alt="collection"
        className=""
        layout="fill"
        objectFit="cover"
      />

      <div className="font-poppins absolute flex h-full w-full flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-thin">NEW TREND 2018</h2>
        <h1 className="text-5xl font-medium">Women's Collection</h1>
        <div className="h-0.5 w-40 bg-gray-300"></div>
        <h2 className="text-lg font-thin">Big Sale of this Week</h2>
        <button className="flex bg-red-600 px-9 py-3 text-white transition-all duration-300 hover:bg-gray-800">
          SHOP NOW
        </button>
      </div>
    </>
  );
}

export default Collection;
