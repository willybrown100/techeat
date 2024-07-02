import React from "react";
import Button from "../../../ui/Button";
import Mycart from "../../cart/Mycart";
import Carousel from "react-multi-carousel";
import PopularMenu from "./PopularMenu";
import VendorsItem from "./VendorsItem";

const vendors = [
  {
    img: "/images/Ellipse 2074.png",
    imgRatig: "/images/5star.png",
    name: "ibrahim abdul",
    text: "i'm impressed with TechEats The website is easy to navigate and the delivery was superfas",
  },
  {
    img: "/images/Ellipse 2075.png",
    imgRatig: "/images/5star.png",
    name: "kehinde ogunsola",
    text: "TechEats has been a lifesaver for me! The variety of options is great and awesome",
  },
  {
    img: "/images/Ellipse 2076.png",
    imgRatig: "/images/5star.png",
    name: "smith joseph",
    text: "TechEats delivery was very swift. I will surely order again",
  },
  {
    img: "/images/Ellipse 2076.png",
    imgRatig: "/images/5star.png",
    name: "smith joseph",
    text: "We prioritize ease and efficiency streamlining the food ordering process",
  },

  {
    img: "/images/Ellipse 2076.png",
    imgRatig: "/images/5star.png",
    name: "smith joseph",
    text: "We prioritize ease and efficiency streamlining the food ordering process",
  },
];

 const popularMenu = [
   { img: "/images/Frame 1171277030.png", name:"barbeque chicken",vendor:"grace kitchen",price:5000, ratings:"/images/3star.png" },
   { img: "/images/Frame 1171277030 (1).png", name:"asun",vendor:"food by betty",price:5000, ratings:"/images/3star.png" },
   { img: "/images/jollof.png", name:"jollof rice",vendor:"grace kitchen",price:5000, ratings:"/images/3star.png" },
   { img: "/images/image 88 (1).png", name:"fried rice",vendor:"rikks delight",price:5000, ratings:"/images/3star.png" },
   { img: "/images/semo.png", name:"pounded yam",vendor:"grace kitchen",price:5000, ratings:"/images/3star.png" },
   { img: "/images/spag.png", name:"spaghetti",vendor:"rikks delight",price:5000, ratings:"/images/3star.png" },
   { img: "/images/doughnut.png", name:"cheese burger",vendor:"grace kitchen",price:5000, ratings:"/images/3star.png" },
   { img: "/images/dogh.png", name:"doughnut",vendor:"aries doughnut",price:5000, ratings:"/images/3star.png" },
 ];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1.5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
  },
};

export default function AppLayoutHome() {
  const className = "max-w-[810px] py-4 mx-auto   ";
  return (
    <article className="grid grid-cols-[1fr,17rem] ">
      <div className={`${className} text-black   `}>
        <header className="bg-black rounded-md md:flex pl-[3rem] justify-between h-[35vh] overflow-hidden relative">
          <img
            src="\images\Ellipse 2058 (1).png"
            className="absolute z-10 bottom-[-0.1rem] w-[5rem] left-[42%]"
            alt="img"
          />
          <img
            src="\images\Ellipse 2056.png"
            className="absolute w-[5rem] left-[0.1px] "
            alt="img"
          />
          <div className="flex justify-center  items-center">
            <div className="max-w-[500px]  ">
              <h3 className="font-headings text-[1.5rem] font-semibold text-white ">
                {" "}
                Save Big And Enjoy Up To 500 incredible Discount
              </h3>

              <p className=" text-sm mb-0 ">
                Don’t miss out on these incredible discount off on <br />{" "}
                selected menu items!
              </p>
              <Button className=" text-white">order now</Button>
            </div>
          </div>

          <img
            src="/images\Frame 1171276678.png"
            alt="img"
            className="z-1 absolute h-full right-0 w-[25rem] "
          />
        </header>

        <div>
          <h4 className="text-black my-6 capitalize font-headings font-semibold">
            top vendors
          </h4>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            arrows={false}
            // showDots={true}
            // dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {vendors.map((item) => (
              <VendorsItem item={item} key={item.name} />
            ))}
          </Carousel>
        </div>
        <div>
          <h4 className="text-black font-headings font-semibold my-6">
            popular menu
          </h4>
          <ul className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-2">
            {popularMenu.map((item) => (
              <PopularMenu item={item} key={item.img} />
            ))}
          </ul>
        </div>
        <div className="flex justify-center my-4">
          <button className="bg-brand rounded-md capitalize py-2 text-white font-semibold px-4">
            browse menu{" "}
          </button>
        </div>
      </div>
      <Mycart />
    </article>
  );
}
