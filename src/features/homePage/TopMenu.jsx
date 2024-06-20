
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MenuItem from "../../components/MenuItem";
// import "swiper/swiper.min.css";
const menu = [
  {
    img: "/images/Frame 1171277030.png",
    name: "roasted chicken",
    price: 8000,
    notes:
      "Indulge in our mouthwatering Roasted Chicken. Every bite is a delight.",
    ratings: "/images/Frame 1171277025.png",
  },
  {
    img: "/images/Frame 1171277030 (1).png",
    name: "asun",
    price: 2000,
    notes:
      "Indulge in our mouthwatering Roasted Chicken. Every bite is a delight.",
    ratings: "/images/starFrameAsun.png",
  },
  {
    img: "/images/image 88.png",
    name: "jollof",
    price: 8000,
    notes:
      "Indulge in our mouthwatering Roasted Chicken. Every bite is a delight:",
    ratings: "/images/Frame 1171277025.png",
  },
  {
    img: "/images/image 88 (1).png",
    name: "fried rice",
    price: 6000,
    notes:
      "Indulge in our mouthwatering Roasted Chicken. Every bite is a delight:",
    ratings: "/images/Frame 1171277025.png",
  },
 
];
function TopMenu() {
  const className = "max-w-[1300px] w-[95vw] py-4 m-auto";
  return (
    <section className={`${className}`}>
      <div className="my-6">
      <div className="w-[11rem] h-[0.2rem] bg-brand m-auto"></div>
      <h3 className="text-brand my-1 font-headings font-semibold text-center">our top menu</h3>
      <div className="w-[11rem] h-[0.2rem] bg-brand m-auto"></div>
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
    {menu.map((item)=><MenuItem item={item} key={item.name}/>)}
      </Carousel>
      ;
    </section>
  );
}



  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
tablet: {
  breakpoint: { max: 1024, min: 464 },
    items: 1.5
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5
  }
};

export default TopMenu;
