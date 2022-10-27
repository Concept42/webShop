import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

interface Props {
  image: any;
  productName: string;
  price: number;
  edition: string;
  newProduct?: boolean;
  sale?: boolean;
}

function ProductCard({
  // image,
  productName,
  price,
  edition,
  newProduct,
  sale,
}: Props) {
  const router = useRouter();
  console.log();
  return (
    <div className="font-poppins group relative flex h-full min-w-[300px] flex-col items-center justify-center gap-2 border-r-[1px] border-solid border-gray-200 bg-white  pt-16 transition-all duration-500 hover:shadow-2xl ">
      {/* <Image
        loader={() => image}
        onClick={() => router.push("/shop/detailProduct")}
        className="cursor-pointer"
        src={image}
        alt="product"
        layout="fill"
      /> */}
      {/* <img
        src="/uploads/detail_01_4639942215.jpeg"
        alt=""
      /> */}
      <h2>{productName}</h2>
      <h2>{edition}</h2>
      <h4 className="text-lg text-red-600">${price}</h4>
      <button className=" mt-16 w-full bg-red-500 p-2 text-white transition-all duration-500 hover:bg-gray-800">
        ADD TO CART
      </button>
      {newProduct && (
        <div className="absolute top-5 left-5 bg-green-300 px-3">New</div>
      )}
      {sale && (
        <div className="absolute top-5 left-5 bg-red-400 px-3">Sale</div>
      )}
    </div>
  );
}

export default ProductCard;
