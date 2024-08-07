import React from 'react'
import { MdLogout } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom'

export default function SideLink({item}) {
      const { pathname } = useLocation();
      const curentPath = pathname.split("/").at(2);
    const {path,title,icon}=item
  return (
    <li className={`flex items-center font-semibold capitalize p-3 gap-x-4 ${curentPath === path ? "bg-brand rounded-l-full p-3" : ""}`}>
        <span>{icon}</span>
      <Link to={path}>{title}</Link>
     
    </li>
  );
}
  