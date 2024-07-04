import React from 'react'
import Logo from '../Logo'
import { Link } from 'react-router-dom'
import SideLink from './SideLink';
import { HiBars3, HiMiniCog, HiMiniQuestionMarkCircle, HiOutlineHome, HiOutlineShoppingCart } from 'react-icons/hi2';

const link = [
  { path: "home", title: "home", icon: <HiOutlineHome /> },
  { path: "appmenu", title: "menu", icon: <HiBars3 /> },

  { path: "history", title: "order history", icon: <HiOutlineShoppingCart /> },
  { path: "settings", title: "settings", icon: <HiMiniCog /> },
  { path: "help", title: "help", icon: <HiMiniQuestionMarkCircle /> },
  { path: "logout", title: "logout", icon: <HiMiniQuestionMarkCircle /> },
];

export default function AppLayoutSide() {
  return (
    <aside className=" pl-4  row-span-full bg-black ">
      <div className='mt-[1rem]'>
      <Logo />
      </div>
      <ul className='flex pt-6 flex-col justify-center  gap-2 '>
        
          {link.map((item)=><SideLink item={item} key={item.path}/>)}
      </ul>
    </aside>
  );
}
