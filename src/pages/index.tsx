import type { NextPage } from "next";
import Slider from "../components/ui/Slider";
import CatergoryCard from "../components/ui/CatergoryCard";
import IconBox from "../components/ui/IconBox";
import {
  sliderImages,
  cardImages,
  iconBoxContent,
} from "../../public/data/staticData";
import Collection from "../components/sections/Collection";
import Footer from "../components/sections/Footer";
import ProductCard from "../components/ui/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";

// export async function getServerSideProps() {
//   const products = await axios
//     .get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/products/?populate=*`, {
//       headers: {
//         Authorization: `d77acaa799cb380aaabb985d23881c285f90d101517e0108a39a5dad13a37f817551eed3450d9fdf53cf47574cdc93e55f3392e38b5c55bad79b867a18aa64374febda5b71bb4681c77b936d03cd1353627098f18b88c1c85c4b31f51f535cd885bb024253847a166b27bf19bb317db5ace5111563a855e1b86809af6b35d73d`,
//       },
//     })
//     .then((response) => response.data);

//   return {
//     props: {
//       products: products.data,
//     },
//   };
// }

interface Props {
  products?: any;
}
const Home: NextPage = ({ products }: Props) => {
  console.log(products);

  // useEffect(() => {
  //   const getData = async () => {
  //     await fetch("http://localhost:4000/posts")
  //       .then((result) => {
  //         return result.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   };
  //   getData();
  // }, []);

  return (
    <>
      <section className="">
        <Slider images={sliderImages} />
      </section>
      <section className="box-container">
        <div></div>
        <div className="flex h-full w-full gap-5">
          <CatergoryCard image={cardImages[0]} button="FOR MEN'S" />
          <div
            className="flex h-full w-full
       flex-col gap-5"
          >
            <CatergoryCard image={cardImages[1]} button="FOR KID'S" />
            <CatergoryCard image={cardImages[2]} button="ACCESSORIES" />
          </div>
          <CatergoryCard image={cardImages[3]} button="FOR WOMEN'S" />
        </div>
        <div></div>
      </section>
      <section className="h-full w-full items-center justify-center bg-gray-100">
        <div className="box-container">
          <div className="flex items-center justify-around ">
            {iconBoxContent &&
              iconBoxContent.map((box, index) => {
                return (
                  <IconBox
                    key={index}
                    icon={box.icon}
                    title={box.title}
                    subtitle={box.subtitle}
                  />
                );
              })}
          </div>
        </div>
        <section className="font-poppins flex flex-col items-center justify-center gap-10 py-20">
          <h1 className="text-4xl ">New Product</h1>
          <div className="flex h-0.5 w-16 bg-red-700 "></div>
          <div className="grid grid-flow-col grid-cols-4 gap-1">
            {/* {products.map((product: any) => {
              console.log(
                "product:",
                product.attributes.thumbnail.data.attributes.url
              );
              return (
                <ProductCard
                  key={product.id}
                  // image={product.attributes.thumbnail.data.attributes.url}
                  productName={product.attributes.title}
                  edition={product.attributes.edition}
                  price={product.attributes.price}
                  newProduct={product.attributes.new}
                />
              );
            })} */}
          </div>
        </section>
      </section>
      <section className="relative h-[400px] w-full bg-[#EFEFEF]">
        <Collection />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};
export default Home;
