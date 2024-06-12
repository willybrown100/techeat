import { useEffect, useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import Button from "../../ui/Button";

function PromoSection() {
  const className = "max-w-[1170px]   w-[90vw] py-4 m-auto";
  return (
    <section className={`bg-black md:bg-transparent`}>
      <article className={`${className} md:max-w-full md:w-full  md:grid md:grid-cols-[1fr,40%] items-center `}>
        <FadeImages />
        <div className="font-semibold mt-4 md:mt-0 md:pl-8 py-6 h-full md:bg-black">
          <h3 className="font-headings text-center  md:text-left my-4">
            get 500 off your
          </h3>
          <h3 className="text-brand text-center  font-headings md:text-left font-semibold">
            first order when you <br /> <br /> use this promo code{" "}
            <span className="text-white">"TECH"</span>
          </h3>
          <div className="">
          <Button type="promo">shop Now</Button>
          </div>
        </div>
        <FadeImages2 />
      </article>
    </section>
  );
}
const FadeImages = () => {
  const images = [
    "images/pizza3.jpeg",
    "images/pizza5.jpeg",
    "images/pizza6.jpeg",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const transitions = useTransition(images[index], {
    key: images[index],
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 }, // 1 second fade duration
  });

  return (
    <div style={{ position: "relative", width: "100%", height: "300px" }} className="md:hidden">
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
const FadeImages2 = () => {
  const images = [
    "images/pizza3.jpeg",
    "images/pizza5.jpeg",
    "images/pizza6.jpeg",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const transitions = useTransition(images[index], {
    key: images[index],
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 }, // 1 second fade duration
  });

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }} className="hidden md:block">
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
