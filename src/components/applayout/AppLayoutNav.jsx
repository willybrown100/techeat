import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import {
  HiBell,
  HiMagnifyingGlass,
  HiOutlineBell,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import UserAvatar from "../UserAvatar";


export default function AppLayoutNav() {
 

  return (
    <nav className="bg-black p-[1rem] px-3 ">
      <div className="flex justify-between max-w-[1170px] mx-auto items-center">
        <h4 className="mb-0 font-semibold font-headings"> hi, welcome </h4>
        <form className="w-[370px] ">
          <div className="flex bg-stone-50 px-2 py-1 rounded-sm">
            <input
              type="text"
              placeholder="search by food name"
              className="outline-none text-black placeholder:text-[0.8rem]   bg-transparent w-full "
            />
            <button>
              <HiMagnifyingGlass className="text-black" />
            </button>
          </div>
        </form>
        <div className="flex items-center gap-x-4">
          <HiOutlineShoppingCart className="bg-white rounded-full text-brand h-6 p-1 w-6" />
          <button>
          <HiOutlineBell className="text-brand bg-white  rounded-full w-6 h-6 p-1" />
          </button>
          <UserAvatar />
        </div>
      </div>
    </nav>
  );
}
