import { motion } from "framer-motion";


function HeroImage({ image, x, y }) {
  return (
    <motion.div
      className="  rounded-full  bg-black   absolute  md:py-1.5 md:px-3  lg:py-2 lg:px-4 md:text-sm xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold lg:p-6 md:p-4 "
      whileHover={{ scale: 1.5 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      <img src={image} alt="img" className="w-[3rem] rounded-md z-[2]" />
    </motion.div>
  );
}

function HeroImages() {
  return (
    <>
      <div
        className=" md:hidden relative rounded-full justify-center flex items-center 
        "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-black text-light py-4 px-4 dark:bg-light dark:text-dark"
          whileHover={{ scale: 1.1}}
        >
          <img src="\images\Frame 1171276718 (1).png" className="z-[4] md:w-[25rem]" alt="img" />
        </motion.div>
        <HeroImage image="/images/pizza1.webp" x="-39vw" y="-20vw" />
        <HeroImage image="/images/pizza2.webp" x="-19vw" y="-10vw" />
        <HeroImage image="/images/pizza3.jpeg" x="20vw" y="6vw" />
        <HeroImage image="/images/pizza4.jpeg" x="-10vw" y="12vw" />
        <HeroImage image="/images/pizza5.jpeg " x="32vw" y="-5vw" />
        <HeroImage image=" /images/pizza3.jpeg" x="-35vw" y="18vw" />
        <HeroImage image="/images/pizza1.webp" x="28vw" y="20vw" />
      </div>
    </>
  );
}
export function HeroImages2() {
  return (
    <>
      <div
        className=" hidden relative rounded-full justify-center sm:flex items-center 
        "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-black text-light py-4 px-4 dark:bg-light dark:text-dark"
          whileHover={{ scale: 1.1}}
        >
          <img src="\images\Frame 1171276718 (1).png" className="z-[4] md:w-[25rem]" alt="img" />
        </motion.div>
        <HeroImage image="/images/pizza1.webp" x="15vw" y="-20vw" />
        <HeroImage image="/images/pizza2.webp" x="-19vw" y="-10vw" />
        <HeroImage image="/images/pizza3.jpeg" x="20vw" y="6vw" />
        <HeroImage image="/images/pizza4.jpeg" x="-10vw" y="12vw" />
        <HeroImage image="/images/pizza5.jpeg " x="32vw" y="-5vw" />
        <HeroImage image=" /images/pizza3.jpeg" x="-35vw" y="18vw" />
        <HeroImage image="/images/pizza1.webp" x="28vw" y="20vw" />
      </div>
    </>
  );
}

export default HeroImages;
