import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button"
import React from 'react'
import useUser from "../../hooks/useUser";

export default function MenuItems({item}) {
    const navigate = useNavigate();
    const { authUserData, userId } = useUser();
    const session = authUserData?.token;
    const handleClick = function () {
      if (session) {
        navigate("/applayout");
      } else {
        navigate("/signin");
      }
    };
    const { image, name, note, imgRating, vendorName ,price} = item;
  return (
    <li className="text-black border mb-8 border-stone-800 rounded-[0.5rem] md:border-stone-200">
      <img src={image} alt="img" className="h-[18rem] object-cover" />
      <div className=" p-2 ">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold font-headings text-black">
            {name}
          </h4>
          <p className=" font-semibold text-brand">{price}</p>
        </div>
        <p className="mb-0 text-sm font-body text-black">{note}</p>
        <div className="flex items-center justify-between">
          <img src="/images/3star.png" alt="img" className="w-[6rem]" />
          <h5 className=" font-semibold capitalize text-black">{vendorName}</h5>
        </div>
        <div className="flex justify-between  gap-2">
          <Button className="bg-transparent text-brand border border-brand" onClick={handleClick}>
            add to cart
          </Button>
          <Button className="hover:bg-Btnhover text-white">order now</Button>
        </div>
      </div>
    </li>
  );
}
