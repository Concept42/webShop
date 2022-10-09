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

const Home: NextPage = () => {
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
