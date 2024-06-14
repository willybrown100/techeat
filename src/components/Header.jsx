import HeroImages, { HeroImages2 } from "./HeroImages";
import Button from "../ui/Button"

function Header() {

 
  const className = "max-w-[1170px] w-[90vw] m-auto";
 return (
   <header className="h-[100vh] grid place-items-center relative bg-black">
     <article
       className={`${className} md:flex md:justify-between flex flex-col gap-y-[2rem] md:gap-y-0 md:flex-row md:items-center`}
     >
       <HeroImages />

       <div className="top-[40%] absolute  ">
         <img src="\images\Frame 1171276716.png" alt="img" className=" " />
       </div>

       <div className="text-center md:text-left md:hidden z-[3]">
         <h3 className="text-white mb-4 font-headings text-6xl">are you</h3>
         <h2 className="font-headings text-center md:text-left text-6xl mb-4 text-brand">
           hungry?
         </h2>
         <p className="font-body">
           Explore the food menu to place your orders and get it delivered to
           your doorstep in a jiffy!
         </p>
         <button className="capitalize bg-brand rounded-md p-2 font-semibold">
           order now
         </button>
       </div>

       <div className="hidden md:block">
         <h2 className="font-headings font-semibold">the best food</h2>
         <h1 className="text-brand font-headings font-semibold">
           of your choice
         </h1>
         <p className="text-body font-semibold">
           Explore the food menu to place your orders and get it delivered to
           your doorstep in a jiffy
         </p>
         <Button >order now</Button>
       </div>

       <HeroImages2 />
     </article>
   </header>
 );
}

export default Header
