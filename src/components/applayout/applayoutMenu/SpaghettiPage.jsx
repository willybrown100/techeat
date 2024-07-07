import React from 'react'
import MenuList from '../../MenuList';
import PopularMenu from '../applayouthome/PopularMenu';


const spaghetti = [
  {
    id: 1,
    img: "/images/spaghetttti.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "spaghetti",
  },
  {
    id: 2,
    img: "/images/spaghetttti.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "spaghetti",
  },
  {
    id: 3,
    img: "/images/spaghetttti.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "spaghetti",
  },
  {
    id: 4,
    img: "/images/spaghetttti.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "spaghetti",
  },
  {
    id: 5,
    img: "/images/spaghetttti.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "spaghetti",
  },
  {
    id: 6,
    img: "/images/spaghetttti.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "spaghetti",
  },
  {
    id: 7,
    img: "/images/spaghetttti.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "spaghetti",
  },
  {
    id: 8,
    img: "/images/spaghetttti.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "spaghetti",
  },
  {
    id: 9,
    img: "/images/spaghetttti.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "spaghetti",
  },
  {
    id: 10,
    img: "/images/spaghetttti.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "spaghetti",
  },
  {
    id: 11,
    img: "/images/spaghetttti.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "spaghetti",
  },
  {
    id: 12,
    img: "/images/spaghetttti.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "spaghetti",
  },
];

export default function SpaghettiPage() {
  const className = "py-4 m-auto w-[820px]   ";
  return (
    <div className={` ${className} text-black my-6`}>
      <MenuList
        popularMenu={spaghetti}
        render={(item) => <PopularMenu item={item} key={item.id} />}
      />
    </div>
  );
}
