import { useEffect, useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import Button from "../../ui/Button";

function PromoSection() {
  const className = "max-w-[1170px]   w-[90vw] py-8 m-auto";
  return (
    <section className={`bg-black overflow-hidden  relative h-full `}>
      <article
        className={`${className}   md:w-full md:bg-black md:py-0  md:grid md:grid-cols-[1fr,40%] md:items-center `}
      >
        <img src="/images/promoimg.png" alt="img" className="md:hidden" />

        <div className="font-semibold md:flex md:items-center md:mt-0 py-6 md:h-[350px] md:bg-black">
          <div className="">
            <h3 className="font-headings text-center   md:text-left my-4">
              get #500 off your
            </h3>
            <h3 className="text-brand text-center  font-headings md:text-left font-semibold">
              first order when you <br /> <br /> use this promo code{" "}
              <span className="text-white">"TECH"</span>
            </h3>
            <div className="flex justify-center md:block">
              <Button type="promo">shop Now</Button>
            </div>
          </div>
         
        </div>
        <div className="absolute top-0  left-[55%] right-0">
          <FadeImages2 />
        </div>
      </article>
    </section>
  );
}

const FadeImages2 = () => {
  const images = [
    "/images/Herobg.png",
    "images/pizza5.jpeg",
    "images/pizza6.jpeg",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  const transitions = useTransition(images[index], {
    key: images[index],
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 }, 
  });

  return (
    <div style={{ position: "relative", width: "100%", height: "350px" }} className="hidden  md:block">
      {transitions((style, item) => (
        <animated.img
          src={item}
          alt=""
          style={{
            ...style,
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      ))}
    </div>
  );
};
export default PromoSection;
