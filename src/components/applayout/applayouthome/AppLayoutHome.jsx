import React from "react";
import Button from "../../../ui/Button";
import Mycart from "../../cart/Mycart";
import Carousel from "react-multi-carousel";
import PopularMenu from "./PopularMenu";
import VendorsItem from "./VendorsItem";
import MenuList from "../../MenuList";
import VendorList from "../VendorList";
import MenuVendorsItem from "../applayoutMenu/MenuVendorsItem";

const vendors = [
  { img: "/images/riksdelight.jpg", vendorName: "rikks delight" },
  {
    img: "/images/foodBetty.jpg",
    vendorName: "food by betty",
  },
  {
    img: "/images/gracevendor.jpg",
    vendorName: "grace kitchen",
  },
  {
    img: "/images/foodBetty.jpg",
    vendorName: "food by betty",
  },
  { img: "/images/riksdelight.jpg", vendorName: "rikks delight" },
  { img: "/images/riksdelight.jpg", vendorName: "rikks delight" },
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
          <VendorList
            vendor={vendors}
            render={(item) => <MenuVendorsItem item={item} key={item.img} />}
          />
        </div>
        <div>
          <h4 className="text-black font-headings font-semibold my-6">
            popular menu
          </h4>
          <MenuList
            popularMenu={popularMenu}
            render={(item) => <PopularMenu item={item} key={item.img} />}
          />
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
