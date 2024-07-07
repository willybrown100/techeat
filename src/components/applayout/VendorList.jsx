import React from 'react'
import Carousel from 'react-multi-carousel';

export default function VendorList({render,vendor}) {
  return (
    <div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        arrows={false}
        itemClass="carousel-item-padding-40-px"
      >
       {vendor.map(render)}
      </Carousel>
    </div>
  );
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2.5,
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
