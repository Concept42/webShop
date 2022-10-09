import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  images: StaticImageData[];
}
const delay = 10000;
const slides = ["0", "1"];

function Slider({ images }: Props) {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (index === 0) {
      setTimeout(() => setIndex(1), 10000);
    } else setTimeout(() => setIndex(0), 10000);
  }, [index]);

  const handleClickFirst = () => {
    setIndex(0);
  };
  const handleClickSecond = () => {
    setIndex(1);
  };

  return (
    <div className="relative flex h-[1000px] w-full">
      <Image src={images[index]} alt="Slider" objectFit="cover" width="5000" />
      <div className="absolute flex h-full w-full items-center justify-center ">
        {index === 0 ? (
          <>
            <div className="flex flex-1"></div>
            <div className="flex flex-1 justify-center   ">
              <div className="flex w-full flex-col items-center gap-5">
                <div className="flex items-center justify-center">
                  <div className="h-1 w-20 border-b-2 border-solid border-gray-400 "></div>
                  <h3 className="text-gray-800">Summer Fashion</h3>
                  <div className="h-1 w-20 border-b-2 border-solid border-gray-400 "></div>
                </div>
                <h1 className="text-8xl font-medium">SALE</h1>
                <h2 className="text-4xl font-light">UP TO 30% OFF</h2>
                <button className="flex bg-red-600 px-9 py-3 text-white transition-all duration-300 hover:bg-gray-800">
                  BUY NOW
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-1 justify-center text-white  ">
              <div className="flex w-full flex-col  items-center gap-3">
                <div className="flex flex-col items-start justify-center gap-4">
                  <h3 className=" text-2xl font-light">NEW TREND 2022</h3>
                  <h1 className="text-6xl font-normal">New Collection</h1>
                  <h2 className="text-xl font-light">
                    BIG SALE OF THIS WEEK UP TO 30%
                  </h2>
                  <button className="flex bg-red-600 px-9 py-3 text-white transition-all duration-300 hover:bg-gray-800">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-1"></div>
          </>
        )}
      </div>
      <div className="absolute bottom-6 left-[50%] flex gap-2">
        <div
          onClick={handleClickFirst}
          className={
            index === 0
              ? "h-4 w-4 rounded-full bg-red-600"
              : "h-4 w-4 rounded-full bg-gray-300"
          }
        ></div>
        <div
          onClick={handleClickSecond}
          className={
            index === 1
              ? "h-4 w-4 rounded-full bg-red-600"
              : "h-4 w-4 rounded-full bg-gray-300"
          }
        ></div>
      </div>
    </div>
  );
}

export default Slider;
