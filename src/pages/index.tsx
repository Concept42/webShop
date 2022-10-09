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

export async function getServerSideProps() {
  const product = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/products`,
    {
      headers: {
        Authorization: `15e156b4b637dee8efcbb7de2b3c148e03fdd4e2f69dfa9bcbfb1713ec8a354408d5691d991bc213cad52ed02ce410e695ef18d367c2af58df0517dd9bef0c3c2fa701f523917640a9c3274902f61191d52e73d9f19a5df7b6cb548c0c4df880034a75ead401cce08f66ec2b73a5d8814f4bf79ace99d1e0fe7fe4e97fab5478`,
      },
    }
  );

  return {
    props: {
      product,
    },
  };
}

interface Props {
  product?: any;
}
const Home: NextPage = ({ product }: Props) => {
  const [products, setProducts] = useState();

  const getProducts = async () => {
    useEffect(() => {
      getProducts();
    });

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
              {/* <ProductCard
              image=
              productName="Gray Sneakers"
              edition="Black Edition"
              price={100}
              newProduct
            /> */}
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
};
export default Home;
