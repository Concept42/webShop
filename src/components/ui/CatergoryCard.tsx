import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  image: StaticImageData | undefined;
  button: string;
}

function CatergoryCard({ image, button }: Props) {
  return (
    <div className="group relative flex h-full w-full  items-center justify-center ">
      <Image
        src={image}
        alt="image"
        objectFit="cover"
        className="transition-all duration-300 group-hover:scale-110"
      />
      <button className="font-poppins absolute z-[2] bg-white px-7 py-3 text-sm hover:bg-red-600 hover:text-white">
        {button}
      </button>
      <div className="absolute h-full w-full group-hover:bg-white group-hover:opacity-20"></div>
    </div>
  );
}

export default CatergoryCard;
