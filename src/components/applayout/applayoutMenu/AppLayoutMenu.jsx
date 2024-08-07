import React, { useContext, useState } from "react";
import MenuLink from "./MenuLink";
import Mycart from "../../cart/Mycart";
import MenuVendorsItem from "./MenuVendorsItem";
import Carousel from "react-multi-carousel";
import PopularMenu from "../applayouthome/PopularMenu";
import { Outlet, useLocation } from "react-router-dom";
import MenuList from "../../MenuList";
import VendorList from "../VendorList";
import { current } from "@reduxjs/toolkit";
// import CartItems from "../../../ui/CartModal";
// import CartModal from "../../../ui/CartModal";
import { useSelector } from "react-redux";
import { addToCart } from "../../../services/userData";
import useProducts from "../../../hooks/useProducts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useUser from "../../../hooks/useUser";
import { CartContext } from "../../../CartContext";


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
   const { refetch, setRefetch } = useContext(CartContext);
const { cart, setCart, addToCart } = useContext(CartContext);

const { mutate,isPending } = useMutation({
  mutationFn: addToCart,
  onSuccess: (data) => {
    console.log(data);
    toast.success("Item added to cart successfully");
  },
  onError: () => {
    toast.error("item could'nt be added to cart");
  },
});
const { allProducts, isLoading } = useProducts();
const popularMenu = allProducts.slice(0, 8);

const {userId}=useUser()

const [perItem, setPerItem] = useState(null);
const [openModal, setOpenModal] = useState(false);

const handleClick = function (item) {
  const { price, name, _id,quantity,image } = item;
  const items = {
    productId:_id,
    productName:name,
    price:price,
    quantity:quantity,
    image:image
  }
  
  setPerItem(items);
 
   
    mutate({ userId, price, name, _id, quantity, image });
  };
  const { pathname } = useLocation();
  
  

  const className = "max-w-[810px] py-4 mx-auto   ";
  const className2 = "grid grid-cols-[1fr,17rem] gap-2"
  return (
    <article className={`${pathname !== "/appLayout/appmenu/checkout"&&className2}`}>
      <div
        className={`${pathname !== "/appLayout/appmenu/checkout" && className}`}
      >
        {pathname !== "/appLayout/appmenu/checkout" && (
          <h4 className="text-black font-headings font-semibold">
            browse by category
          </h4>
        )}
        {pathname !== "/appLayout/appmenu/checkout" && (
          <div className="flex items-center gap-x-4 justify-between">
            {link.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </div>
        )}
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
                    key={item._id}
                    isPending={isPending}
                    onClick={() => handleClick(item)}
                  />
                )}
              />
          
            </div>
          </>
        )}
        <Outlet />
      </div>
      {pathname !== "/appLayout/appmenu/checkout" && <Mycart />}
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
