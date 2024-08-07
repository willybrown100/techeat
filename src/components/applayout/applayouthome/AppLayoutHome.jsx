import React, { useContext } from "react";
import Button from "../../../ui/Button";
import Mycart from "../../cart/Mycart";
import Carousel from "react-multi-carousel";
import PopularMenu from "./PopularMenu";
import VendorsItem from "./VendorsItem";
import MenuList from "../../MenuList";
import VendorList from "../VendorList";
import MenuVendorsItem from "../applayoutMenu/MenuVendorsItem";
import useProducts from "../../../hooks/useProducts";
import { CartContext } from "../../../CartContext";
import useUser from "../../../hooks/useUser";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";


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

 const popularMenus = [
   { images: "/images/Frame 1171277030.png", name:"barbeque chicken",vendor:"grace kitchen",price:5000, ratings:"/images/3star.png" },
   { images: "/images/Frame 1171277030 (1).png", name:"asun",vendor:"food by betty",price:5000, ratings:"/images/3star.png" },
   { images: "/images/jollof.png", name:"jollof rice",vendor:"grace kitchen",price:5000, ratings:"/images/3star.png" },
   { images: "/images/image 88 (1).png", name:"fried rice",vendor:"rikks delight",price:5000, ratings:"/images/3star.png" },
   { images: "/images/semo.png", name:"pounded yam",vendor:"grace kitchen",price:5000, ratings:"/images/3star.png" },
   { images: "/images/spag.png", name:"spaghetti",vendor:"rikks delight",price:5000, ratings:"/images/3star.png" },
   { images: "/images/doughnut.png", name:"cheese burger",vendor:"grace kitchen",price:5000, ratings:"/images/3star.png" },
   { images: "/images/dogh.png", name:"doughnut",vendor:"aries doughnut",price:5000, ratings:"/images/3star.png" },
 ];

 
 
 export default function AppLayoutHome() {
   const { userId } = useUser();
  const {  addToCart } = useContext(CartContext);
  const { mutate } = useMutation({
    mutationFn: addToCart,
    onSuccess: (data) => {
      console.log(data);
      toast.success("Item added to cart successfully");
    },
    onError: () => {
      toast.error("item could'nt be added to cart");
    },
  });
  const handleClick = function (item) {
    const { price, name, _id, quantity, image } = item;
    const items = {
      productId: _id,
      productName: name,
      price: price,
      quantity: quantity,
      image: image,
    };

    // setPerItem(items);
    // setOpenModal(true);

    mutate({ userId, price, name, _id, quantity, image });
  };
   const  { allProducts, isLoading }=useProducts()
   const popularMenu = allProducts.slice(0,8)
  const className = "max-w-[810px] py-4 mx-auto  ";
  return (
    <div>
    <Outlet/>
    </div>
  );
}
