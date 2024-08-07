import React from 'react'
import MenuList from '../../MenuList';
import PopularMenu from '../applayouthome/PopularMenu';

const grills = [
  {
    id: 1,
    img: "/images/grills.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "grills",
  },
  {
    id: 2,
    img: "/images/grills.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "grills",
  },
  {
    id: 3,
    img: "/images/grills.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "grills",
  },
  {
    id: 4,
    img: "/images/grills.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "grills",
  },
  {
    id: 5,
    img: "/images/grills.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "grills",
  },
  {
    id: 6,
    img: "/images/grills.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "grills",
  },
  {
    id: 7,
    img: "/images/grills.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "grills",
  },
  {
    id: 8,
    img: "/images/grills.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "grills",
  },
  {
    id: 9,
    img: "/images/grills.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "grills",
  },
  {
    id: 10,
    img: "/images/grills.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "grills",
  },
  {
    id: 11,
    img: "/images/grills.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "grills",
  },
  {
    id: 12,
    img: "/images/grills.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "grills",
  },
];

export default function GrillsPage() {
  const className = "py-4 m-auto w-[820px]   ";
  return (
    <div className={`${className} text-black`} >

<MenuList popularMenu={grills} render={(item)=><PopularMenu item={item} key={item.id}/>}/>
    </div>
  )
}
