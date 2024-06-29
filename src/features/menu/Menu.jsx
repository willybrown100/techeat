import MenuItems from "./MenuItems";

const menu = [
  {
    img: "/images/Frame 1171277030.png",
    name: "Roasted chicken",
    note: "Indulge in our mouthwatering Roasted Chicken. Every bite is a delight",
    price: 8000,
    imgRating: "/images/4star.png",
    vendorName: "Rikks delight",
  },
  {
    img: "/images/Frame 1171277030 (1).png",
    name: "asun",
    note: "Indulge in our mouthwatering asun. Every bite is a delight",
    price: 2000,
    imgRating: "/images/3star.png",
    vendorName: "food by betty",
  },
  {
    img: "/images/jollof.png",
    name: "jollof rice",
    note: "Indulge in our mouthwatering jollof. Every bite is a delight",
    price: 8000,
    imgRating: "/images/4star.png",
    vendorName: "korede spagheti",
  },
  {
    img: "/images/image 88 (1).png",
    name: "fried rice",
    note: "Indulge in our mouthwatering fried rice. Every bite is a delight",
    price: 6000,
    imgRating: "/images/5star.png",
    vendorName: "grace kitchen",
  },
  {
    img: "/images/semo.png",
    name: "semo",
    note: "Indulge in our mouthwatering semo, Every bite is a delight",
    price: 4500,
    imgRating: "/images/4star.png",
    vendorName: "happy meals",
  },
  {
    img: "/images/spag.png",
    name: "spaghetti",
    note: "Indulge in our mouthwatering spaghetti, Every bite is a delight",
    price: 5000,
    imgRating: "/images/4star.png",
    vendorName: "aries pasteries",
  },
  {
    img: "/images/doughnut.png",
    name: "burger",
    note: "Indulge in our mouthwatering burger, Every bite is a delight",
    price: 1500,
    imgRating: "/images/5star.png",
    vendorName: "",
  },
  {
    img: "/images/dogh.png",
    name: "doughnut",
    note: "Indulge in our mouthwatering doughnut, Every bite is a delight",
    price: 2000,
    imgRating: "/images/5star.png",
    vendorName: "",
  },
  {
    img: "/images/salad.png",
    name: "chicken salad",
    note: "Indulge in our mouthwatering chicken salad, Every bite is a delight",
    price: 5000,
    imgRating: "/images/4star.png",
    vendorName: "korede spaghetti",
  },
  {
    img: "/images/poundo.png",
    name: "poundo yam",
    note: "Indulge in our mouthwatering poundo yam, Every bite is a delight",
    price: 5000,
    imgRating: "/images/4star.png",
    vendorName: "grace kitchen",
  },
  {
    img: "/images/Frame 1171277030.png",
    name: "roasted chicken",
    note: "Indulge in our mouthwatering roasted chicken, Every bite is a delight",
    price: 8000,
    imgRating: "/images/4star.png",
    vendorName: "rikks delight",
  },
  {
    img: "/images/Frame 1171277030 (1).png",
    name: "asun",
    note: "Indulge in our mouthwatering asun. Every bite is a delight",
    price: 2000,
    imgRating: "/images/3star.png",
    vendorName: "food by betty",
  },
  {
    img: "/images/jollof.png",
    name: "jollof rice",
    note: "Indulge in our mouthwatering jollof. Every bite is a delight",
    price: 8000,
    imgRating: "/images/4star.png",
    vendorName: "korede spagheti",
  },
  {
    img: "/images/image 88 (1).png",
    name: "fried rice",
    note: "Indulge in our mouthwatering fried rice. Every bite is a delight",
    price: 6000,
    imgRating: "/images/5star.png",
    vendorName: "grace kitchen",
  },
  {
    img: "/images/semo.png",
    name: "semo",
    note: "Indulge in our mouthwatering semo, Every bite is a delight",
    price: 4500,
    imgRating: "/images/4star.png",
    vendorName: "happy meals",
  },
  {
    img: "/images/spag.png",
    name: "spaghetti",
    note: "Indulge in our mouthwatering spaghetti, Every bite is a delight",
    price: 5000,
    imgRating: "/images/4star.png",
    vendorName: "aries pasteries",
  },
];

function Menu() {
    const className = "max-w-[1170px]   w-[90vw] py-4 m-auto";
 return (
   <section className="text-black">
     <header className="hidden bg-black relative items-center md:flex gap-x-[-5rem] md:gap-x-[13rem] md:justify-between  overflow-hidden h-[40vh]">
       <img
         src="/images\Ellipse 2056.png"
         alt="img"
         className="absolute top-[-0.03rem] w-24"
       />

       <img
         src="/images\Ellipse 2058.png"
         alt="img"
         className="absolute w-28 bottom-[-0.01rem]  left-[50%]"
       />

       <div className=" mx-auto  max-w-[500px]">
         <h3 className="font-headings block w-full text-white">
           Save Big And Enjoy Up To 20%  incredible Discount
         </h3>
         <p>
           Don’t miss out on these incredible discount off <br /> on selected
           menu items!
         </p>
         <button className="bg-brand text-white font-semibold p-2 rounded-md">
           order now
         </button>
       </div>
       <div>
         <img
           src="/images/menuIMG.png"
           alt="img"
           className="w-[27rem]  h-full flex-1"
         />
       </div>
     </header>
     <article className={`${className}`}>
        <h2 className="text-brand font-headings font-semibold text-center md:hidden">top menu</h2>
        <ul className="md:grid md:grid-cols-4 gap-2">
       {menu.map((item) => (
           <MenuItems item={item} />
        ))}
        </ul>
     </article>
   </section>
 );
}

export default Menu
