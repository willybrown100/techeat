import React, { useState } from "react";
import MenuLink from "./MenuLink";
import Mycart from "../../cart/Mycart";
import MenuVendorsItem from "./MenuVendorsItem";
import Carousel from "react-multi-carousel";
import PopularMenu from "../applayouthome/PopularMenu";
import { Outlet, useLocation } from "react-router-dom";
import MenuList from "../../MenuList";
import VendorList from "../VendorList";
import { current } from "@reduxjs/toolkit";
import CartItems from "../../../ui/CartModal";
import CartModal from "../../../ui/CartModal";
import { useSelector } from "react-redux";
import { addToCart } from "../../../services/userData";
import useProducts from "../../../hooks/useProducts";
// const popularMenu = [
//   {
//     productId: "123456789123456789123456",
//     img: "/images/Frame 1171277030.png",
//     name: "barbeque chicken",
//     vendor: "grace kitchen",
//     price: 5000,
//     ratings: "/images/3star.png",
//     quantity: 1,
//   },
//   {
//     productId: "2",
//     img: "/images/Frame 1171277030 (1).png",
//     name: "asun",
//     vendor: "food by betty",
//     price: 5000,
//     ratings: "/images/3star.png",
//     quantity: 1,
//   },
//   {
//     productId: "3",
//     img: "/images/jollof.png",
//     name: "jollof rice",
//     vendor: "grace kitchen",
//     price: 5000,
//     ratings: "/images/3star.png",
//     quantity: 1,
//   },
//   {
//     productId: "4",
//     img: "/images/image 88 (1).png",
//     name: "fried rice",
//     vendor: "rikks delight",
//     price: 5000,
//     ratings: "/images/3star.png",
//     quantity: 1,
//   },
//   {
//     productId: "5",
//     img: "/images/semo.png",
//     name: "pounded yam",
//     vendor: "grace kitchen",
//     price: 5000,
//     ratings: "/images/3star.png",
//     quantity: 1,
//   },
//   {
//     productId: "6",
//     img: "/images/spag.png",
//     name: "spaghetti",
//     vendor: "rikks delight",
//     price: 5000,
//     ratings: "/images/3star.png",
//     quantity: 1,
//   },
//   {
//     productId: "7",
//     img: "/images/doughnut.png",
//     name: "cheese burger",
//     vendor: "grace kitchen",
//     price: 5000,
//     ratings: "/images/3star.png",
//     quantity: 1,
//   },
//   {
//     productId: "8",
//     img: "/images/dogh.png",
//     name: "doughnut",
//     vendor: "aries doughnut",
//     price: 5000,
//     ratings: "/images/3star.png",
//     quantity: 1,
//   },
//   {
//     productId: "9",
//     img: "/images/semo.png",
//     name: "pounded yam",
//     vendor: "grace kitchen",
//     price: 5000,
//     ratings: "/images/3star.png",
//     quantity: 1,
//   },
//   {
//     productId: "10",
//     img: "/images/spag.png",
//     name: "spaghetti",
//     vendor: "rikks delight",
//     price: 5000,
//     ratings: "/images/3star.png",
//     quantity: 1,
//   },
//   {
//     productId: "11",
//     img: "/images/doughnut.png",
//     name: "cheese burger",
//     vendor: "grace kitchen",
//     quantity: 1,
//     price: 5000,
//     ratings: "/images/3star.png",
//   },
//   {
//     productId: "12",
//     img: "/images/dogh.png",
//     name: "doughnut",
//     vendor: "aries doughnut",
//     price: 5000,
//     ratings: "/images/3star.png",
//     quantity: 1,
//   },
// ];

const link = [
  {
    path: "burger",
    title: "burger",
    img: "/images/image 81.png",
  },
  { path: "spaghetti", title: "spaghetti", img: "/images/menuburger.png" },
  { path: "grills", title: "grills", img: "/images/meat.png" },
  { path: "rice", title: "rice", img: "/images/image 23.png" },
  { path: "snacks", title: "snacks", img: "/images/snack.png" },
  { path: "drinks", title: "drinks", img: "/images/drinks.png" },
];
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
  { img: "/images/riksdelight.jpg", vendorName: "riks delight" },
  { img: "/images/riksdelight.jpg", vendorName: "riks delight" },
];

export default function AppLayoutMenu() {
 
  const { allProducts, isLoading } = useProducts();
  const popularMenu = allProducts.slice(0, 8);
const userId=localStorage.getItem("userId")
console.log(userId)
  const [perItem, setPerItem] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const handleClick = function (item) {
    console.log(item)
    const { price, name, _id:productId, quantity } = item;
    setPerItem(item);
    setOpenModal(true);
    console.log(item);
    addToCart({userId, price, name,productId, quantity});
  };
  const { pathname } = useLocation();

  console.log(pathname);
  const className = "max-w-[810px] py-4 mx-auto   ";
  return (
    <article className="grid grid-cols-[1fr,17rem] gap-2">
      <div className={`${className}`}>
        <h4 className="text-black font-headings font-semibold">
          browse by category
        </h4>
        <div className="flex items-center gap-x-4 justify-between">
          {link.map((item) => (
            <MenuLink item={item} key={item.title} />
          ))}
        </div>
        {pathname === "/appLayout/appmenu" && (
          <>
            <div className="pt-6">
              <h4 className="text-black font-headings font-semibold">
                browse by vendors
              </h4>
              <VendorList
                vendor={vendors}
                render={(item) => (
                  <MenuVendorsItem item={item} key={item.img} />
                )}
              />
            </div>
            <div className="pt-6">
              <h4 className="text-black font-headings font-semibold">
                our top meal this week
              </h4>

              
              <MenuList
                popularMenu={popularMenu}
                loading={isLoading}
                render={(item) => (
                  <PopularMenu
                    item={item}
                    key={item.id}
                    onClick={() => handleClick(item)}    
                  />
                )}
              />
              {openModal && <CartModal perItem={perItem} />}
            </div>
          </>
        )}
        <Outlet />
      </div>
      <Mycart />
    </article>
  );
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2.5,
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
