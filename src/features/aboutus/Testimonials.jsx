import React from "react";
import TestimonyItem from "./TestimonyItem";
import Carousel from "react-multi-carousel";

const testimoies = [
  {
    img: "/images/Ellipse 2074.png",
    imgRatig: "/images/5star.png",
    name: "ibrahim abdul",
    text: "i'm impressed with TechEats The website is easy to navigate and the delivery was superfas",
  },
  {
    img: "/images/Ellipse 2075.png",
    imgRatig: "/images/5star.png",
    name: "kehinde ogunsola",
    text: "TechEats has been a lifesaver for me! The variety of options is great and awesome",
  },
  {
    img: "/images/Ellipse 2076.png",
    imgRatig: "/images/5star.png",
    name: "smith joseph",
    text: "TechEats delivery was very swift. I will surely order again",
  },
  {
    img: "/images/Ellipse 2076.png",
    imgRatig: "/images/5star.png",
    name: "smith joseph",
    text: "We prioritize ease and efficiency streamlining the food ordering process",
  },

  {
    img: "/images/Ellipse 2076.png",
    imgRatig: "/images/5star.png",
    name: "smith joseph",
    text: "We prioritize ease and efficiency streamlining the food ordering process",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1.5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
  },
};

// const reviews = {
//   imgRatig: "/images/Ellipse 2074.png",
//   title: "review",
//   text: "I'm impressed with TechEats! The website is easy to navigate and the delivery was superfast",
// };

export default function Testimonials() {
  const className = "max-w-[1170px]   w-[90vw] py-6 m-auto";
  return (
    <section>
      <article className={`${className}`}>
        <div className="my-3 md:my-6 mb-2 md:mb-[4rem]">
          <div className="w-[14rem] h-[0.2rem] bg-brand hidden md:block  m-auto"></div>
          <h3 className="text-brand text-[1.7rem] font-headings font-semibold text-center">
            testimonials
          </h3>
          <div className="w-[14rem] h-[0.2rem] text-headings hidden md:block bg-brand m-auto"></div>
        </div>

        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          // showDots={true}
          // dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {testimoies.map((item) => (
            <TestimonyItem item={item} key={item.name} />
          ))}
        </Carousel>
      </article>
    </section>
  );
}
