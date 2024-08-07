import React from 'react'
import Logo from '../Logo'
import { Link } from 'react-router-dom'
import SideLink from './SideLink';
import { HiBars3, HiMiniCog, HiMiniQuestionMarkCircle, HiOutlineHome, HiOutlineShoppingCart } from 'react-icons/hi2';
import { MdLogout } from 'react-icons/md';

const link = [
  { path: "home", title: "home", icon: <HiOutlineHome /> },
  { path: "appmenu", title: "menu", icon: <HiBars3 /> },

  { path: "history", title: "order history", icon: <HiOutlineShoppingCart /> },
  { path: "settings", title: "settings", icon: <HiMiniCog /> },
  { path: "help", title: "help", icon: <HiMiniQuestionMarkCircle /> },

];

export default function AppLayoutSide() {
  return (
    <aside className=" pl-4  row-span-full bg-black ">
      <div className="mt-[1rem]">
        <Logo />
      </div>
      <ul className="flex pt-6 flex-col justify-center  gap-2 ">
        {link.map((item) => (
          <SideLink item={item} key={item.path} />
        ))}
        <button className="flex ml-3 items-center gap-3 font-semibold ">
          <MdLogout /> <span className='capitalize'>logout</span>{" "}
        </button>
      </ul>
    </aside>
  );
}
