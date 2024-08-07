import React, { useContext } from 'react'
import PopularMenu from './PopularMenu';
import VendorList from '../VendorList';
import MenuVendorsItem from '../applayoutMenu/MenuVendorsItem';
import MenuList from '../../MenuList';
import Button from '../../../ui/Button';
import toast from 'react-hot-toast';
import { CartContext } from '../../../CartContext';

import useUser from '../../../hooks/useUser';
import useProducts from '../../../hooks/useProducts';
import Mycart from '../../cart/Mycart';
import { useMutation } from '@tanstack/react-query';
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


export default function AppHome() {

   const { userId } = useUser();
   const { addToCart } = useContext(CartContext);
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



     mutate({ userId, price, name, _id, quantity, image });
   };
    
       const { allProducts, isLoading } = useProducts();
       const popularMenu = allProducts.slice(0, 8);
    const className = "max-w-[770px] py-4 mx-auto ";
  return (
    <article className="grid grid-cols-[1fr,17rem] ">
      <div className={`${className} text-black   `}>
        <header className="bg-black rounded-md md:flex pl-[3rem]  justify-between h-[35vh] overflow-hidden relative">
          <img
            src="\images\Ellipse 2058 (1).png"
            className="absolute z-7 bottom-[-0.1rem] w-[5rem]  left-[41%]"
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
            render={(item) => (
              <PopularMenu
                item={item}
                key={item.img}
                onClick={() => handleClick(item)}
              />
            )}
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
