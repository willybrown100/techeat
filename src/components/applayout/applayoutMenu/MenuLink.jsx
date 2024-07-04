import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function MenuLink({item}) {
  const {pathname}= useLocation()
  const currentPath = pathname.split("/").at(3);
  console.log(currentPath);
    const {path,title,img}=item
    console.log(path)

  return (
  
      <Link
        to={path}
        className={`md:flex flex-col  shadow-lg items-center inline-block  px-4 pb-2 rounded-[1.5rem] ${currentPath === path? "bg-brand ":""}`}
      >
        <img src={img} alt="img" className="w-[3.5rem] h-[3.5rem] my-0" />
        <span className={`${currentPath===path?"text-white":""} font-semibold text-black my-0`}>{title}</span>
      </Link>
  
  );
}
