import React from "react";
import ValueItem from "./ValueItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const values = [
  {
    img: "/images/Vector.png",
    title: "convenience",
    text: "We prioritize ease and efficiency streamlining the food ordering process",
  },
  {
    img: "/images/Vector (1).png",
    title: "innovation",
    text: "we encourage vendors to experiment new recipe and business ideas",
  },
  {
    img: "/images/Vector (2).png",
    title: "convenience",
    text: "We prioritize ease and efficiency streamlining the food ordering process",
  },
  {
    img: "/images/Vector (3).png",
    title: "community",
    text: "We foster a supportive for both students and vendors",
  },
  {
    img: "/images/Vector.png",
    title: "convenience",
    text: "We prioritize ease and efficiency streamlining the food ordering process",
  },
  {
    img: "/images/Vector (1).png",
    title: "innovation",
    text: "we encourage vendors to experiment new recipe and business ideas",
  },
  {
    img: "/images/Vector (2).png",
    title: "convenience",
    text: "We prioritize ease and efficiency streamlining the food ordering process",
  },
  {
    img: "/images/Vector (3).png",
    title: "community",
    text: "We foster a supportive for both students and vendors",
  },
];

export default function OurCoreValues() {
  const className = "max-w-[1200px]  w-[90vw] py-[3rem] m-auto";
  return (
    <section>
      <article className={`${className}`}>
        <div className="md:my-6 md:mb-[4rem] mb-[2rem]">
          <div className="w-[14rem] h-[0.2rem] hidden md:block bg-brand m-auto"></div>
          <h3 className="text-brand text-[1.7rem] mb-1 font-headings font-semibold text-center">
            our core Values
          </h3>
          <div className="w-[14rem] h-[0.2rem] hidden md:block bg-brand m-auto"></div>
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
          {values.map((item) => (
            <ValueItem item={item} key={item.name} />
          ))}
        </Carousel>
      </article>
    </section>
  );
}
