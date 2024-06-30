import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { HiOutlineArrowDownOnSquareStack, HiOutlineTruck } from "react-icons/hi2";

function OurService() {
  const className = "max-w-[1170px]   w-[90vw] py-4 m-auto";
 return (
   <section className={`bg-black`}>
     <article
       className={`${className} md:gap-x-8 md:grid md:grid-cols-2 md:items-center `}
     >
       <div className="mb-4">
         <img src="\images\Group 26898.png" className="" alt="img" />
       </div>

       <div className=" text-center md:text-left md:block gap-1 items-center">
         <div>
           <h2 className="font-headings sm:text-[2.6rem] mb-0 text-[1.6rem] md:mb-2  font-semibold ">
             why should
           </h2>
           <h3 className="text-brand w-full  font-headings   md:mb-auto font-semibold ">
             you use our services?
           </h3>
           <p className="hidden md:block text-sm sm:text-lg max-w-[12rem] md:max-w-[35rem] md:text-lg">
             we always provide the best and fastest services for our customers
           </p>
         </div>
         <div className="md:inline-flex  flex-col space-y-4">
           <strong className=" text-lg items-center gap-x-2 capitalize   p-2 px-4 md:text-[1rem] md:px-4 md:gap-x-2 md:p-2 rounded-md inline-flex  bg-white font-semibold text-black ">
             <span>
               <AiOutlineDeliveredProcedure className="text-brand text-4xl md:text-black" />
             </span>
             we provide the fastest services
           </strong>
           <br />
           <strong className="text-lg items-center capitalize p-2 px-[0.6rem] bg-white md:text-[1rem] md:px-4 md:p-2 rounded-md gap-x-2 font-semibold inline-flex text-black ">
             <HiOutlineArrowDownOnSquareStack className="text-brand text-4xl md:text-black" />
             no additional fees or for orders
           </strong>
           <br />
           <strong className=" items-center text-lg capitalize inline-flex rounded-md gap-x-2 p-2 px-4 md:px-4  md:text-[1rem]  bg-white font-semibold text text-black">
             <HiOutlineTruck className="text-brand text-4xl md:text-black" />
             we provide the fastest delivery
           </strong>
           <div className="hidden">
             <strong className=" items-center text-lg inline-flex rounded-md p-2 px-2 md:px-4  md:text-[1rem]  bg-white font-semibold text text-black">
               <HiOutlineTruck className="text-brand text-4xl md:text-black" />
               fast and reliable delivery
             </strong>
           </div>
         </div>
       </div>
     </article>
   </section>
 );
}

export default OurService
