import React from 'react'
import MenuList from '../../MenuList'
import PopularMenu from '../applayouthome/PopularMenu';


const burger = [
  {
    image: "/images/burg.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "burger",
  },
  {
    image: "/images/burg.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "burger",
  },
  {
    image: "/images/burg.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "burger",
  },
  {
    image: "/images/burg.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "burger",
  },
  {
    image: "/images/burg.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "burger",
  },
  {
    image: "/images/burg.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "burger",
  },
  {
    image: "/images/burg.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "burger",
  },
  {
    image: "/images/burg.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "burger",
  },
  {
    image: "/images/burg.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "burger",
  },
  {
    image: "/images/burg.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "burger",
  },
  {
    image: "/images/burg.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "burger",
  },
  {
    images: "/images/burg.png",
    vendor: "grace kitchen",
    price: 5000,
    ratings: "/images/3star.png",
    name: "burger",
  },
];

export default function BurgerPage() {
     const className = "py-4 m-auto w-[820px]   ";
  return (
    <div className={`${className} text-black `}>
      <MenuList
        popularMenu={burger}
        render={(item,i) => <PopularMenu item={item} key={i} />}
      />
    </div>
  );
}